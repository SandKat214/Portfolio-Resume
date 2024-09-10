import { Button, Center, Heading, HStack, VStack } from "@chakra-ui/react";
import { Link as RRLink } from "react-router-dom";
import Socials from "../components/Socials";
import { useEffect, useState } from "react";

const Home = () => {
    const [largeScreen, setLargeScreen] = useState(false);

    const handleResize = () => {
        if (window.innerWidth < 768) {
            setLargeScreen(false);
        } else {
            setLargeScreen(true)
        };
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <Center maxW='fit-content' flex='1'>
            <VStack spacing='30px' textAlign='center'>
                <Heading as='h1' variant='halo' textTransform='capitalize'>
                    Katherine Sandeen
                </Heading>
                <Heading variant='gradient' size='xl'>
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
                    {largeScreen && <Socials gap='35px'/>}
                </HStack>
            </VStack>
        </Center>
    );
}

export default Home;