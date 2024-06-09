import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "./Context";
import { nanoid } from 'nanoid';
import { useNavigate, useParams } from "react-router-dom";

const Edit = ()=>{
    const [products, setproducts] =useContext(ProductContext);
    const navigate = useNavigate();
    const {id} =useParams();
    const [product, setproduct] =useState({
        title: '',
        image: '',
        category: '',
        price: '',
        description: '',
    });

    const ChangeHandler= (e)=>{
        setproduct({...product, [e.target.name] : [e.target.value]})
    }
    
    useEffect(()=>{
        setproduct(products.filter((p)=> p.id == id)[0]);
    }, [id])

    console.log(products);
   

 
    

    const submitHandler = (e)=>{
        e.preventDefault();

        if(product.title.toString().trim().length < 5 || 
        product.price.toString().trim().length< 1 || 
        product.category.toString().trim().length< 1 || 
        product.description.toString().trim().length< 5 ){
            alert("Each and every input must have atleast 4 character");
            console.log(title.trim().length);
            console.log(image.trim().length);
            console.log(category.trim().length);
            console.log(description.trim().length);
            console.log(price.trim().length);

            return;
        }

        const pi = products.findIndex( (p) => p.id == id);
        const copyData = [...products];
        copyData[pi] = {...products[pi], ...product };

        setproducts(copyData);
        localStorage.setItem("products", JSON.stringify(copyData));
        navigate("/");
    }

    console.log(product);

    return (
        <>    
        <button className='bg-red-200 m-10 border border-red-300 w-[100px] h-[30px] absolute top-[2%]' onClick={()=> navigate(-1)}>Home</button> 
           <form className="p-[5%] w-screen h-screen" onSubmit={submitHandler}>
            <h1 className="text-center text-4xl mb-10">Edit Product</h1>
            <input type="text" placeholder="Title" name="title" onChange={ChangeHandler}
            value={product && product.title}/>
            <input type="text" placeholder="Description" name="description" onChange={ChangeHandler} value={product && product.description}/>
            <input type="url" placeholder="Image" name="image" onChange={ChangeHandler} value={product && product.image}/>
            <input type="text" placeholder="Category" name="category" onChange={ChangeHandler} value={product && product.category}/>
            <input type="text" placeholder="Price" name="price" onChange={ChangeHandler} value={product && product.price}/>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md">Create</button>
            <button className="bg-red-500 text-white py-2 px-4 rounded-md">Cancel</button>
        </form>
        </>

    )
    }
export default Edit;