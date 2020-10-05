import React from 'react';
import '../../Styles/HomePage.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <>
        <div class="ui vertical footer segment">
            <div class="ui container">
              <h5> &copy; 2020 Tamali Roy - All Rights Reserved.</h5><br/>
               <Link to="/contactMe" className="footer-link"><i class="fa fa-envelope" aria-hidden="true"></i>Get in touch with me</Link>
            </div>
        </div>
        </>
    )
}

export default Footer;