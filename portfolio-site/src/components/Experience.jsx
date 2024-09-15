/* eslint-disable react/prop-types */
import { 
    Divider,  
    Heading, 
    ListItem, 
    Text, 
    UnorderedList, 
    VStack 
} from "@chakra-ui/react";

const Experience = ({ items }) => {

    const stackItems = items.map((item, index) => {
        return(
            <VStack key={index} >
                <VStack align='center' gap='20px' pb='30px'>
                    <VStack gap='15px' textAlign='center'>
                        <Heading as='h2' size='md' variant='halo'>
                            {item.title}
                        </Heading>
                        <Heading as='h3' size='md'>
                            {item.company}
                        </Heading>
                    </VStack>
                    <VStack  
                        fontSize='14px' 
                        fontStyle='italic' 
                        fontWeight='100' 
                        gap='20px'
                        lineHeight='1.5em'
                    >
                        <Text as='span' fontStyle='normal' fontWeight='bold'>
                            {item.start + " - " + item.end}
                        </Text>
                        <UnorderedList>
                            {item.bullets.map((bullet, index) => {
                                return(
                                    <ListItem key={index}>{bullet}</ListItem>
                                )
                            })}
                        </UnorderedList>
                    </VStack>
                </VStack>
                <Divider borderColor='secondary.100' />
            </VStack>
        )
    })

    return (
        <VStack 
            px={['15px', '60px']} 
            spacing='40px' 
            overflowY='auto'
            maxW='650px'
        >
            {stackItems}
        </VStack>
    );
}

export default Experience;