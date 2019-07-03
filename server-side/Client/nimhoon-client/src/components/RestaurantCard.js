import React, { Component } from 'react';
import '../assets/global.css';
import '../assets/main.css';
import Stars from './Stars';


let foodCategories =[];
function RestaurantCard(props) {
    if(!props.close){
   return (
        <div className="top_restaurant_div">
            <img className="top_restaurant_logo" 
            src = {'/mocks/Restaurants/' + props.name + '.jpeg'}/>
        <div>
        <h2  className="top_restaurant_name">{props.name}</h2>
        <span id="top_restaurant_rateSpan">
        <span className="orange_rating">{props.rate}</span>   
            <ul className = "stars_list">
                <Stars rate = {props.rate} />
            </ul>
        </span>
        </div>
        <span id = "top_restaurant_category">
        <ul className="card_restaurant_food">
            {props.food.map((c, i) => {
            return (<li key={i}><p id="top_restaurant_food">{c.name} &bull; </p></li>);
            })}
        </ul>
        </span>
        <p id="top_restaurant_address">{props.address}</p>
        <button className="top_restaurant_button">شروع سفارش</button>
        </div>
   );
    }
    else{
        return (
            <div className="top_restaurant_div_close">
          <img className="top_restaurant_logo" 
            src = {'/mocks/Restaurants/' + props.name + '.jpeg'}/>
        <div>
        <h2 className="top_restaurant_name">{props.name}</h2>

        <span id="top_restaurant_rateSpan">
        <span className="orange_rating">{props.rate}</span>   
            <ul className = "stars_list">
                <Stars rate = {props.rate} />
            </ul>
        </span>
        </div>
        <span id = "top_restaurant_category">
        <ul className="card_restaurant_food">
            {props.food.map((c, i) => {
            return (<li key={i}><p id="top_restaurant_food">{c.name} &bull;</p></li>);
            })}
        </ul>
        </span>
        <p id="top_restaurant_address">{props.address}</p>
        <button className="top_restaurant_button">شروع سفارش</button>
            </div>
       );
    }
}

export default RestaurantCard;