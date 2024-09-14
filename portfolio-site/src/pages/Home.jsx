import { Button, Center, Heading, HStack, VStack } from "@chakra-ui/react";
import { Link as RRLink, useOutletContext } from "react-router-dom";

// Components
import Socials from "../components/Socials";

const Home = () => {

    const isLrgScreen = useOutletContext();
    
    return (
        <Center maxW='fit-content' flex='1'>
            <VStack spacing='30px' textAlign='center'>
                <Heading as='h1' variant='halo' textTransform='capitalize'>
                    Katherine Sandeen
                </Heading>
                <Heading variant='gradient' textTransform='uppercase' size='xl'>
                    &#123; student, programmer, developer &#125;
                </Heading>
                <Heading as='h3' fontWeight='100' size='md' textAlign='left'>
                    An ambitious student of computer science:<br/>
                    eager to create and explore new horizons...
                </Heading>
                <HStack gap='60px' mt={['0', null, '30px']} justify='center'>
                    <Button as={RRLink} to='/contact' variant='pinkLight'>
                        Contact Me!
                    </Button>
                    {isLrgScreen && <Socials gap='35px'/>}
                </HStack>
            </VStack>
        </Center>
    );
}

export default Home;