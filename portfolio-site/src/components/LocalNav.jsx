import { Heading, HStack, Text } from "@chakra-ui/react"

const LocalNav = () => {
    return (
        <HStack w='100%' justify='space-between' gap='20px'>
            <Heading 
                variant='gradient' 
                textTransform='lowercase' 
                fontSize='1.8em'
            >
                &#123; Education &#125;
            </Heading>
            <Text>Menu</Text>
        </HStack>
    )
}

export default LocalNav