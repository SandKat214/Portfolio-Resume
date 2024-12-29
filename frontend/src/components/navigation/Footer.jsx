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
							variant='socialLink'
							borderRadius='full'
						/>
					}
					toolTip='Visit my GitHub'
					variant='socialTip'
				/>
				<ExternalLink
					path='https://www.linkedin.com/in/sandeenk/'
					label={
						<Icon
							as={ImLinkedin}
							variant='socialLink'
							borderRadius='4px'
						/>
					}
					toolTip='Visit my LinkedIn'
					variant='socialTip'
				/>
			</HStack>
		</HStack>
	)
}

export default Footer
