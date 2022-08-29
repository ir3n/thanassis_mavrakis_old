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
    xs: '400px',
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
    lightBeize: '#F9F9F9',
    darkGrey: '#181818',
    grey: '#555555',
    mediumGrey: '#A2A2A2',
    lightGrey: '#C6C6C6',
    blue: '#3093EE',
    green: '#1CA25A',
    red: '#ED1C24',
    border: '#E2E8F0',
    newsletter: '#E4E4E4',
    blue: '#578AB9'
};

const textStyles = {
    titleLg: {
        fontSize: ['26px', '26px', '26px', '26px', '30px'],
        lineHeight: '1.2'
    },
    titleMd: {
        fontSize: ['20px', '20px', '20px', '20px', '26px'],
        lineHeight: '1.5',
        fontWeight: 700
    },
    titleSm: {
        fontSize: ['16px', '16px', '16px', '16px', '20px'],
        lineHeight: '1.2'
    },
    subtitle: {
        fontSize: '18px',
        lineHeight: '1.2'
    },
    textLg: {
        fontSize: ['14px', '14px', '14px', '14px', '16px'],
        lineHeight: '1.5'
    },
    text: {
        fontSize: ['12px', '14px', '14px', '14px', '14px'],
        lineHeight: '1.5'
    },
    caption: {
        fontSize: '12px',
        lineHeight: '1.5'
    },
    note: {
        fontSize: '10px',
        lineHeight: '1.5'
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
