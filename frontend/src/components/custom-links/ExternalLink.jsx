import PropTypes from "prop-types"
import { Link, Tooltip } from "@chakra-ui/react"
import { Link as RRLink } from "react-router-dom"

const ExternalLink = ({ path, label, toolTip, variant }) => {
	return (
		<Tooltip label={toolTip} placement='top' variant={variant}>
			<Link as={RRLink} to={path} isExternal>
				{label}
			</Link>
		</Tooltip>
	)
}

ExternalLink.propTypes = {
	path: PropTypes.string.isRequired,
	label: PropTypes.node.isRequired,
	toolTip: PropTypes.string.isRequired,
	variant: PropTypes.string.isRequired,
}

export default ExternalLink
