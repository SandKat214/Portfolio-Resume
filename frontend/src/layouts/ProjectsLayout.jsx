/* eslint-disable react/prop-types */
import { Center, Container, Spinner, VStack, useToast } from "@chakra-ui/react"
import { useState } from "react"
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
	const { isLoading } = useQuery({
		queryKey: ["projects"],
		queryFn: async () => {
			try {
				const res = await axios.get(
					`${import.meta.env.VITE_API}projects/`
				)
				projects.sections = res.data
				return res.data
			} catch (error) {
				console.log(error)

				toast({
					description:
						error.response.data.error ||
						"Could not retieve projects from the server.",
					status: "error",
				})
				return error
			}
		},
	})

	return (
		<Container
			as='main'
			variant='greenHalo'
			w={["100%", null, "90%"]}
			px={["25px", "25px", "60px"]}
		>
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
		</Container>
	)
}

export default ProjectsLayout
