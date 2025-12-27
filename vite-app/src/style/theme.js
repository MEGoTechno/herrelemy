import { typographies } from "./mui/TypographyStyle";
import { orange } from '@mui/material/colors';

// color design tokens export
export const tokensDark = {
    grey: {
        0: "#ffffff", // manually adjusted
        10: "#f6f6f6", // manually adjusted
        50: "#f0f0f0", // manually adjusted
        80: "#f4f6f8", // manually adjusted
        100: "#e0e0e0",
        200: "#c2c2c2",
        300: "#a3a3a3",
        400: "#858585",
        500: "#666666",
        600: "#525252",
        700: "#3d3d3d",
        800: "#292929",
        900: "#141414",
        1000: "#000000", // manually adjusted
    },
    primary: {
        100: "#f5d1d1",
        200: "#eba3a3",
        300: "#e17474",
        400: "#d74646",
        500: "#cd1818",
        600: "#a41313",
        700: "#7b0e0e",
        800: "#520a0a",
        900: "#290505"
    },
    secondary: orange,
};

const primary = {
    light: tokensDark.primary[600],
    dark: tokensDark.primary[400]
}

const bgColors = {
    light: {
        dafault: "#fff",
        alt: 'rgb(244, 246, 248)',
    },
    dark: {
        dafault: '#080c14',
        alt: '#1C252E',
    }
}

// alt: 'rgb(22, 28, 36)',
const textColors = {
    light: {
        primary: "#000",
        secondary: "#000",
    },
    dark: {
        primary: "#fff",
        secondary: "#fff"
    }
}

const shadows = {
    shadowStandard: '0 20px 30px hsla(0, 0%, 0%, 0.1)'
}


// function that reverses the color palette
function reverseTokens(tokensDark) {
    const reversedTokens = {};
    Object.entries(tokensDark).forEach(([key, val]) => {
        const keys = Object.keys(val);
        const values = Object.values(val);
        const length = keys.length;
        const reversedObj = {};
        for (let i = 0; i < length; i++) {
            reversedObj[keys[i]] = values[length - i - 1];
        }
        reversedTokens[key] = reversedObj;
    });
    return reversedTokens;
}

// light mode tokens
export const tokensLight = reverseTokens(tokensDark);




// mui theme settings
export const themeSettings = (mode) => {



    return {
        direction: 'rtl',
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                    // palette values for dark mode
                    primary: {
                        ...tokensDark.primary,
                        main: primary.dark,
                        light: primary.dark,
                        dark: primary.light
                    },
                    secondary: {
                        ...tokensDark.secondary,
                        main: tokensDark.secondary[500],
                    },
                    neutral: {
                        ...tokensDark.grey,
                        main: tokensDark.grey[500],
                    },
                    text: {
                        primary: textColors.dark.primary,
                        secondary: textColors.dark.secondary,
                        disabled: "#B78282"
                    },
                    background: {
                        default: bgColors.dark.dafault,
                        paper: bgColors.dark.alt,
                        alt: bgColors.dark.alt,
                    },
                    grey: tokensDark.grey,
                }
                : {
                    // palette values for light mode
                    primary: {
                        ...tokensLight.primary,
                        main: primary.light,
                        light: primary.light,
                        dark: primary.dark
                    },
                    secondary: {
                        ...tokensLight.secondary,
                        main: tokensDark.secondary[700],
                        light: tokensDark.secondary[600],
                    },
                    neutral: {
                        ...tokensLight.grey,
                        main: tokensDark.grey[500],
                    },
                    text: {
                        primary: textColors.light.primary,
                        secondary: textColors.light.secondary,
                        disabled: "#B78282"
                    },
                    background: {
                        default: bgColors.light.dafault,
                        paper: bgColors.light.alt,
                        alt: bgColors.light.alt,
                    },
                    grey: tokensDark.grey,

                }),
        },
        typography: typographies,
        components: {
            MuiButton: {
                defaultProps: {
                    color: 'secondary',
                },
            },
            MuiCssBaseline: {
                styleOverrides: (themeParam) => ({
                    // '*': {
                    //     transition: 'all .3s linear'
                    // },
                    body: {
                        overflowX: 'hidden'
                    },
                }),
            },

        },
    };
};

// background
// text => 1ry, 2ry, disabled
// primary
// secondary
// grey    ==> not
// neutral ==> reversed