import { extendTheme } from '@chakra-ui/react';

const styles = {
    global: {
        'html, body': {
            fontFamily: 'Open Sans',
            fontSize: '16px'
        }
    },

    fonts: {
        heading: 'Open Sans, sans-serif',
        body: 'Roboto, Open Sans, sans-serif'
    }
};

const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1024px',
    xxl: '1536px'
};

const colors = {
    brand: '#FF8234',
    black: '#000000',
    white: '#FFFFFF',
    darkGrey: '#919191',
    grey: '#CDCDCD',
    lightGrey: '#F4F4F4',
    blue: '#2D4696',
    darkGreen: '#447273',
    yellow: '#F5B559',
    green: '#79B0A4',
    pink: '#DF7562',
    darkYellow: '#E0B33D',
    darkBlue: '#354D68',
    oliveGreen: '#A1AA6B',
    darkRed: '#B63B34',
    brightRed: '#FF0000',
    brightGreen: '#00DF16',
    primary: '#151515',
    secondary: '#FFFFFF',
    border: '#878787',
    borderForm: '#1E1E1E',
    borderMobile: '#C4C4C4',
    newsletter: '#F1F1F1',

    buttons: {
        primary: '#151515',
        primaryHover: '#545454',
        secondary: '#FFFFFF',
        secondaryHover: '#FAFAFA',
        disabled: '#878787'
    },
    footer: {
        black: '#111111',
        grey: '#F1F1F1',
        border: '#373737'
    }
};

const textStyles = {
    h1: {
        fontSize: ['40px', '48px'],
        fontWeight: 'bold',
        lineHeight: ['48px', '56px']
    },
    h2: {
        fontSize: ['32px', '40px', '40px'],
        fontWeight: 'bold',
        lineHeight: ['40px', '48px', '48px']
    },
    h3: {
        fontSize: ['24px', '32px', '32px'],
        fontWeight: 'bold',
        lineHeight: ['32px', '40px', '40px']
    },
    h4: {
        fontSize: ['20px', '22px', '22px'],
        fontWeight: 'bold',
        lineHeight: '24px'
    },
    lg: {
        fontSize: '20px',
        fontWeight: 'bold',
        lineHeight: '24px'
    },
    md: {
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '16px'
    },
    sm: {
        fontSize: '13px',
        fontWeight: '400',
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
        lineHeight: '16px'
    }
};

const components = {
    Button: {
        baseStyle: {
            fontFamily: 'Roboto',
            width: '240px',
            height: '48px',
            padding: '16px',
            borderRadius: '2px'
        },
        variants: {
            primary: {
                bg: 'brand',
                border: '0.5px solid #FF8234',

                color: 'white',

                _hover: {
                    bg: 'white',
                    color: 'brand'
                },
                _disabled: {
                    bg: 'secondaryHover',
                    color: 'disabled',
                    border: '0'
                }
            },
            outline: {
                bg: 'white',
                border: '0.5px solid #000000 !important',
                color: 'black',
                _hover: {
                    bg: 'black',
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
                bg: 'darkGrey',
                color: 'white',
                border: '0.5px solid #919191',
                _hover: {
                    bg: 'white',
                    color: 'darkGrey'
                }
            }
        },
        sizes: {
            xl: {
                fontSize: '14px',
                w: '304px',
                h: '48px'
            },
            lg: {
                fontSize: '14px',
                w: '264px',
                h: '48px'
            },
            md: {
                fontSize: '14px',
                w: '240px',
                h: '48px'
            },
            sm: {
                fontSize: '14px',
                w: '200px',
                h: '48px'
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
