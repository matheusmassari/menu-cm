import React, { useState } from "react";
import { Box, Link, VStack, Text, Image, Center } from "@chakra-ui/react";
import NextLink from "next/link";
import "@fontsource/allura";
import "@fontsource/poppins";

const Principal = () => {
    const [textColor, setTextColor] = useState("#f5f5dc");
    const [backgroundColor, setBackgroundColor] = useState("#d9ac8d");
    const [headingColor, setHeadingColor] = useState("#8E3200");

    let ano = new Date().getFullYear();

    return (
        <>
            <Box height={"100vh"} w={"100vw"} backgroundColor={backgroundColor}>
                <Center>
                    <Image
                        w="15rem"
                        src="/Logo.svg"
                        alt="lavender-top"
                    ></Image>
                </Center>
                <VStack spacing={3} mt="2rem">
                    <NextLink href="entradas" passHref>
                        <Link style={{ textDecoration: "none" }}>
                            <Text
                                color={textColor}
                                fontSize={"4xl"}
                                fontFamily={"Allura, cursive"}
                            >
                                Entradas
                            </Text>
                        </Link>
                    </NextLink>
                    <NextLink href="moquecas" passHref>
                        <Link style={{ textDecoration: "none" }}>
                            <Text
                                color={textColor}
                                fontSize={"4xl"}
                                fontFamily={"Allura, cursive"}
                            >
                                Moquecas
                            </Text>
                        </Link>
                    </NextLink>
                    <NextLink href="peixes-frutos-mar" passHref>
                        <Link style={{ textDecoration: "none" }}>
                            <Text
                                color={textColor}
                                fontSize={"4xl"}
                                fontFamily={"Allura, cursive"}
                            >
                                Peixes e Frutos do Mar
                            </Text>
                        </Link>
                    </NextLink>
                    <NextLink href="carnes-aves-risotos" passHref>
                        <Link style={{ textDecoration: "none" }}>
                            <Text
                                color={textColor}
                                fontSize={"4xl"}
                                fontFamily={"Allura, cursive"}
                            >
                                Carnes, Aves e Risotos
                            </Text>
                        </Link>
                    </NextLink>

                    <NextLink href="bebidas" passHref>
                        <Link style={{ textDecoration: "none" }}>
                            <Text
                                color={textColor}
                                fontSize={"4xl"}
                                fontFamily={"Allura, cursive"}
                            >
                                Bebidas
                            </Text>
                        </Link>
                    </NextLink>
                    <NextLink href="sobremesas" passHref>
                        <Link style={{ textDecoration: "none" }}>
                            <Text
                                color={textColor}
                                fontSize={"4xl"}
                                fontFamily={"Allura, cursive"}
                            >
                                Sobremesas
                            </Text>
                        </Link>
                    </NextLink>
                </VStack>
                {/* <Center>
                    <Image
                        w="10rem"
                        src="/lavander-bottom.svg"
                        alt="lavender-top"
                    ></Image>
                </Center> */}
            </Box>
            <Center>
                <Box px="1rem" mt="-3rem">
                    {" "}
                    <Text
                        fontFamily={"Poppins"}
                        fontSize="0.65rem"
                        color={headingColor}
                    >
                        Designed & built by Matheus Massari Ⓒ {ano}
                    </Text>
                </Box>
            </Center>
        </>
    );
};

export default Principal;
