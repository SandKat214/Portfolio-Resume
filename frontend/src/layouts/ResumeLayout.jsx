import PropTypes from "prop-types"
import { Container, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { Outlet, useOutletContext } from "react-router-dom"

// Components
import LocalNav from "../components/navigation/LocalNav"

const ResumeLayout = ({ resume }) => {
	const isLrgScreen = useOutletContext()
	const [heading, setHeading] = useState("RESUME")
	const [isIndex, setIsIndex] = useState(false)

	return (
		<Container
			as='main'
			variant='greenHalo'
			w={["100%", null, "90%"]}
			px={["25px", "25px", "60px"]}
		>
			<VStack
				as='article'
				minHeight='67vh'
				py='30px'
				maxW='100%'
				gap='30px'
			>
				<LocalNav
					heading={heading}
					isIndex={isIndex}
					isLrgScreen={isLrgScreen}
					page={resume}
				/>
				<Outlet context={{ isLrgScreen, setHeading, setIsIndex }} />
			</VStack>
		</Container>
	)
}

ResumeLayout.propTypes = {
	resume: PropTypes.object.isRequired,
}

export default ResumeLayout
