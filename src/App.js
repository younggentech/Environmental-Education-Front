import './App.css';
import HomePage from "./mainPage/HomePage";
import { ChakraProvider } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom';
import Secured from "./LMS/Secured";
import keycloak from "./keycloak";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import PrivateRoute from "./helpers/PrivateRoute";
import React from 'react';


function App() {
    const API_ROUTE = "https://env-api.enved.space";
    return (
        <div>
            <ReactKeycloakProvider authClient={keycloak}>
                <ChakraProvider>
                        <Routes>
                            <Route path="/" element={<HomePage route={API_ROUTE}/>} />
                            <Route path="/secured" element={
                                <PrivateRoute>
                                    <Secured />
                                </PrivateRoute>
                            } />
                        </Routes>
                    </ChakraProvider>
            </ReactKeycloakProvider>
        </div>
      );
}

export default App;
