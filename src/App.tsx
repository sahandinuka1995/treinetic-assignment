import React from 'react';
import './App.css';
import Layout from "./components/layout";
import Home from "./views/home";
import ProductDetails from "./views/productDetails";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="product/:id" element={<ProductDetails/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
