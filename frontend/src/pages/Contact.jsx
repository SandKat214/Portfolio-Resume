import PropTypes from "prop-types"
import {
	Button,
	Container,
	Flex,
	FormControl,
	FormHelperText,
	Heading,
	HStack,
	Icon,
	Input,
	Link,
	Text,
	Textarea,
	useToast,
	VStack,
} from "@chakra-ui/react"
import { Form, useOutletContext } from "react-router-dom"
import { useFormik } from "formik"
import * as yup from "yup"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"

// Components
import LocalNav from "../components/navigation/LocalNav"

// Icons
import { IoMdMail } from "react-icons/io"
import { FaPhone } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { RiSendPlaneFill } from "react-icons/ri"
import { useState } from "react"

const Contact = ({ contact }) => {
	const isLrgScreen = useOutletContext()
	const toast = useToast()
	const [status, setStatus] = useState(null)

	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
		},
		validationSchema: yup.object().shape({
			name: yup.string().required("Name is required:"),
			email: yup
				.string()
				.email("Enter a valid email:")
				.required("Email is required:"),
			subject: yup.string().required("Subject line is required:"),
			message: yup.string().required("Message is required:"),
		}),
		onSubmit: async (values) => {
			mutateAsync(values)
		},
	})

	// send contact email
	const { isPending, mutateAsync } = useMutation({
		mutationFn: async (values) => {
			try {
				const data = {
					name: values.name,
					email: values.email,
					subject: values.subject,
					message: values.message,
				}
				const res = await axios.post(
					`${import.meta.env.VITE_API}contact/`,
					data
				)
				setStatus(res.status)
				toast({ description: "Email sent.", status: "success" })
			} catch (error) {
				console.log(error)
				toast({
					description:
						error.response.data.message || "Error sending email.",
					status: "error",
				})
			}
		},
	})

	return (
		<Container
			as='main'
			variant='greenHalo'
			w={["100%", null, "90%"]}
			px={["25px", null, null, "60px"]}
		>
			<VStack
				as='article'
				minHeight='67vh'
				py='30px'
				maxW='100%'
				gap={["35px", null, null, "20px"]}
			>
				<LocalNav
					heading={"getInTouch"}
					isIndex={true}
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
									Katherine &lsquo;Katie&rsquo; Sandeen
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
						<Container
							as='section'
							w='auto'
							boxShadow='0 0 20px #D253FF'
							borderRadius='20px'
							p='25px'
							m={["auto", "20px"]}
							flex={1}
						>
							<Heading
								as='h2'
								size='sm'
								variant='pinkHalo'
								textAlign='right'
								mb='15px'
							>
								...or via form
							</Heading>
							{status && status === 200 ? (
								<VStack
									w='80%'
									gap={15}
									m='30px auto'
									textAlign='center'
									justify='center'
								>
									<Heading
										as='h3'
										size='sm'
										variant='pinkHalo'
									>
										Your message has been received!
									</Heading>
									<Text fontWeight={100} fontStyle='italic'>
										Thank you for reaching out,{" "}
										{formik.values.name}, I will respond
										within 24 hours...
									</Text>
								</VStack>
							) : (
								<Form onSubmit={formik.handleSubmit}>
									<VStack spacing='8px'>
										<Flex
											w='100%'
											direction={[
												"column",
												"row",
												"column",
												null,
												"row",
											]}
											gap={[
												"8px",
												"20px",
												"8px",
												null,
												"20px",
											]}
										>
											<FormControl>
												<FormHelperText
													my='2px'
													mx='8px'
													fontWeight={300}
													fontStyle='italic'
													fontSize='xs'
													color={
														formik.touched.name &&
														formik.errors.name
															? "red.500"
															: "foreground"
													}
												>
													{formik.touched.name &&
													formik.errors.name
														? formik.errors.name
														: "Enter your full name:"}
												</FormHelperText>
												<Input
													type='text'
													name='name'
													value={formik.values.name}
													onChange={
														formik.handleChange
													}
													onBlur={formik.handleBlur}
													isRequired
													size='xs'
													w='100%'
													variant='contact'
												/>
											</FormControl>
											<FormControl>
												<FormHelperText
													my='2px'
													mx='8px'
													fontWeight={300}
													fontStyle='italic'
													fontSize='xs'
													color={
														formik.touched.email &&
														formik.errors.email
															? "red.500"
															: "foreground"
													}
												>
													{formik.touched.email &&
													formik.errors.email
														? formik.errors.email
														: "Enter your email:"}
												</FormHelperText>
												<Input
													type='email'
													name='email'
													value={formik.values.email}
													onChange={
														formik.handleChange
													}
													onBlur={formik.handleBlur}
													isRequired
													size='xs'
													w='100%'
													variant='contact'
												/>
											</FormControl>
										</Flex>
										<FormControl>
											<FormHelperText
												my='2px'
												mx='8px'
												fontWeight={300}
												fontStyle='italic'
												fontSize='xs'
												color={
													formik.touched.subject &&
													formik.errors.subject
														? "red.500"
														: "foreground"
												}
											>
												{formik.touched.subject &&
												formik.errors.subject
													? formik.errors.subject
													: "Enter a subject line:"}
											</FormHelperText>
											<Input
												type='text'
												name='subject'
												value={formik.values.subject}
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												isRequired
												size='xs'
												variant='contact'
											/>
										</FormControl>
										<FormControl>
											<FormHelperText
												my='2px'
												mx='8px'
												fontWeight={300}
												fontStyle='italic'
												fontSize='xs'
												color={
													formik.touched.message &&
													formik.errors.message
														? "red.500"
														: "foreground"
												}
											>
												{formik.touched.message &&
												formik.errors.message
													? formik.errors.message
													: "Enter your message:"}
											</FormHelperText>
											<Textarea
												name='message'
												value={formik.values.message}
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												isRequired
												variant='contact'
												fontSize='xs'
											/>
										</FormControl>
										<Button
											type='submit'
											variant='pinkLight'
											mt='15px'
											py='5px'
											alignSelf='flex-end'
											leftIcon={
												<Icon
													as={RiSendPlaneFill}
													boxSize={4}
												/>
											}
											isLoading={isPending}
											loadingText={"Sending..."}
										>
											<Text>Send</Text>
										</Button>
									</VStack>
								</Form>
							)}
						</Container>
					</Flex>
				</VStack>
			</VStack>
		</Container>
	)
}

Contact.propTypes = {
	contact: PropTypes.object.isRequired,
}

export default Contact
