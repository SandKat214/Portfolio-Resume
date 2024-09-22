/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Flex, Heading, HStack, Icon, Image, ListItem, Text, UnorderedList, VStack } from "@chakra-ui/react";
import { useOutletContext, useParams } from "react-router-dom";
import { useEffect } from "react";

// Icons
import { ImGithub } from "react-icons/im";
import { LinkIcon } from "@chakra-ui/icons";

// Components
import ExternalLink from "../../components/custom-links/ExternalLink";

const ProjectDetails = ({ projects }) => {

    const { projKey } = useParams();
    const { setHeading }= useOutletContext();

    useEffect(() => {
        setHeading(projKey);
    }, [projKey])

    return (
        <Flex 
            direction={['column', 'column', 'column', 'row']} 
            w='100%'
            maxW='100%'
            maxH='100%' 
            px={['0', '0', '15px']}
            justify={['center', 'center', 'space-evenly']} 
            flex={1}
            gap={['10px', '10px', '10px', '45px']}
            overflowY='auto'
        >
            <VStack w={['100%', '100%', '100%', '40%']} spacing={['24px']} py={['20px', '20px', '20px', '60px']} >
                <Heading as='h2' variant='pinkHalo' size='sm' textAlign='center' >{projects[projKey].title}</Heading>
                <Text fontSize='sm' fontWeight='200' textAlign='justify'>
                    {projects[projKey].desc}
                </Text>
                <HStack w='100%' align='flex-start' justify='space-around' spacing='25px'>
                    <UnorderedList fontSize='sm' fontWeight='100' fontStyle='italic' pt='5px'>
                        {projects[projKey].tech.map((tech, index) => {
                            return(
                                <ListItem key={index}>{tech}</ListItem>
                            )
                        })}
                    </UnorderedList>
                    <VStack>
                        <ExternalLink 
                            path={projects[projKey].gitHub} 
                            label={
                                <Icon 
                                    as={ImGithub} 
                                    variant='skillLink'
                                    borderRadius='full'
                                />
                            }
                        />
                        {projects[projKey].webLink &&
                            <ExternalLink 
                                path={projects[projKey].webLink} 
                                label={
                                    <Icon 
                                        as={LinkIcon} 
                                        variant='skillLink'
                                        borderRadius='4px'
                                    />
                                }
                            />
                        }

                    </VStack>
                </HStack>
            </VStack>
            <Box 
                w={['100%', '100%', '100%', '45%']} 
                maxH='100%' 
                py={['10px', '30px', '30px', '30px']} 
                px={['10px', '30px', '30px', '0']}
            >
                <Image 
                    src={projects[projKey].image} 
                    alt='Chess User Interface'
                    maxH='100%'
                    maxW='100%'
                    float='right'
                    borderRadius='10px'
                    boxShadow={['0 0 10px #D253FF', '0 0 30px #D253FF']}
                />
            </Box>
        </Flex>
    );
}

export default ProjectDetails;