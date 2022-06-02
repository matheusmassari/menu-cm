import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
        global: {
            html: {
                scrollBehavior: "smooth",
                bgColor: "#f5f5dc",
                // height: "100%",
                // width: "100%",
                // margin: "0",
            },
            body: {
                // height: "100%",
                // width: "100%",
                // margin: "0",
            },
            "*": {
                boxSizing: "border-box",
            },
        },
    },
    fonts: {
        heading: `Allura, sans-serif, ${base.fonts?.heading}`,
        body: `Poppins, ${base.fonts?.heading}`,
    },
    defaultProps: {
        focusBorderColor: "red.200",
    },
});

export default theme;
