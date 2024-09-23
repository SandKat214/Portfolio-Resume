/* eslint-disable react/prop-types */
import { Link } from "@chakra-ui/react"
import { Link as RRLink } from "react-router-dom"

const ExternalLink = ({ path, label }) => {
	return (
		<Link as={RRLink} to={path} isExternal>
			{label}
		</Link>
	)
}

export default ExternalLink
