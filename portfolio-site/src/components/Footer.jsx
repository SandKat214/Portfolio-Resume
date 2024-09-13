import { HStack } from '@chakra-ui/react';
import Socials from './Socials';


const Footer = () => {
    return (
        <HStack as='footer' w='100%' justify={['center', 'flex-end']} align='center'>
            <Socials gap='40px' />
        </HStack>
    )
}

export default Footer