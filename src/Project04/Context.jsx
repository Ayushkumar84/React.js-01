import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from './Axios';

export const ProductContext = createContext();

const Context = (props) => {
    const [product, setproduct] =useState(null);

    const getProducts = async () =>{
        try{
            const {data} = await axios.get("/products");
            setproduct(data);
        }catch (error){
            console.log(error);
        }
    }
   useEffect(()=>{
    getProducts();
    },[]);

    
    return(
        <ProductContext.Provider value={[product, setproduct]}>{props.children}</ProductContext.Provider>
    )
}

export default Context;