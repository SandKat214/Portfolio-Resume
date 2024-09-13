import { Container, VStack } from "@chakra-ui/react"
import LocalNav from "../components/LocalNav"

const ResumeLayout = () => {
    return (
        <Container 
            as='main' 
            variant='greenHalo' 
            w={["100%", null, "90%"]} 
            flex={[1]}
            p='40px 60px'
        >
            <VStack
                w='100%'
                maxW='100%'
                justify='space-between'
                align='center'
            >
                <LocalNav />
                
            </VStack>

        </Container>
    )
}

export default ResumeLayout