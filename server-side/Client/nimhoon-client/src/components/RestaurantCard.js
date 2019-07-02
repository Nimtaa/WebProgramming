import React, { Component } from 'react';
import '../assets/global.css';
import '../assets/main.css';

let foodCategories =[];
function RestaurantCard(props) {

    
    if(!props.close){
   return (
        <div className="top_restaurant_div">
            <img className="top_restaurant_logo"/>
        <h2>{props.name}</h2>
        <span id="top_restaurant_rateSpan"></span>
        {/* <!-- <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked "></span>
        <span class="fa fa-star-half-full halfchecked"></span>
        <span class="fa fa-star-o unchecked"></span>--> */}
        <span className="orange_rating">{props.rate}</span>
        <p id="top_restaurant_food">{foodCategories}</p>
        <p id="top_restaurant_address">{props.address}</p>
        
        <ul className="card_restaurant_food">
            
            {props.food.map((c, i) => {
            return (<li key={i}><p id="top_restaurant_food">{c.name} &bull; </p></li>);
            })}
        </ul>
        <button className="top_restaurant_button">شروع سفارش</button>
        </div>
   );
    }
    else{
        return (
            <div className="top_restaurant_div_close">
                <img className="top_restaurant_logo"/>
            <h2>{props.name}</h2>
            <span id="top_restaurant_rateSpan"></span>
            {/* <!-- <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked "></span>
            <span class="fa fa-star-half-full halfchecked"></span>
            <span class="fa fa-star-o unchecked"></span>--> */}
            <span className="orange_rating">{props.rate}</span>
            <p id="top_restaurant_address">{props.address}</p>
            <ul className="card_restaurant_food">
            {props.food.map((c, i) => {
            return (<li key={i}><p id="top_restaurant_food">{c.name} &bull;</p></li>);
            })}
        </ul>
            <button className="top_restaurant_button">شروع سفارش</button>
            </div>
       );
    }
}

export default RestaurantCard;