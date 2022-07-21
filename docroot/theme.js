import { extendTheme } from '@chakra-ui/react';

const styles = {
    global: {
        'html, body': {
            fontFamily: 'Inter',
            fontSize: '14px'
        },
        body: {
            p: '0',
            m: '0',
            overflowX: 'hidden'
        }
    }
};

const breakpoints = {
    sm: '600px',
    md: '768px',
    lg: '900px',
    xl: '1024px',
    '2xl': '1440px'
};

const colors = {
    brand: '#000000',
    white: '#FFFFFF',
    lightBg: '#F6F6F6',
    darkGrey: '#181818',
    grey: '#555555',
    mediumGrey: '#A2A2A2',
    lightGrey: '#C6C6C6',
    blue: '#3093EE',
    green: '#1CA25A',
    red: '#ED1C24',
    border: '#C4C4C4',
    newsletter: '#E4E4E4'
};

const textStyles = {
    h1: {
        fontSize: ['40px', '48px'],
        fontWeight: '700',
        lineHeight: ['48px', '56px']
    },
    h2: {
        fontSize: ['30px', '38px'],
        fontWeight: '800',
        lineHeight: ['32px', '40px'],
        textTransform: 'uppercase'
    },
    h3: {
        fontSize: ['20px', '26px'],
        fontWeight: '700',
        lineHeight: ['28px', '36px'],
        textAlign: 'center'
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
        fontSize: ['12px', '12px', '14px'],
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
    },
    menuParent: {
        fontSize: '12px',
        lineHeight: '14px',
        fontWeight: '600',
        textTransform: 'uppercase'
    }
};

const sizes = {
    sizes: {
        container: {
            sm: '480px',
            md: '1180px',
            lg: '1440px',
            xl: '1920px'
        }
    }
};

const components = {
    Button: {
        baseStyle: {
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '12px',
            lineHeight: '15px',
            letterSpacing: '0.115em',
            padding: { base: '12px', lg: '15px' },
            borderRadius: '0',
            textTransform: 'uppercase'
        },
        variants: {
            primary: {
                bg: 'brand',
                color: 'white',
                _hover: {
                    bg: 'red',
                    color: 'white'
                },
                _disabled: {
                    bg: 'grey'
                }
            },
            outlineBlack: {
                border: '1px',
                borderColor: 'brand',
                color: 'brand',
                _hover: {
                    bg: 'brand',
                    color: 'white'
                },
                _disabled: {
                    bg: 'grey'
                }
            },
            outlineWhite: {
                color: 'white',
                border: '1px',
                borderColor: 'white',
                _hover: {
                    bg: 'white',
                    color: 'brand',
                    border: '1px solid white'
                }
            },
            green: {
                bg: 'green',
                color: 'white',
                _hover: {
                    bg: 'red'
                }
            }
        },
        sizes: {
            lg: {
                fontSize: '12px',
                w: '100%',
                h: 'auto'
            },
            md: {
                fontSize: '12px',
                w: 'auto',
                h: 'auto',
                minW: '196px'
            },
            sm: {
                fontSize: '12px',
                w: 'auto',
                h: 'auto',
                minW: '110px'
            }
        }
    }
};

export const theme = extendTheme({ styles, colors, components, textStyles, sizes, breakpoints });
