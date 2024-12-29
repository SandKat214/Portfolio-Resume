/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import {
	Center,
	Divider,
	Flex,
	Heading,
	ListItem,
	Spinner,
	Text,
	UnorderedList,
	useToast,
	VStack,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useOutletContext } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const Education = () => {
	const { setHeading } = useOutletContext()
	const toast = useToast()

	const [items, setItems] = useState([])

	// Fetch education from db
	const { isFetching } = useQuery({
		queryKey: ["education"],
		queryFn: async () => {
			try {
				const res = await axios.get(
					`${import.meta.env.VITE_API}education/`
				)

				setItems(res.data)
				return res.data
			} catch (error) {
				console.log(error)
				toast({
					description:
						error.response.data.error ||
						"Could not retrieve education from server.",
					status: "error",
				})
				return error
			}
		},
	})

	useEffect(() => {
		setHeading("education")
	}, [])

	const stackItems = items.map((item, index) => {
		return (
			<VStack as='section' key={index} align='center' gap='20px'>
				<VStack as='header' gap='15px' textAlign='center'>
					<Heading as='h2' color='foreground' size='sm'>
						{item.school}
					</Heading>
					<Heading as='h3' size='sm' variant='pinkHalo'>
						{item.degree}
					</Heading>
				</VStack>
				<Flex
					direction={["column", "row"]}
					fontSize='13px'
					fontStyle='italic'
					fontWeight='100'
					gap={["15px", "40px"]}
					align='flex-start'
				>
					<VStack
						justify={["center"]}
						align={["center", "flex-end"]}
						textAlign={["center", "right"]}
					>
						<Text>
							<Text
								as='span'
								fontStyle='normal'
								fontWeight='bold'
							>
								Date:
							</Text>
							{" " + item.grad}
						</Text>
						<Text>
							<Text
								as='span'
								fontStyle='normal'
								fontWeight='bold'
							>
								GPA:
							</Text>
							{" " + item.gpa}
						</Text>
					</VStack>
					<VStack
						lineHeight='1.4em'
						align={["center", "flex-start"]}
						textAlign='left'
					>
						<Text as='h4' fontStyle='normal' fontWeight='bold'>
							Relevant Coursework:
						</Text>
						<UnorderedList>
							{item.coursework.map((course, index) => {
								return <ListItem key={index}>{course}</ListItem>
							})}
						</UnorderedList>
					</VStack>
				</Flex>
			</VStack>
		)
	})

	return (
		<VStack
			px={["15px", "60px"]}
			py='20px'
			w='100%'
			spacing='40px'
			overflowY='auto'
			maxW='650px'
			divider={<Divider borderColor='secondary.100' />}
		>
			{isFetching ? (
				<Center h='100%' w='100%'>
					<Spinner color='foreground' size='xl' />
				</Center>
			) : (
				stackItems
			)}
		</VStack>
	)
}

export default Education
