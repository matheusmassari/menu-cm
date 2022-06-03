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

const CarnesAvesRisotos = () => {
    const { carnesAvesRisotos } = CARDAPIO;
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
                    color="orange.800"
                    textAlign={"center"}
                    mb="2rem"
                >
                    Carnes, Aves e Risotos
                </Heading>
                <Accordion allowToggle>
                    {carnesAvesRisotos.map((entrada, index) => {
                        const { titulo, valor, desc, categoria, img } = entrada;
                        return (
                            <AccordionItem
                                key={index}
                                borderColor="rgba(182, 144, 119, 0.2)"
                            >
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        <Text
                                            fontFamily={"Poppins, sans-serif"}
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
                    })}
                </Accordion>
            </Box>
        </>
    );
};

export default CarnesAvesRisotos;
