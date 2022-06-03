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

const Sobremesas = () => {
    const { sobremesas } = CARDAPIO;

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
                <Heading
                    fontFamily={"Allura, sans-serif"}
                    color="#8E3200"
                    textAlign={"center"}
                    mb="2rem"
                >
                    Sobremesas
                </Heading>

                {sobremesas.map((sobremesa, index) => {
                    const { titulo, valor, desc, categoria } = sobremesa;
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
                    {sobremesas.map((entrada, index) => {
                        const { titulo, valor, desc, categoria } = entrada;
                        return (
                            <AccordionItem
                                key={index}
                                borderColor="rgba(182, 144, 119, 0.2)"
                                
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
                </Accordion> */}
            </Box>
        </>
    );
};

export default Sobremesas;
