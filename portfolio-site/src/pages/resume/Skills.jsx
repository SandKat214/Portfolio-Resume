/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Flex, Heading, Icon, Tooltip, VStack } from "@chakra-ui/react";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";

// Components
import ExternalLink from "../../components/custom-links/ExternalLink";


const Skills = ({ items }) => {

    const { setHeading } = useOutletContext();

    const sectionItems = (section) => {
        return(
            items[section].map((item) => {
                return(
                    <Tooltip
                        key={item.name} 
                        label={item.name}
                        placement='top'
                        variant='skillTip'
                    >
                        <span>
                            <ExternalLink 
                                path={item.url} 
                                label={
                                    <Icon 
                                        as={item.icon} 
                                        variant='skillLink'
                                    />
                                }
                            />
                        </span>
                    </Tooltip>
                )
            })
        )
    }

    useEffect(() => {
        setHeading('skills');
    }, [])

    return (
        <VStack 
            spacing='25px' 
            w='100%'             
            px={['15px', '80px']}
            pt='10px'
            pb='30px' 
            overflowY='auto'
            maxW='650px'
            align='flex-start'
        >
            <VStack as='section' spacing='10px' align='flex-start'>
                <Heading as='h2' size='sm' variant='pinkHalo'>Languages:</Heading>
                <Flex as='nav' gap={['15px', '20px', '40px']} wrap='wrap'>
                    {sectionItems('languages')}
                </Flex>
            </VStack>
            <VStack as='section' spacing='10px' align='flex-start'>
                <Heading as='h2' size='sm' variant='pinkHalo'>Libraries / Frameworks:</Heading>
                <Flex as='nav' gap={['15px', '20px', '40px']} wrap='wrap'>
                    {sectionItems('libraries')}
                </Flex>
            </VStack>
            <VStack as='section' spacing='10px' align='flex-start'>
                <Heading as='h2' size='sm' variant='pinkHalo'>Tools / Platforms:</Heading>
                <Flex as='nav' gap={['15px', '20px', '40px']} wrap='wrap'>
                    {sectionItems('platforms')}
                </Flex>
            </VStack>
            <VStack as='section' spacing='10px' align='flex-start'>
                <Heading as='h2' size='sm' variant='pinkHalo'>Databases:</Heading>
                <Flex as='nav' gap={['15px', '20px', '40px']} wrap='wrap'>
                    {sectionItems('databases')}
                </Flex>
            </VStack>
        </VStack>    
    );
}

export default Skills;