import { extendTheme } from '@chakra-ui/react';
import '@fontsource-variable/jetbrains-mono';


const theme = extendTheme({

    colors: {
        primary: {
            100: '#00DBB4',
            900: '#015A4A',
        },
        secondary: {
            100: '#D253FF',
            900: '#6F0395',
        },
        background: '#232323',
        foreground: '#D7D7D7',
    },

    fonts: {
        heading: `'JetBrains Mono Variable', monospace`,
        body: `'JetBrains Mono Variable', monospace`,
    },

    styles: {
        global: {
            'html, body': {
                backgroundColor: 'background',
                color: 'foreground',
            },

        },
    },

    components: {
        Button: {
            variants: {
                'pinkLight': {
                    borderRadius: '40px',
                    h: 'fit-content',
                    fontWeight: 'bold',
                    bg: 'foreground',
                    color: 'background',
                    px: '25px',
                    py: '15px',
                    boxShadow: '0 0 6px #D253FF',
                    _hover: {
                        bg: 'secondary.100',
                        boxShadow: '0 0 10px 5px #D253FF',
                    },
                },
            },
        },

        Container: {
            variants: {
                'greenHalo': {
                    maxW: '100%',
                    borderRadius: '30px',
                    boxShadow: '0 0 40px #00DBB4',
                },
            },
        },

        Drawer: {
            parts: ['dialog'],
            variants: {
                primary: {
                    dialog: {
                        maxW: 'fit-content',
                        bg: 'background',
                    borderRight: '1px solid #00DBB4'
                    },
                },
            },
        },

        Heading: {
            variants: {
                'halo': {
                    color: 'foreground',
                    textTransform: 'uppercase',
                    fontStyle: 'italic',
                    fontWeight: 'bold',
                    textShadow: '0 0 10px #D253FF'
                },
                'gradient': {
                    fontWeight: 'bold',
                    textTransform: 'lowercase',
                    bgGradient: 'linear(to-r, #00DBB4, #D253FF)',
                    bgClip: 'text',
                },
            },
        },

        Icon: {
            variants: {
                'externalLink': {
                    color: 'secondary.100',
                    boxSize: '35px',
                    _hover: {
                        boxShadow: '0 0 20px #D253FF',
                    },
                    _active: {
                        transform: 'scale(0.96)',
                    },
                },
            },
        },

        Link: {
            variants: {
                'global': {
                    borderRadius: '40px',
                    fontWeight: 'bold',
                    color: 'primary.100',
                    textAlign: 'center',
                    px: '20px',
                    py: '10px',
                    textShadow: '1px 2px 1.5px #6F0395',
                    _hover: {
                        color: 'secondary.900',
                        bg: 'primary.100',
                        boxShadow: '0 0 10px 5px #00DBB4',
                        textDecoration: 'none',
                        textShadow: '0px 0px 5px #D253FF',
                    },
                    _activeLink: {
                        color: 'secondary.900',
                        bg: 'primary.100',
                        boxShadow: '0 0 10px 5px#00DBB4',
                        textDecoration: 'none',
                        textShadow: '0px 0px 5px #D253FF',
                    },
                },
            },
        },

        Menu: {
            parts: ['button', 'divider', 'groupTitle', 'item', 'list'],
            variants: {
                local: {
                    button: {
                        color: 'secondary.100',
                        fontSize: '1.2em',
                        px: '20px',
                        py: '10px',
                        borderRadius: '100px',
                        border: '1px solid #D253FF',
                        _hover: {
                            bg: 'secondary.100',
                            color: 'background',
                            boxShadow: '0 0 20px 3px #D253FF',
                        },
                        _active: {
                            bg: 'secondary.100',
                            color: 'background',
                            boxShadow: '0 0 20px 3px #D253FF',
                        },
                    },
                    divider: {
                        borderColor: 'secondary.100',
                    },
                    item: {
                        bg: 'background',
                        color: 'foreground',
                        justifyContent: 'center',
                        _hover: {
                            color: 'primary.100',
                            fontStyle: 'italic',
                            textShadow: '0 0 5px #00DBB4'
                        },
                        _focus: {
                            color: 'primary.100',
                            fontStyle: 'italic',
                            textShadow: '0 0 5px #00DBB4'
                        },
                        _active: {
                            color: 'primary.100',
                            fontStyle: 'italic',
                            textShadow: '0 0 5px #00DBB4'
                        },
                    },
                    list: {
                        p: '15px',
                        bg: 'background',
                        borderColor: 'secondary.100',
                        minW: 'none',
                        maxW: 'fit-content',

                    }
                    
                }
            }
        }
    },
})

export default theme