import PropTypes from "prop-types"
import { Link } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

const InternalLink = ({ path, label }) => {
	return (
		<Link as={NavLink} to={path} variant='global'>
			{label}
		</Link>
	)
}

InternalLink.propTypes = {
	path: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
}

export default InternalLink
