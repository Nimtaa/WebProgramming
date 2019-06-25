import React, { Component } from 'react';
import Select from 'react-select'

import '../assets/global.css';
import '../assets/main.css';


const options = [
    { value: 'chocolate', label: 'تهران' },
    { value: 'strawberry', label: 'ساری' },
    { value: 'vanilla', label: 'مشهد' }
  ]
function Search(props) {
   return (
       <React.Fragment>
   <div class="main_banner">
            <div class="banner_logo">
                    <img  src="../mocks/logo.png"/>
                </div>
        <div class="banner_text">
            <h>سفارش آنلاین غذا
            از بهترین رستوران‌ها و فست‌فود‌‌ها</h>            
            <p>.برای دیدن لیست رستوران‌ها و فست‌فود‌هایی که به شما سرویس می‌دهند، منطقه خود را وارد کنید</p>
            <div class="main_search_box">
          
                <span class="city_select">
               
                    {/* <select class="city_select_element">
                        <option value="تهران">تهران</option>
                        <option value="ساری">ساری</option>
                        <option value="مشهد">مشهد</option>
                        <option value="کرج">کرج</option>
                      </select> */}
                </span>
                
                <span class="neighbor_input">
                    <span>
                        <img  id="pin_icon" src="../mocks/pin.png"/>
                    </span>
                    <input class="neighbor_input_element" type="text" name="neighbour_input" value="مثلا نیاوران"/>
                </span>
            </div>
        </div>
    </div>
    <Select options={options}  placeholder="شهر" styles={customStyles}/>
    </React.Fragment>
   );
}


const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      color: state.isSelected ? 'red' : 'blue',
      padding: 20,
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: 100,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
  }

export default Search;