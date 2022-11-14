import { ReactNode } from "react";
import {
    Box,
    Container,
    Link,
    Stack,
    Text,
    Image,
    Flex,
    chakra,
    VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { BsPinMap } from "react-icons/bs";
import NextLink from "next/link";

const SocialButton = ({ children, label, href }) => {
    return (
        <chakra.button
            rounded={"full"}
            w={8}
            h={8}
            cursor={"pointer"}
            as={"a"}
            href={href}
            display={"inline-flex"}
            alignItems={"center"}
            justifyContent={"center"}
            transition={"background 0.3s ease"}
            
        >
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export default function LargeWithLogoLeft() {
    return (
        <Box
            borderTop="1px solid #8E3200"
            backgroundColor="#f5f5dc"
            // style={{
            //     left: 0,
            //     bottom: 0,
            //     right: 0,
            // }}
        >
            <Container
                as={Stack}
                maxW={"6xl"}
                py={4}
                direction={{ base: "column", md: "row" }}
                spacing={4}
                justify={{ base: "center", md: "space-between" }}
                align={{ base: "center", md: "center" }}
            >
                <Image w="8rem" src="/massari-logo.png" alt="logo image" />
                <Text color="orange.800" textAlign={"center"} pb='1rem'>
                    © 2022 Cozinha Massari. Direitos Reservados
                </Text>
                <Stack direction={"row"} spacing={6}>
                    <SocialButton
                        label={"Maps"}
                        href="https://goo.gl/maps/wtU7SgtyR4rZaRreA"
                    >
                        <BsPinMap size="30" color="#7B341E" />
                    </SocialButton>
                    <SocialButton
                        label={"Whats"}
                        href="https://wa.me/5598981590459"
                    >
                        <FaWhatsapp size="30" color="#7B341E" />
                    </SocialButton>
                    <SocialButton
                        label={"Instagram"}
                        href="https://www.instagram.com/cozinhamassari/"
                    >
                        <FaInstagram size="30" color="#7B341E" />
                    </SocialButton>
                </Stack>
            </Container>
        </Box>
    );
}
