import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './header';
import Footer from '../components/HomePage/Footer';
import FormDetails from './formDetails';
import ContactMe from './contactMe';
import HomePage from './HomePage/HomePage';
import CreateForm from './createForms/createForm';

const App = () => {
    
    return (
       <BrowserRouter>
        <Header />  
         
        <Route path="/" exact component={HomePage} />   
        <Route path="/contactMe" component={ContactMe} />
        <Route path="/createForm" component={CreateForm} />
        <Footer />
       </BrowserRouter>
      
    );
};

export default App;