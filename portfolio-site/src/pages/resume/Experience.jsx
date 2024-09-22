/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { 
    Divider,  
    Heading, 
    ListItem, 
    Text, 
    UnorderedList, 
    VStack 
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const Experience = ({ items }) => {

    const { setHeading } = useOutletContext();

    const stackItems = items.map((item, index) => {
        return(
            <VStack key={index} align='center' gap='20px'>
                <VStack gap='15px' textAlign='center'>
                    <Heading as='h2' size='sm' variant='pinkHalo'>
                        {item.title}
                    </Heading>
                    <Heading as='h3' size='sm'>
                        {item.company}
                    </Heading>
                </VStack>
                <VStack  
                    fontSize='13px' 
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
        )
    })

    useEffect(() => {
        setHeading('experience');
    }, [])

    return (
        <VStack 
            px={['15px', '60px']}
            py='20px' 
            w='100%'   
            spacing='40px' 
            overflowY='auto'
            maxW='650px'
            divider={<Divider borderColor='secondary.100' />}
        >
            {stackItems}
        </VStack>
    );
}

export default Experience;