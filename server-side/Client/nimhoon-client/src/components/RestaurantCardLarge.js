import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../assets/react-tabs.css';
import '../assets/global.css';
import '../assets/main.css';
import '../assets/mainList.css';
import RestaurantCard from './RestaurantCard';
import Stars from './Stars';
import AnchorLink from 'react-anchor-link-smooth-scroll'


const axios = require('axios');


class  RestaurantCardLarge extends Component {
    
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
        console.log("Restaurant name : ",   this.props.name);
        return (
            <React.Fragment>
            <div className="RestaurantCardLarge_div">
                <img className="RestaurantCardLarge_logo"    src = {'/mocks/Restaurants/' + this.props.name + '.jpeg'}/>
                <div id="RestaurantCardLarge_name">
            <h2 >{this.props.name}</h2>
            </div>
            {/* here put the stars ! */}
            <div className="orange_rating_large">{this.props.rate}
            <ul className = "stars_list">
                <Stars rate = {this.props.rate} />
            </ul>
            </div>
            <span id = "RestaurantCardLarge_food_span">
                <ul id = "RestaurantCardLarge_food">
                    {this.props.food.map((c, i) => {
                    return (<li key={i}><p>{c.name} &bull;</p></li>);
                    })}
                </ul>
            </span>
            <p id="RestaurantCardLarge_address">{this.props.address}</p>     
            <div className = "horizontal_navigation_CardLarge">
            <ul className="tag_list_restaurantCardLarge">
                <li><AnchorLink className="link_restaurant_large_card" href="#comments">نظرات کاربران &nbsp;&nbsp;</AnchorLink></li>
                <li><AnchorLink className="link_restaurant_large_card" href="#information">اطلاعات رستوران&nbsp;&nbsp;</AnchorLink></li>
                <li><AnchorLink className="link_restaurant_large_card" href="#menu">منوی رستوران &nbsp;&nbsp;</AnchorLink></li>
            </ul>
            </div>
            </div>
           </React.Fragment>
       );
    }
}

export default RestaurantCardLarge;