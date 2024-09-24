import { extendTheme, textDecoration } from "@chakra-ui/react"
import "@fontsource-variable/jetbrains-mono"

const theme = extendTheme({
	colors: {
		primary: {
			100: "#00DBB4",
			900: "#015A4A",
		},
		secondary: {
			100: "#D253FF",
			900: "#6F0395",
		},
		background: "#232323",
		foreground: "#D7D7D7",
	},

	fonts: {
		heading: `'JetBrains Mono Variable', monospace`,
		body: `'JetBrains Mono Variable', monospace`,
	},

	styles: {
		global: {
			"html, body": {
				backgroundColor: "background",
				color: "foreground",
			},
			"::-webkit-scrollbar": {
				height: "3px",
				width: "3px",
			},
			"::-webkit-scrollbar-track": {
				background: "primary.100",
			},
			"::-webkit-scrollbar-thumb": {
				bgColor: "secondary.900",
			},
		},
	},

	components: {
		Button: {
			variants: {
				pinkLight: {
					borderRadius: "40px",
					h: "fit-content",
					fontWeight: "900",
					bg: "foreground",
					color: "secondary.900",
					px: "25px",
					py: "15px",
					boxShadow: "0 0 6px #D253FF",
					_hover: {
						color: "background",
						bg: "secondary.100",
						boxShadow: "0 0 10px 5px #D253FF",
					},
				},
			},
		},

		Card: {
			variants: {
				project: {
					container: {
						p: "0",
						bg: "background",
						color: "foreground",
						boxShadow: "0 0 10px #D253FF",
						// maxW: '200px',
					},
					header: {
						p: "0",
					},
					body: {
						p: "10px",
						borderTop: "1px solid #00DBB4",
					},
					footer: {
						p: "5px 20px 20px",
					},
				},
			},
		},

		Container: {
			variants: {
				greenHalo: {
					maxW: "100%",
					borderRadius: "30px",
					boxShadow: "0 0 40px #00DBB4",
				},
			},
		},

		Drawer: {
			variants: {
				primary: {
					dialog: {
						maxW: "fit-content",
						bg: "background",
						borderRight: "1px solid #00DBB4",
					},
				},
			},
		},

		FormLabel: {
			variants: {
				contact: {
					fontSize: "sm",
					fontWeight: "100",
					fontStyle: "italic",
				},
			},
		},

		Heading: {
			variants: {
				pinkHalo: {
					color: "foreground",
					textTransform: "uppercase",
					fontStyle: "italic",
					fontWeight: "bold",
					textShadow: "0 0 10px #D253FF",
				},
				gradient: {
					fontWeight: "bold",
					// textTransform: 'lowercase',
					bgGradient: "linear(to-r, #00DBB4, #D253FF)",
					bgClip: "text",
				},
			},
		},

		Icon: {
			variants: {
				externalLink: {
					color: "secondary.100",
					boxSize: "35px",
					_hover: {
						boxShadow: "0 0 20px #D253FF",
					},
					_active: {
						transform: "scale(0.96)",
					},
				},
				skillLink: {
					color: "secondary.100",
					p: "4px",
					borderRadius: "4px",
					boxSize: "40px",
					_hover: {
						color: "background",
						bg: "primary.100",
						boxShadow: "0 0 20px #00DBB4",
					},
					_active: {
						transform: "scale(0.96)",
					},
				},
			},
		},

		Input: {
			variants: {
				contact: {
					field: {
						bg: "background",
						border: "1px solid #6F0395",
						borderRadius: "20px",
						_hover: {
							border: "1px solid #6F0395",
						},
						_focus: {
							border: "3px solid #00DBB4",
						},
					},
					element: {},
				},
			},
		},

		Link: {
			variants: {
				global: {
					borderRadius: "40px",
					fontWeight: "bold",
					color: "primary.100",
					textAlign: "center",
					px: "20px",
					py: "10px",
					textShadow: "1px 2px 1.5px #6F0395",
					_hover: {
						color: "secondary.900",
						bg: "primary.100",
						boxShadow: "0 0 10px 5px #00DBB4",
						textDecoration: "none",
						textShadow: "0px 0px 5px #D253FF",
					},
					_activeLink: {
						color: "secondary.900",
						bg: "primary.100",
						boxShadow: "0 0 10px 5px#00DBB4",
						textDecoration: "none",
						textShadow: "0px 0px 5px #D253FF",
					},
				},
				contact: {
					color: "secondary.100",
					fontWeight: "200",
					_hover: {
						textDecoration: "none",
						color: "primary.100",
						fontStyle: "italic",
					},
				},
			},
		},

		Menu: {
			variants: {
				local: {
					button: {
						color: "secondary.100",
						px: "20px",
						py: "10px",
						borderRadius: "100px",
						border: "1px solid #D253FF",
						_hover: {
							bg: "secondary.100",
							color: "background",
							boxShadow: "0 0 20px 3px #D253FF",
						},
						_active: {
							bg: "secondary.100",
							color: "background",
							boxShadow: "0 0 20px 3px #D253FF",
						},
					},
					divider: {
						borderColor: "secondary.100",
					},
					item: {
						bg: "background",
						color: "foreground",
						// justifyContent: 'center',
						textTransform: "capitalize",
						_hover: {
							color: "primary.100",
							fontStyle: "italic",
							textShadow: "0 0 5px #00DBB4",
							textDecoration: "none",
						},
						_focus: {
							color: "primary.100",
							fontStyle: "italic",
							textShadow: "0 0 5px #00DBB4",
						},
						_activeLink: {
							color: "primary.100",
							fontStyle: "italic",
							textShadow: "0 0 5px #00DBB4",
						},
					},
					list: {
						p: "10px",
						bg: "background",
						borderColor: "secondary.100",
						minW: "none",
						maxW: "fit-content",
						maxH: "250px",
						overflowY: "auto",
					},
				},
			},
		},

		Popover: {
			variants: {
				project: {
					popper: {
						minWidth: "unset !important",
						width: "0",
					},
					content: {
						fontSize: "sm",
						maxW: "fit-content",
						bg: "background",
						color: "primary.100",
					},
				},
			},
		},

		Textarea: {
			variants: {
				contact: {
					bg: "background",
					border: "1px solid #6F0395",
					borderRadius: "20px",
					_hover: {
						border: "1px solid #6F0395",
					},
					_focus: {
						border: "3px solid #00DBB4",
					},
				},
			},
		},

		Tooltip: {
			variants: {
				skillTip: {
					bg: "background",
					color: "primary.100",
					fontSize: "xs",
					border: "1px solid #00DBB4",
				},
			},
		},
	},
})

export default theme
