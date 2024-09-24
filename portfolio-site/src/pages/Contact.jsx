import {
	Button,
	Container,
	Flex,
	FormControl,
	FormHelperText,
	FormLabel,
	Heading,
	HStack,
	Icon,
	Input,
	Text,
	Textarea,
	VStack,
} from "@chakra-ui/react"
import { Form, useSubmit } from "react-router-dom"
import { useFormik } from "formik"
import * as yup from "yup"

// Icons
import { RiSendPlaneFill } from "react-icons/ri"

const Contact = () => {
	const submit = useSubmit()

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
				.matches(
					/^((?:[A-Za-z0-9!#$%&'*+\-\/=?^_`{|}~]|(?<=^|\.)"|"(?=$|\.|@)|(?<=".*)[ .](?=.*")|(?<!\.)\.){1,64})(@)((?:[A-Za-z0-9.\-])*(?:[A-Za-z0-9])\.(?:[A-Za-z0-9]){1,})$/gm,
					"Please enter a valid email:"
				)
				.required("Email is required:"),
			subject: yup
				.string()
				.required("Subject line is required:")
				.min(10, "Subject must be at least 10 characters:"),
			message: yup
				.string()
				.required("Message is required:")
				.min(20, "Message must be at least 20 characters:"),
		}),
		onSubmit: async (values) => {
			submit(values, {
				method: "post",
				action: "/contact",
			})
		},
	})

	return (
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
			<Form onSubmit={formik.handleSubmit}>
				<VStack spacing='8px'>
					<Flex
						w='100%'
						direction={["column", "row", "column", null, "row"]}
						gap={["8px", "20px", "8px", null, "20px"]}
					>
						<FormControl>
							<FormHelperText
								my='2px'
								mx='8px'
								fontWeight={300}
								fontStyle='italic'
								fontSize='xs'
								color={
									formik.touched.name && formik.errors.name
										? "red.500"
										: "foreground"
								}
							>
								{formik.touched.name && formik.errors.name
									? formik.errors.name
									: "Please enter your full name:"}
							</FormHelperText>
							<Input
								type='text'
								name='name'
								onChange={formik.handleChange}
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
									formik.touched.email && formik.errors.email
										? "red.500"
										: "foreground"
								}
							>
								{formik.touched.email && formik.errors.email
									? formik.errors.email
									: "Please enter your email:"}
							</FormHelperText>
							<Input
								type='email'
								name='email'
								onChange={formik.handleChange}
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
								formik.touched.subject && formik.errors.subject
									? "red.500"
									: "foreground"
							}
						>
							{formik.touched.subject && formik.errors.subject
								? formik.errors.subject
								: "Please enter a subject line:"}
						</FormHelperText>
						<Input
							type='text'
							name='subject'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							isRequired
							minLength={10}
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
								formik.touched.message && formik.errors.message
									? "red.500"
									: "foreground"
							}
						>
							{formik.touched.message && formik.errors.message
								? formik.errors.message
								: "Please enter your message:"}
						</FormHelperText>
						<Textarea
							name='message'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							isRequired
							minLength={20}
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
					>
						<HStack>
							<Icon as={RiSendPlaneFill} boxSize={4} />
							<Text>Send</Text>
						</HStack>
					</Button>
				</VStack>
			</Form>
		</Container>
	)
}

export default Contact
