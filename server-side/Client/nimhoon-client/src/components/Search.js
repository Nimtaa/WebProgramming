import React, { Component } from 'react';
import Restaurants from '../Restaurants';
import App from '../App';
import '../assets/global.css';
import '../assets/main.css';
import {FaAngleDown} from 'react-icons/fa';
import Select from "react-dropdown-select";


const options = [
    { value: 'chocolate', label: 'تهران' },
    { value: 'strawberry', label: 'ساری' },
    { value: 'vanilla', label: 'مشهد' }
  ]

const legend_style = {
    fontSize : '0.5rem',
    color : '#9c9c9c',
    textAlign : 'right'
}
const fa_icon_style = {
    fontSize :'2rem',
    marginTop : '6%'

}
const icon_style = {
    marginTop : '0.5%'
}
const select_style = {
    fontFamily : 'Shabnam',
    border : 'none',
    outline : 'none',
    // left:'32%',
    // top: '11%',
    right : '10%',
    height : '22%'
}
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "مثلا نیاوران",
            placeholder : "تهران"
        };
        this.handleChange = this.handleChange.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
        this.dropdownHandler = this.dropdownHandler.bind(this);
    }
    dropdownHandler (){
        this.setState({placeholder : "شهر"})
    }
    changeTest(){
        this.setState({
            query : false
        });
    }
    handleChange(event){
        this.setState({
            title : event.target.value
        });
    }
    clickHandler(event){
        this.setState({
            title : ""
        });
    }
    render (){
        console.log("Title :" ,this.state.title);
       return (
            <React.Fragment>
                <div className="main_banner">
                            <div className="banner_logo">
                                    <img  src="../mocks/logo.png"/>
                                </div>
                        <div className="banner_text">
                            <h>سفارش آنلاین غذا
                            از بهترین رستوران‌ها و فست‌فود‌‌ها</h>            
                            <p>.برای دیدن لیست رستوران‌ها و فست‌فود‌هایی که به شما سرویس می‌دهند، منطقه خود را وارد کنید</p>
                            <div className="main_search_box">
                        
                                <div className="city_select">
                                    {/* <FaAngleDown style= {fa_icon_style}/> */}
                                    <div className="select_city_div">
                                    <Select className = "select_react_dropdown" 
                                    style ={select_style} options={options}
                                    placeholder={this.state.placeholder} 
                                    onDropdownOpen = {this.dropdownHandler}
                                    />
                                    </div>
                                </div>
                                
                                <fieldset className="neighbor_input">
                                    <legend style={legend_style}>منطقه خود را وارد کنید</legend>
                                    <span>
                                        <img style={icon_style} id="pin_icon" src="../mocks/pin.png"/>
                                    </span>
                                    {/* <input class="neighbor_input_element" type="text" name="neighbour_input" value="مثلا نیاوران"/> */}
                                    <input className="main_list_neighbor_input_element" 
                                    type="text" name="mainList_neighbourSearch" 
                                    value={this.state.title}
                                    onChange={this.handleChange}
                                    onClick={this.clickHandler}
                                    />
                                </fieldset>
                                {/* <img src="/mocks/Search_icon.jpg"/> */}
                                <button className = "SearchButton" id ={this.state.title} onClick ={this.props.fatherHandler} ></button>
                            </div>
                        </div>
                    </div>
            </React.Fragment>
       );
   }

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