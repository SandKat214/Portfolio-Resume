/* eslint-disable react/prop-types */
import { 
    Drawer, 
    DrawerContent, 
    DrawerOverlay, 
    Flex, 
    HStack, 
    IconButton, 
    Image, 
    Link, 
    useDisclosure, 
    VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { SlMenu } from "react-icons/sl";


const CustomLink = ({ path, label }) => {
    return (
        <Link as={NavLink} to={path} variant='global'>
            {label}
        </Link>
    )
}

const Navbar = ({ isLrgScreen }) => { 
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    return (
        <HStack w='100%' justify='space-between' align='flex-start' gap='20px'>
            {isLrgScreen ?
                <Flex as='nav' gap="20px" justify='flex-start'>
                    <CustomLink path="/" label="Home" />
                    <CustomLink path="/resume" label="Resume" />
                    <CustomLink path="/projects" label="Projects" />
                    <CustomLink path="/contact" label="Contact" />
                </Flex> :
                <>
                    <IconButton 
                        aria-label="nav menu" 
                        icon={<SlMenu />} 
                        onClick={onOpen}
                        bg='background'
                        color='primary.100'
                        border='1px solid #00DBB4' 
                        _hover={{
                            color: 'secondary.900',
                            bg: 'primary.100',
                            boxShadow: '0 0 10px 5px #00DBB4',
                            textShadow: '0px 0px 5px #D253FF',
                        }}
                    />
                    <Drawer
                        isOpen={isOpen}
                        placement="left"
                        onClose={onClose}
                        variant='primary'
                    >
                        <DrawerOverlay />
                        <DrawerContent px='50px' py='90px' onClick={onClose} >
                            <VStack as='nav' spacing='40px' align='center'>
                                <CustomLink path="/" label="Home" />
                                <CustomLink path="/resume" label="Resume" />
                                <CustomLink path="/projects" label="Projects" />
                                <CustomLink path="/contact" label="Contact" />
                            </VStack>
                        </DrawerContent>
                    </Drawer>
                </>
            }   
            <Image boxSize="45px" src="/public/Favicon.svg" />
        </HStack>        
    )
}

export default Navbar;
