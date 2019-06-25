import React, { Component } from 'react';
import '../assets/global.css';
import '../assets/main.css';

function RestaurantCard(props) {
   return (
        <div class="top_restaurant_div">
            <img class="top_restaurant_logo"/>
        <h2>{props.name}</h2>
        <span id="top_restaurant_rateSpan"></span>
        {/* <!-- <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked "></span>
        <span class="fa fa-star-half-full halfchecked"></span>
        <span class="fa fa-star-o unchecked"></span>--> */}
        <span class="orange_rating">{props.rate}</span>
        <p id="top_restaurant_food">{props.food}</p>
        <p id="top_restaurant_address">{props.address}</p>
        <button class="top_restaurant_button">شروع سفارش</button>
        </div>
   );
}

export default RestaurantCard;