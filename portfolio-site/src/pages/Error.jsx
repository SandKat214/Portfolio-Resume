import { Button, Center, Flex, Heading, Icon, Text, VStack } from "@chakra-ui/react";
import { Link, useRouteError } from "react-router-dom";

// Icons
import { ImHome } from "react-icons/im";

const Error = () => {

    const error = useRouteError();
    console.log(error);

    return (
        <Center w="100vw" minH="100vh">
            <VStack w='90%' maxW='800px' spacing='50px'>
                <VStack as='hgroup' spacing='40px'>
                    <Heading as='h1' variant='gradient' textTransform='uppercase' size='2xl'>
                        &#123; error &#125;
                    </Heading>
                    <VStack as='blockquote' textAlign='center' fontSize='14px' w='100%'>
                        <Text fontWeight='100' fontStyle='italic'>
                            &quot;{"I know it may be impossible to believe now, when everything is dark and broken, but you will survive this pain, little one. Pain is a memory. You will live and you will struggle and you will find joy."}&quot;
                        </Text>
                        <Text>
                            &mdash; Pierce Brown, {" "}
                            <Text as='cite'>
                                Iron Gold
                            </Text>
                        </Text>
                    </VStack>
                </VStack>
                <VStack spacing='50px'>
                    <Heading as='h2' variant='pinkHalo' textTransform='none' fontSize='2xl' textAlign='center'>
                        Error:{' '}
                        <Text as='i' fontWeight='200'>{error.statusText || error.message}</Text>
                    </Heading>
                    <Button as={Link} to='/' variant='pinkLight'>
                        <Flex align='flex-end' gap='8px'>
                            <Icon as={ImHome} boxSize={6} />
                            <Text as='span'>Homepage</Text>
                        </Flex>
                        
                    </Button>
                </VStack>
            </VStack>
        </Center>
    )
}

export default Error;