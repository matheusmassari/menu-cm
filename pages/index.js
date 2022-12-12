import React, { useState } from "react";
import Head from "next/head";
import Principal from "./components/Home";


export default function Home() {
    return (
        <>
            <Head>
                <title>Cozinha Massari Menu</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                
            </Head>
            <Principal></Principal>
        </>
    );
}
