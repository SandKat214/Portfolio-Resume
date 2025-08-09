/* eslint-disable react/prop-types */
import { Heading } from "@chakra-ui/react"
import Typewriter from "typewriter-effect"

const TypewriterHeading = ({ text, keepCursor = false, ...props }) => {
	return (
		<Heading {...props} fontWeight='bold'>
			<Typewriter
				key={text}
				onInit={(typewriter) => {
					typewriter
						.typeString(text)
						.pauseFor(1300)
						.callFunction((state) => {
							if (!keepCursor) {
								state.elements.cursor.style.display = "none"
							}
						})
						.start()
				}}
				options={{
					delay: 110,
					cursor: "|",
					wrapperClassName: "typewriter-wrapper-gradient",
				}}
			/>
		</Heading>
	)
}

export default TypewriterHeading
