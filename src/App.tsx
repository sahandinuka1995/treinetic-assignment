import React from 'react';
import './App.css';
import Layout from "./components/layout";
import Home from "./views/home";
import ProductDetails from "./views/productDetails";

function App() {
    return (<Layout>
        <ProductDetails/>
    </Layout>);
}

export default App;
