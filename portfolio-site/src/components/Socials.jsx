/* eslint-disable react/prop-types */
import { HStack, Icon, Link } from '@chakra-ui/react';
import { Link as RRLink } from 'react-router-dom';
import { ImGithub, ImLinkedin } from "react-icons/im";

const CustomLink = ({ path, label }) => {
    return (
        <Link as={RRLink} to={path} isExternal>
            {label}
        </Link>
    )
}

const Socials = ({ gap }) => {
    return (
        <HStack spacing={gap}>
            <CustomLink
                path='https://github.com/SandKat214' 
                label={
                    <Icon 
                        as={ImGithub} 
                        variant='externalLink'
                        borderRadius='full'
                    />
                }
            />
            <CustomLink
                path='https://www.linkedin.com/in/sandeenk/'
                label={
                    <Icon
                        as={ImLinkedin}
                        variant='externalLink'
                        borderRadius='4px'
                    />
                }
            />
        </HStack>
    )
}

export default Socials;