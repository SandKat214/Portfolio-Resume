import { Container, VStack } from "@chakra-ui/react"
import LocalNav from "../components/LocalNav"
import { resume } from "../utils/content"
import { useState } from "react"
import { useOutletContext } from "react-router-dom"

// Components
import Education from "../components/Education"
import Experience from "../components/Experience"
import Skills from "../components/Skills"


const Resume = () => {
    const isLrgScreen = useOutletContext();

    const [section, setSection] = useState(resume.education);

    return (
        <Container 
            as='main' 
            variant='greenHalo' 
            w={["100%", null, "90%"]} 
            flex={[1]}
            p='30px 60px'
        >
            <VStack
                w='100%'
                maxW='100%'
                justify='space-between'
                align='center'
            >
                <LocalNav page={resume} setRoute={setSection} isLrgScreen={isLrgScreen} />
                {(section === resume.education) && <Education />}
                {(section === resume.experience) && <Experience />}
                {(section === resume.skills) && <Skills />}
            </VStack>

        </Container>
    )
}

export default Resume