import React, { Component } from 'react';

import '../assets/global.css';
import '../assets/main.css';

function Header(props) {
   return (
       <React.Fragment>
    <div className="topnav">
        <a className="topnav_word" href="./login.html">ورود</a>
        <span className="pipe"></span>
        <a className="topnav_word" href="./register.html">عضویت</a>
        &emsp;
        <a className="topnav_word" href="#help">راهنما</a>
    </div>
    <div className="topline"></div> 
    </React.Fragment>
   );
}

export default Header;