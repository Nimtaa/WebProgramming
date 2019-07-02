import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../assets/react-tabs.css';
import '../assets/global.css';
import '../assets/main.css';
import '../assets/mainList.css';
import RestaurantCard from './RestaurantCard';
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
        return (
            <div className="RestaurantCardLarge_div">
                <img className="RestaurantCardLarge_logo"/>
            <h2>{this.props.name}</h2>
            <span id="top_restaurant_rateSpan"></span>
            {/* <!-- <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked "></span>
            <span class="fa fa-star-half-full halfchecked"></span>
            <span class="fa fa-star-o unchecked"></span>--> */}
            <span className="orange_rating">{this.props.rate}</span>
            <p id="RestaurantCardLarge_food">{this.props.food}</p>
            <p id="RestaurantCardLarge_address">{this.props.address}</p>
            <Tabs>
                <TabList>
                    <Tab><AnchorLink className="link_restaurant_large_card" href="#comments">نظرات کاربران</AnchorLink></Tab> 
                    <Tab><AnchorLink className="link_restaurant_large_card" href="#information">اطلاعات رستوران</AnchorLink></Tab>
                    <Tab><AnchorLink className="link_restaurant_large_card" href="#menu">منوی رستوران</AnchorLink></Tab> 
                </TabList>
            </Tabs>
            </div>

       );
    }
}

export default RestaurantCardLarge;