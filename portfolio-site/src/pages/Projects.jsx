/* eslint-disable react-hooks/exhaustive-deps */
import { Text, VStack } from "@chakra-ui/react"
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";

const Projects = () => {
    const { isLrgScreen, setHeading, setIsIndex } = useOutletContext();

    useEffect(() => {
        setHeading('PROJECTS');
        setIsIndex(true);

        return () => {
            setIsIndex(false);
        };
    }, [])

    return(
        <VStack 
            flex={['unset', 1]} 
            align='center' 
            w='100%'
            justify='space-between'
            spacing='30px'
            pb='20px'
        >
            <VStack as='blockquote' textAlign='center' fontSize='14px'>
                <Text fontWeight='100' fontStyle='italic'>
                    &quot;A process cannot be understood by stopping it. Understanding must move with the flow of the process, must join it and flow with it.&quot;
                </Text>
                <Text>
                    &mdash; Frank Herbert, {" "}
                    <Text as='cite'>
                        Dune
                    </Text>
                </Text>
            </VStack>
        </VStack>
    )  
}

export default Projects