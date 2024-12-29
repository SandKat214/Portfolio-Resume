/* eslint-disable react/prop-types */
import {
	Drawer,
	DrawerContent,
	DrawerOverlay,
	Flex,
	HStack,
	IconButton,
	Image,
	useDisclosure,
	VStack,
} from "@chakra-ui/react"

// Icons
import { HamburgerIcon } from "@chakra-ui/icons"

// Components
import InternalLink from "../custom-links/InteralLink"

const Navbar = ({ isLrgScreen }) => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<HStack
			as='header'
			w='100%'
			justify='space-between'
			align='flex-start'
			gap='30px'
		>
			{isLrgScreen ? (
				<Flex as='nav' gap='20px' justify='flex-start'>
					<InternalLink path='/' label='Home' />
					<InternalLink path='/resume' label='Resume' />
					<InternalLink path='/projects' label='Projects' />
					<InternalLink path='/contact' label='Contact' />
				</Flex>
			) : (
				<>
					<IconButton
						aria-label='nav menu'
						icon={<HamburgerIcon />}
						onClick={onOpen}
						bg='background'
						color='primary.100'
						border='1px solid #00DBB4'
						_hover={{
							color: "secondary.900",
							bg: "primary.100",
							boxShadow: "0 0 10px 5px #00DBB4",
							textShadow: "0px 0px 5px #D253FF",
						}}
					/>
					<Drawer
						isOpen={isOpen}
						placement='left'
						onClose={onClose}
						variant='primary'
					>
						<DrawerOverlay />
						<DrawerContent px='50px' py='90px' onClick={onClose}>
							<VStack as='nav' spacing='40px' align='center'>
								<InternalLink path='/' label='Home' />
								<InternalLink path='/resume' label='Resume' />
								<InternalLink
									path='/projects'
									label='Projects'
								/>
								<InternalLink path='/contact' label='Contact' />
							</VStack>
						</DrawerContent>
					</Drawer>
				</>
			)}
			<Image boxSize='45px' src='/Avatar.svg' />
		</HStack>
	)
}

export default Navbar
