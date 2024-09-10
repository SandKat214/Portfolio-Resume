import { VStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
    return (
        <VStack w="100vw" minH="100vh" align='center'>
            <VStack 
                w="100%" 
                maxW='1300px' 
                justify='space-between' 
                align='center' 
                spacing='50px'
                flex={['unset', '1']}
                p='30px 40px'
            >
                <Navbar />
                <Outlet />
                <Footer />
            </VStack>
        </VStack>
    );
}


export default RootLayout;