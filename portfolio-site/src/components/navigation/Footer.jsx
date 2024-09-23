import { HStack, Icon } from "@chakra-ui/react"

// Icons
import { ImGithub, ImLinkedin } from "react-icons/im"

// Components
import ExternalLink from "../custom-links/ExternalLink"

const Footer = () => {
	return (
		<HStack
			as='footer'
			w='100%'
			justify={["center", "flex-end"]}
			align='center'
		>
			<HStack as='nav' spacing='70px'>
				<ExternalLink
					path='https://github.com/SandKat214'
					label={
						<Icon
							as={ImGithub}
							variant='externalLink'
							borderRadius='full'
						/>
					}
				/>
				<ExternalLink
					path='https://www.linkedin.com/in/sandeenk/'
					label={
						<Icon
							as={ImLinkedin}
							variant='externalLink'
							borderRadius='4px'
						/>
					}
				/>
			</HStack>
		</HStack>
	)
}

export default Footer
