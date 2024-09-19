/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { 
    Button,
    Card, 
    CardBody, 
    CardFooter, 
    CardHeader,
    Flex,
    Heading,
    Icon,
    Image, 
    List, 
    ListItem, 
    Popover, 
    PopoverBody, 
    PopoverContent, 
    PopoverTrigger, 
    SimpleGrid, 
    Text, 
    VStack 
} from "@chakra-ui/react"
import { Link, useOutletContext } from "react-router-dom";
import { useEffect } from "react";

// Icons
import { ViewIcon } from "@chakra-ui/icons";
import { GrTechnology } from "react-icons/gr";

const Projects = ({ projects }) => {
    const { isLrgScreen, setHeading, setIsIndex } = useOutletContext();

    const gridItems = Object.keys(projects).map((route, index) => {
        if (index > 0) {
            return(
                <Card key={route} variant='project'>
                    <CardHeader>
                        <Image 
                            src={projects[route].image}
                            alt={`${projects[route].title} image`}
                            h='50px'
                            w='100%'
                            objectFit='cover'
                            objectPosition='top'
                            borderTopRadius='md'

                        />
                    </CardHeader>
                    <CardBody>
                        <Heading variant='pinkHalo' textTransform='capitalize' size='xs'>
                            {projects[route].title}
                        </Heading>
                    </CardBody>
                    <CardFooter>
                        <Flex w='100%' gap='20px' align='center' justify='space-between'>
                            <Popover
                                trigger='hover'
                                placement='top'
                                variant='project'
                            >
                                <PopoverTrigger color='primary.100' >
                                    <span>
                                        <Icon 
                                            as={GrTechnology} color='primary.100'
                                            _hover={{
                                                color: 'secondary.100'
                                            }}
                                            boxSize={5}
                                        />
                                    </span>
                                </PopoverTrigger>
                                <PopoverContent border='1px solid #00DBB4'>
                                    <PopoverBody>
                                        <List>
                                            {projects[route].tech.map((tech, index) => {
                                                return(
                                                    <ListItem key={index}>{tech}</ListItem>
                                                )
                                            })}
                                        </List>
                                    </PopoverBody>
                                </PopoverContent>
                            </Popover>
                            <Button as={Link} to={`/projects/${route}`} variant='pinkLight' p="5px 15px">
                                <Text fontSize='xs' align='center'>
                                    <ViewIcon boxSize={4} />
                                    <Text as='span'> View</Text>
                                </Text>
                            </Button>
                        </Flex>
                    </CardFooter>
                </Card>
            )
        }
    })

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
            overflow='hidden'
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
            <SimpleGrid minChildWidth='200px' spacing='30px' w='100%' overflowY='auto' p='15px 25px'>
                {gridItems}
            </SimpleGrid>
        </VStack>
    )  
}

export default Projects