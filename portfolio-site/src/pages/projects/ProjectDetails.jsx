/* eslint-disable react-hooks/exhaustive-deps */
import {
	Box,
	Flex,
	Heading,
	HStack,
	Icon,
	Image,
	ListItem,
	Text,
	UnorderedList,
	VStack,
} from "@chakra-ui/react"
import { useLoaderData, useOutletContext, useParams } from "react-router-dom"
import { useEffect } from "react"

// Utils
import { projects } from "../../utils/content"

// Icons
import { ImGithub } from "react-icons/im"
import { LinkIcon } from "@chakra-ui/icons"

// Components
import ExternalLink from "../../components/custom-links/ExternalLink"

// loader function
export const ProjectDetailsLoader = ({ params }) => {
	const { projKey } = params

	const res = projects.sections[projKey]
	if (res === undefined) {
		throw Error("Project Not Found")
	}
	return res
}

const ProjectDetails = () => {
	const project = useLoaderData()
	const { projKey } = useParams()
	const { setHeading } = useOutletContext()

	useEffect(() => {
		setHeading(projKey)
	}, [projKey])

	return (
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
				py={["20px", "20px", "20px", "60px"]}
			>
				<Heading
					as='h2'
					variant='pinkHalo'
					size='sm'
					textAlign='center'
				>
					{project.title}
				</Heading>
				<Text fontSize='sm' fontWeight='200' textAlign='justify'>
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
							return <ListItem key={index}>{tech}</ListItem>
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
	)
}

export default ProjectDetails
