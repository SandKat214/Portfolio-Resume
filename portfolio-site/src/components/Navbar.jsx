/* eslint-disable react/prop-types */
import { Flex, HStack, Image, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";


const CustomLink = ({ path, label }) => {
    return (
        <Link as={NavLink} to={path} variant='global'>
            {label}
        </Link>
    )
}

const Navbar = () => {   
    return (
        <HStack w='100%' justify='space-between' align='flex-start' gap='20px'>
            <Flex as='nav' direction={['column', null, 'row']} gap="20px" justify='flex-start'>
                <CustomLink path="/" label="Home" />
                <CustomLink path="/resume" label="Resume" />
                <CustomLink path="/projects" label="Projects" />
                <CustomLink path="/contact" label="Contact" />
            </Flex>
            <Image boxSize="45px" src="/public/Favicon.svg" />
        </HStack>
    )
}

export default Navbar;