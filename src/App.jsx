import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './Project04/Home'
import Description from './Project04/Description';
import Create from './Project04/Create';
import Edit from './Project04/Edit';

const App = () => {
  return (<div className='h-screen w-screen flex'>
    

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Create" element={<Create />}/>
          <Route path="/Description/:id" element={<Description />}/>
          <Route path="/Edit/:id" element={<Edit/>}></Route>
        </Routes>


   

       

    </div>
  );
}
export default App;