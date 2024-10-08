/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Flex, Icon, Link, Text, VStack } from "@chakra-ui/react"
import { useEffect } from "react"
import { Link as RRLink, useOutletContext } from "react-router-dom"

// Icons
import { GrDocumentPdf } from "react-icons/gr"
import { IoSchoolSharp } from "react-icons/io5"
import { MdWorkHistory } from "react-icons/md"
import { FaTools } from "react-icons/fa"

const Resume = () => {
	const { isLrgScreen, setHeading, setIsIndex } = useOutletContext()

	useEffect(() => {
		setHeading("RESUME")
		setIsIndex(true)

		return () => {
			setIsIndex(false)
		}
	}, [])

	return (
		<VStack
			flex={["unset", 1]}
			align='center'
			w='100%'
			justify='space-evenly'
			spacing='30px'
			pb='20px'
		>
			<Flex
				as='nav'
				width='100%'
				justify='center'
				align={["stretch", "center"]}
				gap={["20px", "60px"]}
				direction={["column", "row"]}
			>
				<Button as={RRLink} to='education' variant='pinkLight'>
					<VStack>
						<Icon as={IoSchoolSharp} boxSize={8} />
						{isLrgScreen && <Text>Education</Text>}
					</VStack>
				</Button>
				<Button as={RRLink} to='experience' variant='pinkLight'>
					<VStack>
						<Icon as={MdWorkHistory} boxSize={8} />
						{isLrgScreen && <Text>Experience</Text>}
					</VStack>
				</Button>
				<Button as={RRLink} to='skills' variant='pinkLight'>
					<VStack>
						<Icon as={FaTools} boxSize={8} />
						{isLrgScreen && <Text>Skills</Text>}
					</VStack>
				</Button>
			</Flex>
			<Text
				w='100%'
				textAlign='center'
				fontWeight='100'
				color='foreground'
				fontSize='14px'
			>
				Click{" "}
				<Link
					href='/files/resume.pdf'
					download='KSandeen-resume'
					color='primary.100'
					_hover={{ color: "secondary.100" }}
				>
					<Icon as={GrDocumentPdf} boxSize={6} />
				</Link>{" "}
				to download a hard copy of my resume.
			</Text>
		</VStack>
	)
}

export default Resume
