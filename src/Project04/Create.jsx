import React, { useContext, useState } from "react";
import { ProductContext } from "./Context";
import { nanoid } from 'nanoid';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Create = () => {
    const navigate = useNavigate();
    const [products, setproducts] =useContext(ProductContext);
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");



    const submitHandler = (e)=>{
        e.preventDefault();

        if(title.trim().length < 5 || price.trim().length< 1 || category.trim().length< 1 || description.trim().length< 5 ){
            alert("Each and every input must have atleast 4 character");
            console.log(title.trim().length);
            console.log(image.trim().length);
            console.log(category.trim().length);
            console.log(description.trim().length);
            console.log(price.trim().length);

            return;
        }

        const product= {
            id: nanoid(),
            title,
            image,
            category,
            price,
            description

        };
        setproducts([...products, product]);
        toast.success("New Product Added!");
        console.log(product);
        navigate("/");
    }

    return (
        <>    
        <button className='bg-red-200 m-10 border border-red-300 w-[100px] h-[30px] absolute top-[2%]' onClick={()=> navigate(-1)}>Home</button> 
           <form className="p-[5%] w-screen h-screen" onSubmit={submitHandler}>
            <h1 className="text-center text-4xl mb-10">Add New Product</h1>
            <input type="text" placeholder="Title" onChange={(e)=> setTitle(e.target.value)}/>
            <input type="text" placeholder="Description" onChange={(e)=> setDescription(e.target.value)}/>
            <input type="url" placeholder="Image" onChange={(e)=> setImage(e.target.value)}/>
            <input type="text" placeholder="Category" onChange={(e)=> setCategory(e.target.value)}/>
            <input type="number" placeholder="Price" onChange={(e)=> setPrice(e.target.value)}/>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md">Create</button>
            <button className="bg-red-500 text-white py-2 px-4 rounded-md">Cancel</button>
        </form>
        </>

    )
}
export default Create;