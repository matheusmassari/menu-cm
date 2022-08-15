import React from "react";
import { CARDAPIO } from "../public/dados-cardapio";
import { Box, Text, Heading } from "@chakra-ui/react";
import MotionNavigation from "./components/MotionNav";
import Footer from "./components/Footer";

const Vinhos = () => {
    const { vinhos } = CARDAPIO;

    return (
        <>
            <MotionNavigation />
            <Box
                w="100%"
                h="fit-content"
                backgroundColor={"#f5f5dc"}
                py="1rem"
                pt="6rem"
            >
                <Heading
                    fontFamily={"Allura, sans-serif"}
                    color="#8E3200"
                    textAlign={"center"}
                    mb="2rem"
                >
                    Tintos
                </Heading>

                {vinhos.map((sobremesa, index) => {
                    const { titulo, valor, desc, categoria } = sobremesa;
                    if (categoria === "tinto") {
                        return (
                            <Box
                                key={index}
                                borderBottom="1px solid rgba(182, 144, 119, 0.2)"
                                display="flex"
                                justifyContent="space-between"
                                px="1rem"
                                py="0.75rem"
                            >
                                <Text color="#8E3200">{titulo}</Text>
                                <Text color="#8E3200">{valor}</Text>
                            </Box>
                        );
                    }
                })}
                <Heading
                    fontFamily={"Allura, sans-serif"}
                    color="#8E3200"
                    textAlign={"center"}
                    mb="2rem"
                    mt="3rem"
                >
                    Rosée
                </Heading>

                {vinhos.map((sobremesa, index) => {
                    const { titulo, valor, desc, categoria } = sobremesa;
                    if (categoria === "rose") {
                        return (
                            <Box
                                key={index}
                                borderBottom="1px solid rgba(182, 144, 119, 0.2)"
                                display="flex"
                                justifyContent="space-between"
                                px="1rem"
                                py="0.75rem"
                            >
                                <Text color="#8E3200">{titulo}</Text>
                                <Text color="#8E3200">{valor}</Text>
                            </Box>
                        );
                    }
                })}
                <Heading
                    fontFamily={"Allura, sans-serif"}
                    color="#8E3200"
                    textAlign={"center"}
                    mb="2rem"
                    mt="3rem"
                >
                    Brancos
                </Heading>

                {vinhos.map((sobremesa, index) => {
                    const { titulo, valor, desc, categoria } = sobremesa;
                    if (categoria === "branco") {
                        return (
                            <Box
                                key={index}
                                borderBottom="1px solid rgba(182, 144, 119, 0.2)"
                                display="flex"
                                justifyContent="space-between"
                                px="1rem"
                                py="0.75rem"
                            >
                                <Text color="#8E3200">{titulo}</Text>
                                <Text color="#8E3200">{valor}</Text>
                            </Box>
                        );
                    }
                })}
            </Box>

            <Footer></Footer>
        </>
    );
};

export default Vinhos;
