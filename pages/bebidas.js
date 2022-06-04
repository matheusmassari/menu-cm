import React from "react";
import { CARDAPIO } from "../public/dados-cardapio";
import { Box, Text, Heading } from "@chakra-ui/react";
import MotionNavigation from "./components/MotionNav";
import Footer from "./components/Footer";

const Bebidas = () => {
    const { bebidas } = CARDAPIO;
    return (
        <>
            <MotionNavigation />
            <Box w="100%" h="100%" backgroundColor={"#f5f5dc"} py="6rem">
                <Heading color="orange.800" textAlign={"center"} mb="2rem">
                    Bebidas
                </Heading>

                {bebidas.map((bebida, index) => {
                    const { titulo, valor, desc, categoria } = bebida;
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
                })}
                {/* <Accordion allowToggle>
                    {bebidas.map((entrada, index) => {
                        const { titulo, valor, desc, categoria, img } = entrada;
                        if (categoria === "bebidas") {
                            return (
                                <AccordionItem
                                    key={index}
                                    borderColor="rgba(182, 144, 119, 0.2)"
                                    focusBorderColor="pink.400"
                                >
                                    <AccordionButton>
                                        <Box flex="1" textAlign="left">
                                            <Text
                                                fontFamily={
                                                    "Poppins, sans-serif"
                                                }
                                                color="#8E3200"
                                            >
                                                {titulo}
                                            </Text>
                                        </Box>
                                        <AccordionIcon color="#d9ac8d" />
                                        <Text
                                            fontFamily={"Poppins, sans-serif"}
                                            color="#8E3200"
                                        >
                                            {valor}
                                        </Text>
                                    </AccordionButton>

                                    <AccordionPanel pb={4}>
                                        <Center my="1rem">
                                            <Image
                                                src={img}
                                                alt="bolinho"
                                                boxSize="300px"
                                                objectFit="cover"
                                                borderRadius="8px"
                                                border="2px solid #8E3200"
                                            />
                                        </Center>
                                        <Text
                                            color="black"
                                            fontFamily={"Poppins, sans-serif"}
                                        >
                                            {desc}
                                        </Text>
                                    </AccordionPanel>
                                </AccordionItem>
                            );
                        }
                    })}
                </Accordion> */}
                <Heading
                    fontFamily={"Allura, sans-serif"}
                    color="#8E3200"
                    textAlign={"center"}
                    my="2rem"
                >
                    Drinks
                </Heading>
                {bebidas.map((bebida, index) => {
                    const { titulo, valor, desc, categoria } = bebida;
                    if (categoria === "drinks") {
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
                {/* <Accordion allowToggle>
                    {bebidas.map((entrada, index) => {
                        const { titulo, valor, desc, categoria, img } = entrada;
                        console.log(img);
                        if (categoria === "drinks") {
                            return (
                                <AccordionItem key={index}>
                                    <h2>
                                        <AccordionButton>
                                            <Box flex="1" textAlign="left">
                                                <Text
                                                    fontFamily={
                                                        "Poppins, sans-serif"
                                                    }
                                                    color="#8E3200"
                                                >
                                                    {titulo}
                                                </Text>
                                            </Box>
                                            <AccordionIcon color="#d9ac8d" />
                                            <Text
                                                fontFamily={
                                                    "Poppins, sans-serif"
                                                }
                                                color="#8E3200"
                                            >
                                                {valor}
                                            </Text>
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        <Center my="1rem">
                                            <Image
                                                src={img}
                                                alt="bolinho"
                                                boxSize="300px"
                                                objectFit="cover"
                                                borderRadius="8px"
                                            />
                                        </Center>
                                        <Text
                                            color="black"
                                            fontFamily={"Poppins, sans-serif"}
                                        >
                                            {desc}
                                        </Text>
                                    </AccordionPanel>
                                </AccordionItem>
                            );
                        }
                    })}
                </Accordion> */}
            </Box>
            <Footer></Footer>
        </>
    );
};

export default Bebidas;
