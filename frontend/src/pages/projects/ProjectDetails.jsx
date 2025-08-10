import {
	Box,
	Center,
	Flex,
	Heading,
	HStack,
	Icon,
	Image,
	ListItem,
	Spinner,
	Text,
	UnorderedList,
	useToast,
	VStack,
} from "@chakra-ui/react"
import { useOutletContext, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

// Icons
import { ImGithub } from "react-icons/im"
import { LinkIcon } from "@chakra-ui/icons"

// Components
import ExternalLink from "../../components/custom-links/ExternalLink"

const ProjectDetails = () => {
	const { projKey } = useParams()
	const { setHeading } = useOutletContext()
	const toast = useToast()

	const [project, setProject] = useState({})

	// Fetch project from db
	const { isFetching } = useQuery({
		queryKey: ["project", projKey],
		queryFn: async () => {
			try {
				const res = await axios.get(
					`${import.meta.env.VITE_API}projects/${projKey}`
				)
				setProject(res.data)
				return res.data
			} catch (error) {
				console.log(error)
				toast({
					description:
						error.response.data.error ||
						"Could not retrieve project from server.",
					status: "error",
				})
				return error
			}
		},
	})

	useEffect(() => {
		setHeading(projKey)
	}, [projKey, setHeading])

	return (
		<>
			{isFetching ? (
				<Center h='100%' w='100%'>
					<Spinner color='foreground' size='xl' />
				</Center>
			) : (
				<Flex
					as='section'
					direction={["column", "column", "column", "row"]}
					w='100%'
					maxW='100%'
					maxH='100%'
					px={["0", "0", "15px"]}
					justify={["center", "center", "space-evenly"]}
					flex={1}
					gap={["10px", "10px", "10px", "45px"]}
					overflowY='auto'
				>
					<VStack
						w={["100%", "100%", "100%", "40%"]}
						spacing={["24px"]}
						py={["20px", "20px", "20px", "30px"]}
					>
						<Heading
							as='h2'
							variant='pinkHalo'
							size='sm'
							textAlign='center'
						>
							{project.title}
						</Heading>
						<Text
							fontSize='sm'
							fontWeight='200'
							textAlign='justify'
						>
							{project.desc}
						</Text>
						<HStack
							w='100%'
							align='flex-start'
							justify='space-around'
							spacing='25px'
						>
							<UnorderedList
								fontSize='sm'
								fontWeight='100'
								fontStyle='italic'
								pt='5px'
							>
								{project.tech.map((tech, index) => {
									return (
										<ListItem key={index}>{tech}</ListItem>
									)
								})}
							</UnorderedList>
							<VStack as='nav'>
								<ExternalLink
									path={project.gitHub}
									label={
										<Icon
											as={ImGithub}
											variant='skillLink'
											borderRadius='full'
										/>
									}
									toolTip='GitHub Repo'
									variant='skillTip'
								/>

								{project.webLink && (
									<ExternalLink
										path={project.webLink}
										label={
											<Icon
												as={LinkIcon}
												variant='skillLink'
												borderRadius='4px'
											/>
										}
										toolTip='Web Link'
										variant='skillTip'
									/>
								)}
							</VStack>
						</HStack>
					</VStack>
					<Box
						as='figure'
						w={["100%", "100%", "100%", "45%"]}
						maxH='100%'
						py={["10px", "30px", "30px", "30px"]}
						px={["10px", "30px", "30px", "0"]}
					>
						<Image
							src={project.image}
							alt={project.title}
							maxH='100%'
							maxW='100%'
							float='right'
							borderRadius='10px'
							boxShadow={["0 0 10px #D253FF", "0 0 30px #D253FF"]}
						/>
					</Box>
				</Flex>
			)}
		</>
	)
}

export default ProjectDetails
