/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import {
	Divider,
	Flex,
	Heading,
	ListItem,
	Text,
	UnorderedList,
	VStack,
} from "@chakra-ui/react"
import { useEffect } from "react"
import { useOutletContext } from "react-router-dom"

const Education = ({ items }) => {
	const { setHeading } = useOutletContext()

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
			{stackItems}
		</VStack>
	)
}

export default Education
