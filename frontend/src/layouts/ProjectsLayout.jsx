import PropTypes from "prop-types"
import {
	Button,
	Center,
	Container,
	Heading,
	Spinner,
	VStack,
	useToast,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { Outlet, useOutletContext } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

// Components
import LocalNav from "../components/navigation/LocalNav"

const ProjectsLayout = ({ projects }) => {
	const isLrgScreen = useOutletContext()
	const toast = useToast()

	const [heading, setHeading] = useState("PROJECTS")
	const [isIndex, setIsIndex] = useState(false)

	// Fetch projects from db
	const { isLoading, isError, error, refetch, isFetching } = useQuery({
		queryKey: ["projects"],
		queryFn: async () => {
			const res = await axios.get(`${import.meta.env.VITE_API}projects/`)
			projects.sections = res.data
			return res.data
		},
		retry: 1,
	})

	// Fire toast on error
	useEffect(() => {
		if (isError && error) {
			console.error(error)
			toast({
				description:
					error.response?.data?.error ||
					"Could not retrieve projects from server.",
				status: "error",
			})
		}
	}, [isError, error, toast])

	return (
		<Container
			as='main'
			variant='greenHalo'
			w={["100%", null, "90%"]}
			px={["25px", "25px", "60px"]}
		>
			{isError ? (
				<Center as='article' minHeight='67vh' py='30px' maxW='100%'>
					<VStack spacing={5}>
						<Heading
							as='h2'
							variant='pinkHalo'
							fontWeight='bold'
							fontSize='xl'
						>
							Failed to load projects.
						</Heading>
						<Button
							onClick={() => refetch()}
							isLoading={isFetching}
							variant='pinkLight'
						>
							Retry
						</Button>
					</VStack>
				</Center>
			) : (
				<VStack
					as='article'
					minHeight='67vh'
					py='30px'
					maxW='100%'
					gap='30px'
				>
					{isLoading ? (
						<Center h='100%' w='100%'>
							<Spinner color='foreground' size='xl' />
						</Center>
					) : (
						<>
							<LocalNav
								heading={heading}
								isIndex={isIndex}
								isLrgScreen={isLrgScreen}
								page={projects}
							/>
							<Outlet
								context={{
									isLrgScreen,
									projects: projects.sections,
									setHeading,
									setIsIndex,
								}}
							/>
						</>
					)}
				</VStack>
			)}
		</Container>
	)
}

ProjectsLayout.propTypes = {
	projects: PropTypes.object.isRequired,
}

export default ProjectsLayout
