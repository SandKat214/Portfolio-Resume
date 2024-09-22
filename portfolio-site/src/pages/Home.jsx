import { 
    Button, 
    Center, 
    Heading, 
    HStack,
    Icon, 
    VStack 
} from "@chakra-ui/react";
import { Link as RRLink, useOutletContext } from "react-router-dom";

// Icons
import { ImGithub, ImLinkedin } from "react-icons/im";

// Components
import ExternalLink from '../components/custom-links/ExternalLink';

const Home = () => {

    const isLrgScreen = useOutletContext();
    
    return (
        <Center as='section' maxW='fit-content' flex='1'>
            <VStack as='hgroup' spacing='30px' textAlign='center'>
                <Heading as='h1' variant='pinkHalo' textTransform='capitalize' size='3xl'>
                    Katherine Sandeen
                </Heading>
                <Heading variant='gradient' textTransform='uppercase' size='2xl'>
                    &#123; student, programmer, developer &#125;
                </Heading>
                <Heading as='h3' fontWeight='100' size='md'>
                    An ambitious student of computer science and part-time science fiction nerd:<br/>
                    eager to boldly go and explore new horizons...
                </Heading>
                <HStack as='nav' gap='60px' mt={['0', null, '30px']} justify='center'>
                    <Button as={RRLink} to='/contact' variant='pinkLight'>
                        Contact Me!
                    </Button>
                    {isLrgScreen && 
                        <HStack spacing='35px'>
                            <ExternalLink
                                path='https://github.com/SandKat214' 
                                label={
                                    <Icon 
                                        as={ImGithub} 
                                        variant='externalLink'
                                        borderRadius='full'
                                    />
                                }
                            />
                            <ExternalLink
                                path='https://www.linkedin.com/in/sandeenk/'
                                label={
                                    <Icon
                                        as={ImLinkedin}
                                        variant='externalLink'
                                        borderRadius='4px'
                                    />
                                }
                            />
                        </HStack>
                    }
                </HStack>
            </VStack>
        </Center>
    );
}

export default Home;