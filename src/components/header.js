import React from 'react';
import {
  Link,
  NavLink,
  Route
} from 'react-router-dom';
import GoogleAuth from './googleAuth';
import '../Styles/Header.css';

const Header = () => {
  return (
  <>
  <nav class="navbar navbar-expand-lg navbar-light bg-light nav-header">
  <Link class="navbar-brand" to="/">TR | TAMALI ROY</Link>
   <span><Link class="navbar-brand" to="/contactMe">Contact me</Link></span>
  
  </nav>
  </>
  )
}

export default Header;