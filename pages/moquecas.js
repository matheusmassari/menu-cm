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
} from "@chakra-ui/react";
import MotionNavigation from "./components/MotionNav";

const Moquecas = () => {
    const { moquecas } = CARDAPIO;
    return (
        <>
            <MotionNavigation />
            <Box w="100%" h="100%" backgroundColor={"#f5f5dc"} py="1rem">
                <Heading
                    fontFamily={"Allura, sans-serif"}
                    color="#8E3200"
                    textAlign={"center"}
                    mb="2rem"
                >
                    Moquecas
                </Heading>
                <Accordion allowToggle>
                    {moquecas.map((entrada, index) => {
                        const { titulo, valor, desc, categoria } = entrada;
                        return (
                            <AccordionItem
                                key={index}
                                borderColor="rgba(182, 144, 119, 0.2)"
                            >
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
                                            fontFamily={"Poppins, sans-serif"}
                                            color="#8E3200"
                                        >
                                            {valor}
                                        </Text>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Text
                                        color="black"
                                        fontFamily={"Poppins, sans-serif"}
                                    >
                                        {desc}
                                    </Text>
                                </AccordionPanel>
                            </AccordionItem>
                        );
                    })}
                </Accordion>
            </Box>
        </>
    );
};

export default Moquecas;
