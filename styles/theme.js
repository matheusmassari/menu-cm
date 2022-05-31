import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
        global: {
            html: {
                scrollBehavior: "smooth",
                bgColor: "#f5f5dc",
            },
        },
    },
    fonts: {
        heading: "Fira Code",
        body: "Bayon",
    },
});

export default theme;
