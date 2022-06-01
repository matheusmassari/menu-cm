import React, { useState } from "react";
import {
    Box,
    Link,
    VStack,
    Text,
    Image,
    Center,
    calc,
    Heading,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Head from "next/head";

const Principal = () => {
    const [textColor, setTextColor] = useState("#f5f5dc");
    const [backgroundColor, setBackgroundColor] = useState("#d9ac8d");
    const [headingColor, setHeadingColor] = useState("#8E3200");

    let ano = new Date().getFullYear();

    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const diaHoje = today.toDateString();

    return (
        <>
            <Head></Head>
            <Box
                h={"calc(100vh)"}
                w={"100vw"}
                boxSizing={"border-box"}
                backgroundColor={backgroundColor}
                overflowX="hidden"
                overflowY="hidden"
            >
                <Center>
                    <Image
                        w="15rem"
                        src="/massari-logo.png"
                        alt="lavender-top"
                    ></Image>
                </Center>
                <VStack spacing={3} mt="2rem">
                    <NextLink href="entradas" passHref>
                        <Link style={{ textDecoration: "none" }}>
                            <Heading color={textColor} fontSize={"4xl"}>
                                Entradas
                            </Heading>
                        </Link>
                    </NextLink>
                    {diaHoje[0] === "F" ? (
                        <NextLink href="sexta" passHref>
                            <Link style={{ textDecoration: "none" }}>
                                <Heading color={textColor} fontSize={"4xl"}>
                                    Pratos Principais
                                </Heading>
                            </Link>
                        </NextLink>
                    ) : (
                        <>
                            <NextLink href="moquecas" passHref>
                                <Link style={{ textDecoration: "none" }}>
                                    <Heading color={textColor} fontSize={"4xl"}>
                                        Moquecas
                                    </Heading>
                                </Link>
                            </NextLink>
                            <NextLink href="peixes-frutos-mar" passHref>
                                <Link style={{ textDecoration: "none" }}>
                                    <Heading color={textColor} fontSize={"4xl"}>
                                        Peixes e Frutos do Mar
                                    </Heading>
                                </Link>
                            </NextLink>
                            <NextLink href="carnes-aves-risotos" passHref>
                                <Link style={{ textDecoration: "none" }}>
                                    <Heading color={textColor} fontSize={"4xl"}>
                                        Carnes, Aves e Risotos
                                    </Heading>
                                </Link>
                            </NextLink>
                        </>
                    )}
                    <NextLink href="bebidas" passHref>
                        <Link style={{ textDecoration: "none" }}>
                            <Heading color={textColor} fontSize={"4xl"}>
                                Bebidas
                            </Heading>
                        </Link>
                    </NextLink>
                    <NextLink href="sobremesas" passHref>
                        <Link style={{ textDecoration: "none" }}>
                            <Heading color={textColor} fontSize={"4xl"}>
                                Sobremesas
                            </Heading>
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
                <Center>
                    <Box px="1rem" mt="2rem">
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
            </Box>
        </>
    );
};

export default Principal;
