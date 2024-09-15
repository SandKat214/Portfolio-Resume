/* eslint-disable react/prop-types */
import { 
    Divider, 
    Flex, 
    Heading, 
    ListItem, 
    Text, 
    UnorderedList, 
    VStack 
} from "@chakra-ui/react";

const Education = ({ items }) => {

    const stackItems = items.map((item, index) => {
        return(
            <VStack key={index}>
                <VStack align='center' gap='15px' pb='30px'>
                    <VStack gap='10px' textAlign='center'>
                        <Heading as='h2' color='foreground' size='md'>
                            {item.school}
                        </Heading>
                        <Heading as='h3' size='md' variant='halo'>
                            {item.degree}
                        </Heading>
                    </VStack>
                    <Flex direction={['column', 'row']} fontSize='14px' fontStyle='italic' fontWeight='100' gap={['15px', '40px']} align='flex-start'>
                        <VStack justify={['center']} align={['center', 'flex-end']} textAlign={['center', 'right']}>
                            <Text>
                                <Text as='span' fontStyle='normal' fontWeight='bold'>Date:</Text>    
                                {" " + item.grad}
                            </Text>
                            <Text>
                                <Text as='span' fontStyle='normal' fontWeight='bold'>GPA:</Text>
                                {" " + item.gpa}
                            </Text>
                        </VStack>
                        <VStack lineHeight='1.4em' align={['center', 'flex-start']} textAlign='left'>
                            <Text as='h4' fontStyle='normal' fontWeight='bold'>Relevant Coursework:</Text>
                            <UnorderedList>
                                {item.coursework.map((course, index) => {
                                    return(
                                        <ListItem key={index}>{course}</ListItem>
                                    )
                                })}
                            </UnorderedList>
                        </VStack>
                    </Flex> 
                </VStack>
                <Divider borderColor='secondary.100' />
            </VStack>
        )
    })

    return (
        <VStack 
            minChildWidth='fit-content'
            px='60px' 
            spacing='40px' 
            overflowY='auto'
            scrollBarColor='secondary.100'
        >
            {stackItems}
        </VStack>
    );
}

export default Education;