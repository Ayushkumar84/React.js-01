import axios from './Axios';
import React, { useContext, useEffect, useState } from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom'
import Loading from './Loading';
import { ProductContext } from "./Context";

const Description = () => {
    const [products, setproducts] =useContext(ProductContext);
    const [product, setproduct] = useState(null);
    const {id} = useParams();
    const Navigate =  useNavigate();
    // const getSingleProduct = async () =>{
    //     try {
    //         const {data} = await axios.get(`/products/${id}`);
    //         console.log(data);
    //         setproduct(data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }


   
    console.log(id);

    useEffect(()=>{
    // getSingleProduct()
        if(!product){
            setproduct(products.filter((p)=> p.id == id)[0]);
        }

},[]);

console.log(products);


const productsDelete = ()=>{
    const Filteredproducts = products.filter((p)=> p.id !== id);
    setproducts(Filteredproducts);
    console.log(Filteredproducts);
    localStorage.setItem("products", JSON.stringify(Filteredproducts));
    Navigate("/");
 }


    return ( product ?
        <div className="w-[70%] m-auto justify-between align-center  h-full p-[5%] flex gap-8 px-[5%]">
            
            <button className='bg-red-200 border border-red-300 w-[100px] h-[30px] absolute top-[2%]' onClick={()=> Navigate(-1)}>Back</button>
            <img src={product.image} className='w-[40%] object-contain h-[80%]' alt="" />
            <div className="content w-[50%]">
                <h1 className='text-4xl pt-20'>{product.title}</h1>
                <h3 className='text-zinc-400 my-5'>{product.category}</h3>
                <h2 className='text-red-300 mb-3'>${product.price}</h2>
                <p className='mb-3 py-2'>{product.description}</p>
                <Link to={`/Edit/${product.id}`}className='py-2 px-5 m-2 border rounded border-blue-200 text-blue-300'>Edit</Link>
                <button onClick={()=>productsDelete(product.id)} className='py-2 px-5 m-2 border rounded border-red-200 text-red-300'>Delete</button>
            </div>
        </div> : <Loading/>
    ) 
}
export default Description