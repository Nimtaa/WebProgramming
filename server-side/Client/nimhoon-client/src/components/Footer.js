
import React, { Component } from 'react';

import '../assets/global.css';
import '../assets/main.css';



function Footer(props) {
   return (
        <footer class="footer">
            <div class="footer_description">
                <span class="gray-text">
                        مراقبت و محافظت از حساب کاربری و رمزعبور هر کاربر بر عهده کاربر است. ریحون سریعترین راه سفارش آنلاین غذا است. منوی عکس‌دار رستوران‌های اطرافتان را بر اساس مکان خود به راحتی مشاهده کنید و سفارش دهید
                        <a href="">لیست رستوران‌ها</a>
                </span>
               
            </div>
            <div class="footer_bottom_nav">
                <hr size="5px" class="bottom_nav_line purple_line"/>
                <span class="white-text">تماس با ریحون</span>
                <a class="gray-text">درباره ریحون</a>
                <a class="gray-text">تماس با ما</a>
                <a class="gray-text">وبلاگ ریحون</a>
            </div>
            <div class="footer_bottom_nav">
                <hr size="5px" class="bottom_nav_line purple_line"/>
                <span class="white-text">رستوران‌ها</span>
                <a class="gray-text">ثبت رستوران</a>
            </div>
            <div class="footer_bottom_nav">
                <hr size="5px" class="bottom_nav_line red_line"/>
                <span class="white-text">پشتیبانی ریحون</span>
                <a class="gray-text">سوالات متداول</a>
                <a class="gray-text">تماس با پشیبانی</a>
                <a class="gray-text">قوانین و مقررات</a>
            </div>
            <div class="footer_bottom_nav">
                <hr size="5px" class="bottom_nav_line yellow_line"/>
                <span class="white-text">اپلیکیشن‌های موبایل</span>
                <img src="/mocks/mobile.PNG" alt=""/>
            </div>
            <div class="credit_sign">
                    <img src="/mocks/nanad.PNG" alt=""/>
            </div>
            
        </footer>
       
   );
}

export default Footer;