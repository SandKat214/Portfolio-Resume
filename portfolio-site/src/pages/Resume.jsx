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
            minHeight='60vh'
            maxHeight={['unset', 'unset', '60vh']}
            px='60px'
            overflow='hidden'
        >
            <VStack
                minHeight='60vh'
                maxHeight={['unset', 'unset', '60vh']}
                py='30px'
                maxW='100%'
                gap='30px'
            >
                <LocalNav page={resume} setRoute={setSection} isLrgScreen={isLrgScreen} />
                {(section === resume.education) && <Education items={resume.education} />}
                {(section === resume.experience) && <Experience />}
                {(section === resume.skills) && <Skills />}
            </VStack>
        </Container>
    )
}

export default Resume