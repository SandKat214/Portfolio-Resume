/* eslint-disable react/prop-types */
import { Container, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { Outlet, useOutletContext } from "react-router-dom"

// Components
import LocalNav from "../components/navigation/LocalNav"


const ResumeLayout = ({ resume }) => {
    const isLrgScreen = useOutletContext();
    const [heading, setHeading] = useState('RESUME')
    const [isIndex, setIsIndex] = useState(false)

    return (
        <Container 
            as='main' 
            variant='greenHalo' 
            w={["100%", null, "90%"]} 
            minHeight='67vh'
            maxHeight={['unset', 'unset', '67vh']}
            px={['25px', '25px', '60px']}
            overflow='hidden'
        >
            <VStack
                minHeight='67vh'
                maxHeight={['unset', 'unset', '67vh']}
                py='30px'
                maxW='100%'
                gap='20px'
            >
                <LocalNav heading={heading} isIndex={isIndex} isLrgScreen={isLrgScreen} page={resume} />
                <Outlet context={{isLrgScreen, setHeading, setIsIndex}} />
            </VStack>
        </Container>
    )
}

export default ResumeLayout