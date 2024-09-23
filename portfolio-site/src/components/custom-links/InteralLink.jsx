/* eslint-disable react/prop-types */
import { Link } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

const InternalLink = ({ path, label }) => {
	return (
		<Link as={NavLink} to={path} variant='global'>
			{label}
		</Link>
	)
}

export default InternalLink
