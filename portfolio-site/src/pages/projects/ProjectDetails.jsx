/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Center, Container, Flex, Heading, HStack, Icon, Image, ListItem, Stack, Text, UnorderedList, VStack } from "@chakra-ui/react";
import { useOutletContext, useParams } from "react-router-dom";
import { useEffect } from "react";

// Icons
import { ImGithub } from "react-icons/im";
import { LinkIcon } from "@chakra-ui/icons";

// Components
import ExternalLink from "../../components/custom-links/ExternalLink";

const ProjectDetails = () => {

    const { projKey } = useParams();
    const { setHeading }= useOutletContext();

    useEffect(() => {
        setHeading(projKey);
    }, [projKey])

    return (
        <Flex 
            direction='row' 
            w='100%'
            maxW='100%'
            maxH='100%' 
            justify={['center', 'space-evenly']} 
            flex={1}
            gap={['30px', '45px']}
            overflowY='auto'
        >
            <VStack w={['100%', '40%']} spacing='24px'p='30px 0' >
                <Heading as='h2' variant='pinkHalo' size='sm' >Chess User Interface</Heading>
                <Text fontSize='sm' fontWeight='200' textAlign='justify'>
                    A traditional game of chess with all the fixings. Pop-up messaging system delivers immediate feedback on moves & game.
                </Text>
                <HStack w='100%' align='flex-start' justify='space-around' spacing='25px'>
                    <UnorderedList fontSize='sm' fontWeight='100' fontStyle='italic' pt='5px'>
                        <ListItem>Python</ListItem>
                        <ListItem>Pygame</ListItem>
                    </UnorderedList>
                    <VStack>
                        <ExternalLink 
                            path='https://github.com/SandKat214/Chess' 
                            label={
                                <Icon 
                                    as={ImGithub} 
                                    variant='skillLink'
                                    borderRadius='full'
                                />
                            }
                        />
                        <ExternalLink 
                            path='https://sandkat214.itch.io/chess' 
                            label={
                                <Icon 
                                    as={LinkIcon} 
                                    variant='skillLink'
                                    borderRadius='4px'
                                />
                            }
                        />

                    </VStack>
                </HStack>
            </VStack>
            <Box w='45%' maxH='100%'>
                <Image 
                    src='/images/chessGUI.png' 
                    alt='Chess User Interface'
                    maxH='100%'
                    maxW='100%'
                    minH='350px'
                    float='right'
                    pb='35px'
                />
            </Box>
        </Flex>
    );
}

export default ProjectDetails;