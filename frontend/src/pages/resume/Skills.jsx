/* eslint-disable react/prop-types */
import { Box, Flex, Heading, Icon, Tooltip } from "@chakra-ui/react"
import { useOutletContext } from "react-router-dom"
import { useEffect } from "react"
import { motion } from "framer-motion"

// Components
import ExternalLink from "../../components/custom-links/ExternalLink"

const SkillCircle = ({ title, items, radius = 120, iconSize = 40 }) => {
	const numItems = items.length

	// stagger the icon animations
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	}

	const itemVariants = (index) => {
		// angle for item on the circle (360 = 2PI radians)
		const angle = (index / numItems) * 2 * Math.PI
		// horizontal and vertical offsets from center
		const x = radius * Math.cos(angle)
		const y = radius * Math.sin(angle)

		return {
			hidden: { x: 0, y: 0, opacity: 0, scale: 0.5 },
			visible: {
				x,
				y,
				opacity: 1,
				scale: 1,
				// higher stiffness = snappier, higher damping = less bounce
				transition: { type: "spring", stiffness: 100, damping: 30 },
			},
		}
	}

	return (
		<Box
			position='relative' // allows absolute positioning of icons
			w={`${radius * 2 + iconSize}px`}
			h={`${radius * 2 + iconSize}px`}
			flexShrink={0}
		>
			<Heading
				as='h2'
				size='sm'
				variant='pinkHalo'
				position='absolute'
				top='50%'
				left='50%'
				transform='translate(-50%, -50%)' // centers the heading
				textAlign='center'
				w='150px'
				zIndex={1}
			>
				{title}:
			</Heading>
			<Box
				as={motion.div}
				variants={containerVariants}
				initial='hidden'
				whileInView='visible' // animate when in view
				viewport={{ once: true, amount: 0.3 }} // triggers when 30% is visible
				position='absolute'
				top='0'
				left='0'
				w='100%'
				h='100%'
			>
				{items.map((item, index) => (
					<Tooltip
						key={item.name}
						label={item.name}
						placement='top'
						variant='skillTip'
					>
						<Box
							as={motion.div}
							key={item.name}
							variants={itemVariants(index)}
							position='absolute'
							top={`calc(50% - ${iconSize / 2}px)`}
							left={`calc(50% - ${iconSize / 2}px)`}
						>
							<ExternalLink
								path={item.url}
								label={
									<Icon as={item.icon} variant='skillLink' />
								}
							/>
						</Box>
					</Tooltip>
				))}
			</Box>
		</Box>
	)
}

const Skills = ({ items }) => {
	const { setHeading } = useOutletContext()

	useEffect(() => {
		setHeading("skills")
	}, [setHeading])

	return (
		<Flex
			w='100%'
			px={["20px", "40px"]}
			pt='50px'
			pb='80px'
			overflowX='auto'
			overflowY='auto'
			maxW='800px'
			justify={["center", "center", "flex-start"]}
			align={["flex-start", "center", "center"]}
			wrap='nowrap'
			gap='100px'
			direction={["column", "column", "row"]}
		>
			<SkillCircle
				title='Languages'
				items={items.languages}
				radius={120}
			/>
			<SkillCircle
				title='Libraries / Frameworks'
				items={items.libraries}
				radius={140}
			/>
			<SkillCircle
				title='Tools / Platforms'
				items={items.platforms}
				radius={100}
			/>
			<SkillCircle
				title='Databases'
				items={items.databases}
				radius={100}
			/>
		</Flex>
	)
}

export default Skills
