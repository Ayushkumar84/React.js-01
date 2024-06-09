import React, { useEffect, useState }  from 'react';

const Service =() =>{

    const [first, setfirst] =useState("This is normal data");

    const [second, setsecond] =useState("This is large data");

    useEffect(()=>{
        console.log("Service Component is Created");

        return () =>{
            console.log("Service Component is Deleted");
        }
    },[second]);
    
    return (
        <div>
            <h1>{first}</h1>
            <button onClick={() => setfirst("normal data has been changed")}  className='rounded mb-10 bg-red-200'>Change normal data</button>
            
            
            <h1>{second}</h1><button onClick={() =>  setsecond("Large data has been changed") } className='rounded mb-10 bg-blue-100'>Change large data</button>
        </div>
    )
}

export default Service