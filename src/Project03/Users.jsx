import React, { useEffect }  from 'react';
import axios from './Axios';
import { useState } from 'react';

const Users = () => {
    const [first , setfirst] = useState([]);

    const getproducts = () =>{
      const api= '/products';
  
      axios
          .get(api)
          .then((products) => {
           
            setfirst(products.data);
          })
          .catch((error) => console.log(error))
    };

    useEffect(()=> {
      getproducts();
    },[]);
    return  (
        <div>
                
    <div className="bg-red-100 font-white font-bold">
      <button onClick={getproducts}>Get Products</button>
      </div>


              <ul>
     { first.length > 0 ? 
  first.map((items,index) => { return  <li className='rounded w-1/4 p-5 bg-red-200 mb-2' key={index}>{items.title}</li>})
 : 
  <h1>Loading...</h1>
}
    </ul>

    <br/>
    <br/>
</div>
    )
}
export default Users;