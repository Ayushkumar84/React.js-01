import React, { useContext, useState, useEffect } from 'react';
import Nav from './Nav';
import {Link, useLocation, useNavigate } from 'react-router-dom'
import { ProductContext } from './Context';
import Loading from './Loading';
import axios from './Axios';

const Home = () =>{
    const [products] = useContext(ProductContext);

    const {search} = useLocation();
    const category = decodeURIComponent(search.split("=")[1]);

    const [filterProducts, setfilterProducts] = useState(null);

   const Navigate =useNavigate();

    const getproductscategory = async () => {
        try{
            const {data} = await axios.get(`/products/category/${category}`);
            setfilterProducts(data);
            console.log(data);
        }catch(e){
            console.log(e);
        }
    }

    console.log(category);
    console.log(filterProducts);

useEffect(()=> {
    // if(filterProducts != null) setfilterProducts(products);
    // if(category != "undefined") getproductscategory();
    if(category != "undefined"){
    //     getproductscategory();
    setfilterProducts(products.filter((p)=> p.category == category));
    }
    else{
        setfilterProducts(products);
        console.log(products);
    }
},[category, products]);

console.log(filterProducts);

    return (
        products ? 
        <>
        
        <Nav />
        
        <div className=" w-[85%]  px-5 pt-[5%]  flex-wrap flex gap-5 overflow-x-hidden overflow-y-auto relative">
            {category == 'undefined' ?  <button className='bg-red-200 border hidden border-red-300 w-[100px] h-[30px] absolute top-[2%]' onClick={()=> Navigate("/")}>Welcome</button> : <button className='bg-red-200  border border-red-300 w-[100px] h-[30px] absolute top-[2%]' onClick={()=> Navigate("/")}>Home</button> }
       
            {filterProducts && filterProducts.map((p, i) => (
                 <div key={i} className="card px-3 py-3 pt-0 border shadow rounded w-[20%] h-[40vh] flex-col flex justify-center items-center">
                    <Link to={`/description/${p.id}`}>
                        <div className="w-full  hover:scale-110 w-[40%] flex align-center justify-center" >
                            <img src={p.image} className="w-[50%] h-[50%] object-contain" alt="" />
                        </div>
                        <h1 className='hover:text-blue-300 pt-1'>{p.title}</h1>
                        <h3 className='text-red-300'>${p.price}</h3>
                    </Link>
                </div>
            )
            )}
        
        </div>
    </>: <Loading/>
    )
}

export default Home