import {
	Container,
	Flex,
	Heading,
	HStack,
	Icon,
	Link,
	Text,
	VStack,
} from "@chakra-ui/react"
import { useState } from "react"
import { Outlet, useOutletContext } from "react-router-dom"

// Components
import LocalNav from "../components/navigation/LocalNav"

// Icons
import { IoMdMail } from "react-icons/io"
import { FaPhone } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"

const ContactLayout = ({ contact }) => {
	const isLrgScreen = useOutletContext
	const [heading, setHeading] = useState("getInTouch")
	const [isIndex, setIsIndex] = useState(true)

	return (
		<Container
			as='main'
			variant='greenHalo'
			w={["100%", null, "90%"]}
			minHeight='67vh'
			maxHeight={["unset", null, null, "67vh"]}
			px={["25px", null, null, "60px"]}
			overflow='hidden'
		>
			<VStack
				as='article'
				minHeight='67vh'
				maxHeight={["unset", null, null, "67vh"]}
				py='30px'
				maxW='100%'
				gap={["35px", null, null, "20px"]}
			>
				<LocalNav
					heading={heading}
					isIndex={isIndex}
					isLrgScreen={isLrgScreen}
					page={contact}
				/>
				<VStack w='100%' overflowY={["unset", "auto"]}>
					<Flex
						w='100%'
						direction={["column", null, "row"]}
						justify='space-between'
						gap='15px'
					>
						<VStack
							as='section'
							p={["20px 0", null, "40px 20px"]}
							align={["center", null, "flex-start"]}
							spacing='30px'
						>
							<Heading
								as='h2'
								w='100%'
								variant='pinkHalo'
								size='sm'
							>
								Contact Directly...
							</Heading>
							<VStack
								align='flex-start'
								spacing={["10px", null, "25px"]}
								fontSize='sm'
							>
								<Text fontWeight={300}>
									Katherine 'Katie' Sandeen
								</Text>
								<Link
									as='a'
									href='mailto:sandeenk@oregonstate.edu'
									variant='contact'
								>
									<HStack>
										<Icon as={IoMdMail} boxSize={5} />{" "}
										<Text as='span'>
											sandeenk@oregonstate.edu
										</Text>
									</HStack>
								</Link>
								<Link
									as='a'
									href='tel:+9043864846'
									variant='contact'
								>
									<HStack>
										<Icon as={FaPhone} boxSize={5} />{" "}
										<Text as='span'>+1 904-386-4846</Text>
									</HStack>
								</Link>
								<HStack>
									<Icon
										as={FaLocationDot}
										boxSize={5}
										color='primary.100'
									/>{" "}
									<Text as='span' fontWeight={200}>
										Portland, OR, USA
									</Text>
								</HStack>
							</VStack>
						</VStack>
						<Outlet
							context={{ isLrgScreen, setHeading, setIsIndex }}
						/>
					</Flex>
				</VStack>
			</VStack>
		</Container>
	)
}

export default ContactLayout
