import { VStack } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import { useEffect, useState } from "react"

// Components
import Navbar from "../components/navigation/Navbar"
import Footer from "../components/navigation/Footer"

const RootLayout = () => {
	const [isLrgScreen, setLargeScreen] = useState(false)

	const handleResize = () => {
		if (window.innerWidth < 600) {
			setLargeScreen(false)
		} else {
			setLargeScreen(true)
		}
	}

	useEffect(() => {
		handleResize()
		window.addEventListener("resize", handleResize)

		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [])

	return (
		<VStack w='100vw' minH='100vh' align='center'>
			<VStack
				w='100%'
				maxW='1300px'
				justify='space-between'
				align='center'
				spacing='50px'
				flex={["unset", 1]}
				p='40px'
			>
				<Navbar isLrgScreen={isLrgScreen} />
				<Outlet context={isLrgScreen} flex='1' />
				<Footer />
			</VStack>
		</VStack>
	)
}

export default RootLayout
