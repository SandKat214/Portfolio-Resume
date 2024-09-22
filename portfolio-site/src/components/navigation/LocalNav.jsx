/* eslint-disable react/prop-types */
import { 
    Flex, 
    Heading, 
    Icon, 
    Link, 
    Menu, 
    MenuButton, 
    MenuDivider, 
    MenuItem, 
    MenuList, 
    Text,
    VStack 
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

// Icons
import { ChevronDownIcon } from "@chakra-ui/icons";
import { GrDocumentPdf } from "react-icons/gr";

const LocalNav = ({ heading, isIndex, isLrgScreen, page }) => {

    // Returns menu items from the keys in the resume object
    const menuItems = Object.keys(page).map((route, index) => {
        if (index > 1) {
            return(
                <MenuItem
                    key={route}
                    as={NavLink}
                    to={`/${page.name}/${route}`}
                >
                    {route}
                </MenuItem>
            )
        }
    })

    return (
        <Flex 
            w='100%' 
            direction={['column-reverse', 'row']} 
            justify='space-between' 
            align={['center', 'flex-start']} 
            gap='20px'
        >
            <Heading
                as='h1' 
                variant='gradient'  
                fontSize='1.8em'
            >
                &#123; {heading} &#125;
            </Heading>

            {/** Only shows the menu on non-index pages */}
            {isIndex ?
                (<VStack as='blockquote' textAlign='center' fontSize='14px' w='70%'>
                    <Text fontWeight='100' fontStyle='italic'>
                        &quot;{page.quote.text}&quot;
                    </Text>
                    <Text>
                        &mdash; {page.quote.author}, {" "}
                        <Text as='cite'>
                            {page.quote.cite}
                        </Text>
                    </Text>
                </VStack>) :
                (<Menu variant='local' autoSelect={false} >
                    <MenuButton textTransform='capitalize' >
                        <ChevronDownIcon />{isLrgScreen && page.name}
                    </MenuButton>
                    <MenuList>
                        {menuItems}
                        {page.name === 'resume' &&
                            <>
                                <MenuDivider />
                                <MenuItem 
                                    as={Link}
                                    href='/files/resume.pdf' 
                                    download='KSandeen-resume'
                                >
                                    {/** Only shows the pdf download on resume pages */}
                                    <Text>
                                        <Icon as={GrDocumentPdf} />
                                        {' '}Download
                                    </Text>
                                </MenuItem>
                            </>
                        }
                    </MenuList>
                </Menu>)
            }            
        </Flex>
    )
}

export default LocalNav