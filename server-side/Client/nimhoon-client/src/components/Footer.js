
import React, { Component } from 'react';

import '../assets/global.css';
import '../assets/main.css';



function Footer(props) {
   return (
        <footer className="footer">
            <div className="footer_description">
                <span className="gray-text">
                        مراقبت و محافظت از حساب کاربری و رمزعبور هر کاربر بر عهده کاربر است. ریحون سریعترین راه سفارش آنلاین غذا است. منوی عکس‌دار رستوران‌های اطرافتان را بر اساس مکان خود به راحتی مشاهده کنید و سفارش دهید
                        <a href="">لیست رستوران‌ها</a>
                </span>
               
            </div>
            <div className="footer_bottom_nav">
                <hr size="5px" className="bottom_nav_line purple_line"/>
                <span className="white-text">تماس با ریحون</span>
                <a className="gray-text">درباره ریحون</a>
                <a className="gray-text">تماس با ما</a>
                <a className="gray-text">وبلاگ ریحون</a>
            </div>
            <div className="footer_bottom_nav">
                <hr size="5px" className="bottom_nav_line purple_line"/>
                <span className="white-text">رستوران‌ها</span>
                <a className="gray-text">ثبت رستوران</a>
            </div>
            <div className="footer_bottom_nav">
                <hr size="5px" className="bottom_nav_line red_line"/>
                <span className="white-text">پشتیبانی ریحون</span>
                <a className="gray-text">سوالات متداول</a>
                <a className="gray-text">تماس با پشیبانی</a>
                <a className="gray-text">قوانین و مقررات</a>
            </div>
            <div className="footer_bottom_nav">
                <hr size="5px" className="bottom_nav_line yellow_line"/>
                <span className="white-text">اپلیکیشن‌های موبایل</span>
                <img src="/mocks/mobile.PNG" alt=""/>
            </div>
            <div className="credit_sign">
                    <img src="/mocks/nanad.PNG" alt=""/>
            </div>
            
        </footer>
       
   );
}

export default Footer;