import React from "react";
import { Box, Text, Heading, Image, Center } from "@chakra-ui/react";
import MotionNavigation from "./components/MotionNav";
import Footer from "./components/Footer";

const Eventos = () => {
    return (
        <>
            <MotionNavigation />
            <Box
                w="100%"
                h={["100%", "100%"]}
                backgroundColor={"#f5f5dc"}
                py="6rem"
            >
                <Heading
                    fontFamily={"Allura, sans-serif"}
                    color="orange.800"
                    textAlign={"center"}
                    mb="2rem"
                >
                    Próximos Eventos
                </Heading>
                <Center my="1rem">
                    <Image
                        src="caymmi.jpeg"
                        alt="bolinho"
                        // boxSize="300px"
                        // objectFit="cover"
                        borderRadius="8px"
                    />
                </Center>
                <Text mt="2rem" px="1rem">
                    Um dow maiores expontes da MPB Danilo Caymmi apresenta aqui
                    na Cozinha Massari o espetáculo VIVA CAYMMI, em homenagem à
                    obra do seu pai Dorival Caymmi!! Uma noite emocionante com
                    musicas inesqueciveis em um show intimista, para um público
                    realmente diferenciado!!
                    <br /> <br />
                    Dia 28/07 (quinta-feira). A casa abre as 19 horas. O show
                    começa as 22 horas. <br /> <br /> Abrindo a noite Marco
                    Antônio Brito nos vinis!! Não perca!!! <br /> <br />{" "}
                    Informações e venda: (98)991710459
                </Text>
            </Box>
            <Footer></Footer>
        </>
    );
};

export default Eventos;
