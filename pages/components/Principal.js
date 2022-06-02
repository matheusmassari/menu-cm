import React, { useState } from "react";
import {
    Box,
    Link,
    VStack,
    Text,
    Image,
    Center,
    HStack,
    Heading,
    Icon,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { CgInstagram } from "react-icons/cg";
import { BsWhatsapp } from "react-icons/bs";
import { motion } from "framer-motion";

const Principal = () => {
    const [textColor, setTextColor] = useState("#f5f5dc");
    const [backgroundColor, setBackgroundColor] = useState("#d9ac8d");
    const [headingColor, setHeadingColor] = useState("#8E3200");

    const MotionIcon = motion(Icon);
    const MotionHeading = motion(Heading);
    let ano = new Date().getFullYear();

    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const diaHoje = today.toDateString();

    return (
        <>
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
                        w="12rem"
                        src="/massari-logo.png"
                        alt="lavender-top"
                    ></Image>
                </Center>
                <VStack spacing={3}>
                    <NextLink href="entradas" passHref>
                        <Link style={{ textDecoration: "none" }}>
                            <MotionHeading
                                color={textColor}
                                fontSize={"4xl"}
                                whileTap={{ scale: 0.9 }}
                            >
                                Entradas
                            </MotionHeading>
                        </Link>
                    </NextLink>
                    {diaHoje[0] === "F" ? (
                        <NextLink href="sexta" passHref>
                            <Link style={{ textDecoration: "none" }}>
                                <MotionHeading
                                    color={textColor}
                                    fontSize={"4xl"}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    Pratos Principais
                                </MotionHeading>
                            </Link>
                        </NextLink>
                    ) : (
                        <>
                            <NextLink href="moquecas" passHref>
                                <Link style={{ textDecoration: "none" }}>
                                    <MotionHeading
                                        color={textColor}
                                        fontSize={"4xl"}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        Moquecas
                                    </MotionHeading>
                                </Link>
                            </NextLink>
                            <NextLink href="peixes-frutos-mar" passHref>
                                <Link style={{ textDecoration: "none" }}>
                                    <MotionHeading
                                        color={textColor}
                                        fontSize={"4xl"}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        Peixes e Frutos do Mar
                                    </MotionHeading>
                                </Link>
                            </NextLink>
                            <NextLink href="carnes-aves-risotos" passHref>
                                <Link style={{ textDecoration: "none" }}>
                                    <MotionHeading
                                        color={textColor}
                                        fontSize={"4xl"}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        Carnes, Aves e Risotos
                                    </MotionHeading>
                                </Link>
                            </NextLink>
                        </>
                    )}
                    <NextLink href="bebidas" passHref>
                        <Link style={{ textDecoration: "none" }}>
                            <MotionHeading
                                color={textColor}
                                fontSize={"4xl"}
                                whileTap={{ scale: 0.9 }}
                            >
                                Bebidas
                            </MotionHeading>
                        </Link>
                    </NextLink>
                    <NextLink href="sobremesas" passHref>
                        <Link style={{ textDecoration: "none" }}>
                            <MotionHeading
                                color={textColor}
                                fontSize={"4xl"}
                                whileTap={{ scale: 0.9 }}
                            >
                                Sobremesas
                            </MotionHeading>
                        </Link>
                    </NextLink>
                    <HStack spacing={5}>
                        <NextLink
                            href="https://www.instagram.com/cozinhamassari/"
                            passHref
                        >
                            <Link style={{ textDecoration: "none" }}>
                                <MotionIcon
                                    w="14"
                                    h="14"
                                    color={textColor}
                                    animate={{
                                        translateX: [0, -5, 0],
                                    }}
                                    transition={{
                                        duration: 1,
                                        times: [0, 0.2, 0.5, 0, 8, 1],
                                        repeat: Infinity,
                                        repeatDelay: 2,
                                    }}
                                >
                                    <CgInstagram size={24} />
                                </MotionIcon>
                            </Link>
                        </NextLink>
                        <NextLink href="https://wa.me/5598981590459" passHref>
                            <Link style={{ textDecoration: "none" }}>
                                <MotionIcon
                                    w="14"
                                    h="14"
                                    color={textColor}
                                    animate={{
                                        translateX: [0, 5, 0],
                                    }}
                                    transition={{
                                        duration: 1,
                                        times: [0, 0.2, 0.5, 0, 8, 1],
                                        repeat: Infinity,
                                        repeatDelay: 2,
                                    }}
                                >
                                    <BsWhatsapp size={24} />
                                </MotionIcon>
                            </Link>
                        </NextLink>
                    </HStack>
                </VStack>
            </Box>
            <Center>
                <Box px="1rem" mt="-2rem">
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
