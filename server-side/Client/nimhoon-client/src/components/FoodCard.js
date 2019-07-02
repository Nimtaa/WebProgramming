import React, { Component } from 'react';
import '../assets/global.css';
import '../assets/main.css';
import '../assets/mainList.css';
import RestaurantCard from './RestaurantCard';
const axios = require('axios');

class  FoodCard extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
        };
        // this.foodFilterParent = this.foodFilterParent.bind(this);
        // this.RestaurantHandler = this.RestaurantHandler.bind(this);
        // this.FoodFilterHandler = this.FoodFilterHandler.bind(this);
        // this.categoryQueryHandler = this.categoryQueryHandler.bind(this);
    }
    render() {
        return (
         <div className="food_card_div">
         {/* <h2 id="food_card_name">{this.props.name}</h2> */}
         <div className = "food_card_name_price_div ">
            <h id="food_card_name"> {this.props.name}</h>
            <div className="food_card_price_div">
            <span id = "food_card_toman">تومان</span>
            <h2 id="food_card_price">{this.props.price}</h2>
         </div>
         </div>
       
         <p id="food_card_descp">{this.props.description}</p>
         <button className="food_card_button">افزودن به سبد خرید +</button>    
        
         </div>
       );
    }
}
export default FoodCard;