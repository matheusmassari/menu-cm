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
import { BsWhatsapp, BsPinMap } from "react-icons/bs";
import { motion } from "framer-motion";
import { homeLinks } from "../../helpers/home-links";

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
                h={["100vh", "100vh", "100vh", "100vh"]}
                w={"100vw"}
                boxSizing={"border-box"}
                backgroundColor={backgroundColor}
                overflowX="hidden"
                overflowY="hidden"
            >
                <Center>
                    <Box h="8rem" w="12rem">
                        <Image
                            w="12rem"
                            src="/massari-logo.png"
                            alt="lavender-top"
                        ></Image>
                    </Box>
                </Center>
                <VStack spacing={3}>
                    {homeLinks.map((link) => {
                        const { href, titulo, dias, color, id } = link;
                        if (dias === "todos") {
                            return (
                                <>
                                    <NextLink href={href} passHref key={id}>
                                        <Link
                                            style={{ textDecoration: "none" }}
                                        >
                                            <MotionHeading
                                                color={color}
                                                fontSize={"4xl"}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                {titulo}
                                            </MotionHeading>
                                        </Link>
                                    </NextLink>
                                </>
                            );
                        }
                        if (diaHoje[0] === "F" && dias === "sexta") {
                            return (
                                <NextLink href={href} passHref key={id}>
                                    <Link style={{ textDecoration: "none" }}>
                                        <MotionHeading
                                            color={color}
                                            fontSize={"4xl"}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            {titulo}
                                        </MotionHeading>
                                    </Link>
                                </NextLink>
                            );
                        }
                        if (diaHoje[0] !== "F" && dias === "sab-dom") {
                            return (
                                <NextLink href={href} passHref key={id}>
                                    <Link style={{ textDecoration: "none" }}>
                                        <MotionHeading
                                            color={color}
                                            fontSize={"4xl"}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            {titulo}
                                        </MotionHeading>
                                    </Link>
                                </NextLink>
                            );
                        }
                    })}

                    {/* ÍCONES LINKS */}
                    <HStack spacing={5}>
                        <NextLink
                            href="https://www.instagram.com/cozinhamassari/"
                            passHref
                        >
                            <Link style={{ textDecoration: "none" }}>
                                <MotionIcon
                                    mt="0.5rem"
                                    w="14"
                                    h="14"
                                    color={textColor}
                                    animate={{
                                        translateY: [0, 5, 0],
                                    }}
                                    transition={{
                                        duration: 1,
                                        times: [0, 0.2, 0.5, 0, 8, 1],
                                        repeat: Infinity,
                                        repeatDelay: 3.5,
                                    }}
                                >
                                    <CgInstagram size={18} />
                                </MotionIcon>
                            </Link>
                        </NextLink>
                        <NextLink href="https://wa.me/5598981590459" passHref>
                            <Link style={{ textDecoration: "none" }}>
                                <MotionIcon
                                    mt="0.5rem"
                                    w="14"
                                    h="14"
                                    color={textColor}
                                    animate={{
                                        translateY: [0, 5, 0],
                                    }}
                                    transition={{
                                        duration: 1,
                                        times: [0, 0.2, 0.5, 0, 8, 1],
                                        repeat: Infinity,
                                        repeatDelay: 3.5,
                                    }}
                                >
                                    <BsWhatsapp size={18} />
                                </MotionIcon>
                            </Link>
                        </NextLink>
                        <NextLink
                            href="https://goo.gl/maps/wtU7SgtyR4rZaRreA"
                            passHref
                        >
                            <Link style={{ textDecoration: "none" }} isExternal>
                                <MotionIcon
                                    mt="0.5rem"
                                    w="14"
                                    h="14"
                                    color={textColor}
                                    animate={{
                                        translateY: [0, 5, 0],
                                    }}
                                    transition={{
                                        duration: 1,
                                        times: [0, 0.2, 0.5, 0, 8, 1],
                                        repeat: Infinity,
                                        repeatDelay: 3.5,
                                    }}
                                >
                                    <BsPinMap size={18} />
                                </MotionIcon>
                            </Link>
                        </NextLink>
                    </HStack>
                </VStack>
            </Box>
            <Center bgColor="#d9ac8d" h="4rem">
                <Box px="1rem">
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
