import React, { useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";
import {
    IconButton,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    Icon,
    DrawerBody,
    Image,
    Box,
    Text,
    VStack,
    Heading,
    DrawerCloseButton,
    Link,
    Button,
} from "@chakra-ui/react";
import { BiMenuAltRight } from "react-icons/bi";
import { motion, useAnimation } from "framer-motion";
import NextLink from "next/link";
import { GiCauldron } from "react-icons/gi";
import { GrLinkPrevious } from "react-icons/gr";

const MotionText = motion(Text);
const MotionIcon = motion(Box);

//////////////// CAUDERAO ANIMATION

const getRandomTransformOrigin = () => {
    const value = (16 + 40 * Math.random()) / 100;
    const value2 = (15 + 36 * Math.random()) / 100;
    return {
        originX: value,
        originY: value2,
    };
};

const getRandomDelay = () => -(Math.random() * 0.7 + 0.05);
const randomDuration = () => Math.random() * 0.07 + 0.23;

const DrawerNav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const diaHoje = today.toDateString();

    return (
        <>
            <Button
                onClick={onOpen}
                mr="1rem"
                variant="none"
                border="2px solid #7B341E"
                backgroundColor="#7B341E"
                py="1.5rem"
                px="0.5rem"
            >
                <MotionIcon
                    animate={{
                        rotate: [-5, 10, 0],

                        transition: {
                            delay: getRandomDelay(),
                            repeat: Infinity,
                            duration: randomDuration(),
                        },
                    }}
                    style={{
                        ...getRandomTransformOrigin(),
                    }}
                >
                    <GiCauldron size={40} color="#f5f5dc" />
                </MotionIcon>
            </Button>

            <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent
                    bgColor="#f5f5f5"
                    display="flex"
                    alignItems="center"
                >
                    <DrawerCloseButton />
                    <NextLink href="/" passHref>
                        <Link>
                            <Icon
                                pos="absolute"
                                left="5"
                                top="5"
                                as={GrLinkPrevious}
                                color="orange.800"
                            />
                        </Link>
                    </NextLink>

                    <DrawerBody>
                        <VStack spacing={4} mt="2rem">
                            <Box w="12rem" h="5rem">
                                <Image
                                    w="12rem"
                                    src="/lavander-top.svg"
                                    alt="lavender-top"
                                ></Image>
                            </Box>

                            <NextLink href="entradas" passHref>
                                <Link style={{ textDecoration: "none" }}>
                                    <Heading
                                        fontSize={"3xl"}
                                        color="orange.800"
                                    >
                                        Entradas
                                    </Heading>
                                </Link>
                            </NextLink>

                            {diaHoje[0] === "F" ? (
                                <>
                                    <NextLink href="sexta" passHref>
                                        <Link
                                            style={{ textDecoration: "none" }}
                                        >
                                            <Heading
                                                fontSize={"3xl"}
                                                color="orange.800"
                                            >
                                                Pratos Principais
                                            </Heading>
                                        </Link>
                                    </NextLink>
                                </>
                            ) : (
                                <>
                                    <NextLink href="moquecas" passHref>
                                        <Link
                                            style={{ textDecoration: "none" }}
                                        >
                                            <Heading
                                                fontSize={"3xl"}
                                                color="orange.800"
                                            >
                                                Moquecas
                                            </Heading>
                                        </Link>
                                    </NextLink>

                                    <NextLink href="peixes-frutos-mar" passHref>
                                        <Link
                                            style={{ textDecoration: "none" }}
                                        >
                                            <Heading
                                                fontSize={"3xl"}
                                                color="orange.800"
                                            >
                                                Peixes e Frutos do Mar{" "}
                                            </Heading>
                                        </Link>
                                    </NextLink>

                                    <NextLink
                                        href="carnes-aves-risotos"
                                        passHref
                                    >
                                        <Link
                                            style={{ textDecoration: "none" }}
                                        >
                                            <Heading
                                                fontSize={"3xl"}
                                                color="orange.800"
                                            >
                                                Carnes, Aves e Risotos{" "}
                                            </Heading>
                                        </Link>
                                    </NextLink>
                                </>
                            )}
                            <NextLink href="bebidas" passHref>
                                <Link style={{ textDecoration: "none" }}>
                                    <Heading
                                        fontSize={"3xl"}
                                        color="orange.800"
                                    >
                                        Bebidas{" "}
                                    </Heading>
                                </Link>
                            </NextLink>

                            <NextLink href="sobremesas" passHref>
                                <Link style={{ textDecoration: "none" }}>
                                    <Heading
                                        fontSize={"3xl"}
                                        color="orange.800"
                                    >
                                        Sobremesas{" "}
                                    </Heading>
                                </Link>
                            </NextLink>
                            <Box w="12rem" h="5rem">
                                <Image
                                    w="12rem"
                                    src="/lavander-bottom.svg"
                                    alt="lavender-bottom"
                                ></Image>
                            </Box>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default DrawerNav;
