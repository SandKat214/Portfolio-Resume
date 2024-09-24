import {
	Button,
	Container,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	HStack,
	Icon,
	Input,
	Text,
	Textarea,
	VStack,
} from "@chakra-ui/react"
import { Form } from "react-router-dom"

// Icons
import { RiSendPlaneFill } from "react-icons/ri"

const Contact = () => {
	return (
		<Container
			as='section'
			w='auto'
			boxShadow='0 0 20px #D253FF'
			borderRadius='20px'
			p='25px'
			m={['auto', '20px']}
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
			<Form>
				<VStack spacing='10px'>
					<Flex
						w='100%'
						direction={["column", "row", "column", null, "row"]}
						gap={["8px", "20px", "8px", "20px"]}
					>
						<FormControl>
							<FormLabel variant='contact' m='0'>
								Name:
							</FormLabel>
							<Input
								type='text'
								name='name'
								size='xs'
								w='100%'
								variant='contact'
							/>
						</FormControl>
						<FormControl>
							<FormLabel variant='contact' m='0'>
								Email:
							</FormLabel>
							<Input
								type='email'
								name='email'
								size='xs'
								w='100%'
								variant='contact'
							/>
						</FormControl>
					</Flex>
					<FormControl>
						<FormLabel variant='contact' m='0'>
							Subject:
						</FormLabel>
						<Input
							type='text'
							name='subject'
							size='xs'
							variant='contact'
						/>
					</FormControl>
					<FormControl>
						<FormLabel variant='contact' m='0'>
							Message:
						</FormLabel>
						<Textarea
							name='message'
							variant='contact'
							fontSize='xs'
						/>
					</FormControl>
					<Button
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
