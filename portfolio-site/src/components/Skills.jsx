/* eslint-disable react/prop-types */
import { Flex, Heading, Icon, Link, VStack } from "@chakra-ui/react";
import { Link as RRLink } from "react-router-dom";

const CustomLink = ({ path, label }) => {
    return (
        <Link as={RRLink} to={path} isExternal>
            {label}
        </Link>
    )
}

const Skills = ({ items }) => {
    const sectionItems = (section) => {
        return(
            items[section].map((item) => {
                return(
                    <CustomLink
                        key={item.name}
                        path={item.url} 
                        label={
                            <Icon 
                                as={item.icon} 
                                variant='skillLink'
                            />
                        }
                    />
                )
            })
        )
    }


    return (
        <VStack 
            spacing='15px' 
            w='fit-content'             
            px={['15px', '60px']} 
            overflowY='auto'
            maxW='650px'
            align='flex-start'
        >
            <VStack spacing='15px' align='flex-start'>
                <Heading as='h2' size='sm' variant='halo'>Languages:</Heading>
                <Flex gap={['15px', '20px', '40px']} wrap='wrap'>
                    {sectionItems('languages')}
                </Flex>
            </VStack>
            <VStack spacing='15px' align='flex-start'>
                <Heading as='h2' size='sm' variant='halo'>Libraries / Frameworks:</Heading>
                <Flex gap={['15px', '20px', '40px']} wrap='wrap'>
                    {sectionItems('libraries')}
                </Flex>
            </VStack>
            <VStack spacing='15px' align='flex-start'>
                <Heading as='h2' size='sm' variant='halo'>Tools / Platforms:</Heading>
                <Flex gap={['15px', '20px', '40px']} wrap='wrap'>
                    {sectionItems('platforms')}
                </Flex>
            </VStack>
            <VStack spacing='15px' align='flex-start'>
                <Heading as='h2' size='sm' variant='halo'>Databases:</Heading>
                <Flex gap={['15px', '20px', '40px']} wrap='wrap'>
                    {sectionItems('databases')}
                </Flex>
            </VStack>
        </VStack>    
    );
}

export default Skills;