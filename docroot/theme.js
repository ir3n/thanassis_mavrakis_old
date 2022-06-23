import { extendTheme } from '@chakra-ui/react';

const styles = {
    global: {
        'html, body': {
            fontFamily: 'Inter',
            fontSize: '14px'
        }
    },

    fonts: {
        heading: 'Inter, sans-serif',
        body: 'Inter, sans-serif'
    }
};

const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1024px',
    xxl: '1350px',
    xxxl: '1536px'
};

const colors = {
    brand: '#000000',
    white: '#FFFFFF',
    darkGrey: '#181818',
    grey: '#555555',
    mediumGrey: 'A2A2A2',
    lightGrey: '#C6C6C6',
    blue: '#3093EE',
    green: '#1CA25A',
    red: '#ED1C24',
    primary: '#000000',
    secondary: '#FFFFFF',
    border: '#878787',
    borderForm: '#1E1E1E',
    borderMobile: '#C4C4C4',
    newsletter: '#F1F1F1',

    buttons: {
        primary: '#000000',
        primaryHover: '#ED1C24',
        secondary: '#FFFFFF',
        secondaryHover: '#000000',
        disabled: '#878787'
    },
    footer: {
        black: 'brand',
        red: '#ED1C24',
        white: 'secondary',
        border: '#373737'
    }
};

const textStyles = {
    h1: {
        fontSize: ['40px', '48px'],
        fontWeight: '700',
        lineHeight: ['48px', '56px'],
        
    },
    h2: {
        fontSize: ['30px', '38px'],
        fontWeight: '800',
        lineHeight: ['32px', '40px'],
        textTransform: "uppercase"
    },
    h3: {
        fontSize: ['26px', '34px'],
        fontWeight: '700',
        lineHeight: ['28px', '36px']
    },
    h4: {
        fontSize: ['26px', '34px'],
        fontWeight: '800',
        lineHeight: ['31px', '39px']
    },
    lg: {
        fontSize: '16px',
        fontWeight: '300',
        lineHeight: '19px'
    },
    md: {
        fontSize: '15px',
        fontWeight: '600',
        lineHeight: '18px'
    },
    sm: {
        fontSize: '14px',
        fontWeight: '300',
        lineHeight: '16px'
    },
    caption: {
        fontSize: '12px',
        fontWeight: '400',
        lineHeight: '16px'
    },
    captionSm: {
        fontSize: '10px',
        fontWeight: '400',
        lineHeight: '12px'
    }
};

const components = {
    Button: {
        baseStyle: {
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '12px',
            lineHeight: '15px',
            letterSpacing: '0.115em',
            width: '240px',
            height: '40px',
            padding: '16px',
            borderRadius: '2px',
            textTransform: "uppercase",
        },
        variants: {
            primary: {
                bg: 'brand',
                border: 'none',
                color: 'white',
                _hover: {
                    bg: '#ED1C24',
                    color: 'white'
                },
                _disabled: {
                    bg: 'secondaryHover',
                    color: 'disabled',
                    border: '0'
                }
            },
            outline: {
                border: '1px solid #000000 !important',
                color: 'brand',
                _hover: {
                    bg: 'brand',
                    color: 'white',
                    borderRadius: '2px'
                },
                _disabled: {
                    bg: 'secondaryHover',
                    color: 'disabled',
                    border: '0'
                }
            },
            secondary: {
                color: 'secondary',
                border: '1px solid white',
                _hover: {
                    bg: 'white',
                    color: 'brand',
                    border: '1px solid white',
                }
            },
            green: {
                bg: 'green',
                color: 'secondary',
                _hover: {
                    bg: '#ED1C24',
                    color: 'secondary',
                }
            },
            mobileDrawer: {
                bg: 'white',
                color: 'brand',
                border: '0.5px solid #FF8234'
            }
        },
        sizes: {
            xl: {
                fontSize: '12px',
                w: '560px',
                h: '40.9px'
            },
            lg: {
                fontSize: '12px',
                w: '276px',
                h: '40px'
            },
            md: {
                fontSize: '12px',
                w: '248px',
                h: '40px'
            },
            sm: {
                fontSize: '12px',
                w: '196px',
                h: '40px'
            }
        }
    },
    Switch: {
        variants: {
            solid: {
                colorScheme: 'cyan'
            },
            outline: {
                colorScheme: 'whiteAlpha'
            }
        }
    }
};

export const theme = extendTheme({ styles, colors, components, textStyles, breakpoints });
