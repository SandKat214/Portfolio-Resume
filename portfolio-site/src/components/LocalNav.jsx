/* eslint-disable react/prop-types */
import { Flex, Heading, Icon, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useRef, useState } from "react";
import { GrDocumentPdf } from "react-icons/gr";

const LocalNav = ({ page, setRoute, isLrgScreen }) => {
    const [heading, setHeading] = useState(Object.keys(page)[1])
    const focusRef = useRef(page[Object.keys(page)[1]])

    const menuItems = Object.keys(page).map((route, index) => {
        if (index > 0) {
            return(
                <MenuItem
                    key={index}
                    textTransform='capitalize'
                    onClick={() => {
                        setHeading(route);
                        setRoute(page[route]);
                        focusRef.current = page[route];
                        console.log(focusRef)
                    }}
                    ref={page[route]}
                >
                    {route}  
                </MenuItem>
            )
        }
    })

    return (
        <Flex w='100%' direction={['column-reverse', 'row']} justify='space-between' align='center' gap='20px'>
            <Heading
                as='h1' 
                variant='gradient'  
                fontSize='1.8em'
            >
                &#123; {heading} &#125;
            </Heading>
            <Menu variant='local' initialFocusRef={focusRef.current} >
                <MenuButton>
                    <ChevronDownIcon />{isLrgScreen && page.name}
                </MenuButton>
                <MenuList>
                    {menuItems}
                    <MenuDivider />
                    <MenuItem 
                        as='a' 
                        href='/public/files/resume.pdf' 
                        download='KSandeen-resume'
                        gap='10px'
                    >
                        <Icon as={GrDocumentPdf} />
                        <Text>Download</Text>
                    </MenuItem>
                </MenuList>
            </Menu>
            
        </Flex>
    )
}

export default LocalNav