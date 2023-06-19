import React from 'react';

import ProductsCard from './ProductsCard';
import ContactForm from './ContactForm';
import { Routes, Route } from 'react-router-dom';

import Login from './Login';

const App = () => {

  
  return (
    <Routes>
   
    <Route exact path="/" element={< ProductsCard/>} />
 <Route path="/ContactForm" element={< ContactForm />} />
 <Route path="/Login" element={< Login />} />


  </Routes>
  );
};

export default App;
