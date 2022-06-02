import React from "react";
import { CARDAPIO } from "../public/dados-cardapio";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Text,
    Heading,
    Center,
    Image,
} from "@chakra-ui/react";
import MotionNavigation from "./components/MotionNav";

const Bebidas = () => {
    const { bebidas } = CARDAPIO;
    return (
        <>
            <MotionNavigation />
            <Box
                w="100%"
                h="100%"
                backgroundColor={"#f5f5dc"}
                py="1rem"
                pt="6rem"
            >
                <Heading color="orange.800" textAlign={"center"} mb="2rem">
                    Bebidas
                </Heading>

                <Accordion allowToggle>
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
                </Accordion>
                <Heading
                    fontFamily={"Allura, sans-serif"}
                    color="#8E3200"
                    textAlign={"center"}
                    my="2rem"
                >
                    Drinks
                </Heading>
                <Accordion allowToggle>
                    {bebidas.map((entrada, index) => {
                        const { titulo, valor, desc, categoria, img } = entrada;
                        console.log(img)
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
                </Accordion>
            </Box>
        </>
    );
};

export default Bebidas;
