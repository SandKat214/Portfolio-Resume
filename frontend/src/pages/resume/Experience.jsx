/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import {
	Center,
	Divider,
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

const Experience = () => {
	const { setHeading } = useOutletContext()
	const toast = useToast()

	const [items, setItems] = useState([])

	// Fetch education from db
	const { isFetching } = useQuery({
		queryKey: ["education"],
		queryFn: async () => {
			try {
				const res = await axios.get(
					`${import.meta.env.VITE_API}experience/`
				)

				setItems(res.data)
				return res.data
			} catch (error) {
				console.log(error)
				toast({
					description:
						error.response.data.error ||
						"Could not retrieve experience from server.",
					status: "error",
				})
				return error
			}
		},
	})

	const stackItems = items.map((item, index) => {
		return (
			<VStack key={index} as='section' align='center' gap='20px'>
				<VStack as='header' gap='15px' textAlign='center'>
					<Heading as='h2' size='sm' variant='pinkHalo'>
						{item.title}
					</Heading>
					<Heading as='h3' size='sm'>
						{item.company}
					</Heading>
				</VStack>
				<VStack
					fontSize='13px'
					fontStyle='italic'
					fontWeight='100'
					gap='20px'
					lineHeight='1.5em'
				>
					<Text as='span' fontStyle='normal' fontWeight='bold'>
						{item.start + " - " + item.end}
					</Text>
					<UnorderedList>
						{item.bullets.map((bullet, index) => {
							return <ListItem key={index}>{bullet}</ListItem>
						})}
					</UnorderedList>
				</VStack>
			</VStack>
		)
	})

	useEffect(() => {
		setHeading("experience")
	}, [])

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

export default Experience
