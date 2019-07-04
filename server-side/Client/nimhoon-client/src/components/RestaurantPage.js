import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import '../assets/global.css';
import '../assets/main.css';
import '../assets/mainList.css';
import RestaurantCardLarge from './RestaurantCardLarge';
import FoodSetSidebar from './FoodSetSidebar';
import FoodSection from './FoodSection';
import InfoBox from './InfoBox';
import CommentSummary from './CommentSummary';
import CommentCard from './CommentCard';

const axios = require('axios');


class  RestaurantPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
           ListOfFood : [],
           RestaurantData :{},
           FoodComponents :[],
           FoodSet : [],
           RestaurantComments : []
        };
        // this.foodFilterParent = this.foodFilterParent.bind(this);
        // this.RestaurantHandler = this.RestaurantHandler.bind(this);
        // this.FoodFilterHandler = this.FoodFilterHandler.bind(this);
        // this.categoryQueryHandler = this.categoryQueryHandler.bind(this);
        this.FoodListHandler = this.FoodListHandler.bind(this);
        this.CreateFoodSetSidebar = this.CreateFoodSetSidebar.bind(this);
    }
    FoodListHandler(){
       var foodSet = new Set();
       this.state.RestaurantData[0].foods.map((f,i) =>{
            foodSet.add(f.foodSet);
       });
       this.setState({FoodSet:foodSet});
    }
    CreateFoodSetSidebar(){
        this.state.FoodSet.forEach(f => {
            return <li>{f}</li>;
        });
    }
    componentDidMount () {
        var id = this.props.id;
          
        axios.all([
            axios.get('http://127.0.0.1:9000/restaurants/'+id),
            axios.get('http://127.0.0.1:9000/restaurants/'+id+'/comments')
        ]).then(([res, com]) => {
            this.setState({ RestaurantData: res.data , RestaurantComments : com.data},()=>{
                this.FoodListHandler();
            });
          })
          //.then(response => this.setState({ vehicles: response.data }))
          .catch(error => console.log(error));
    }
    render() {
        console.log(this.state.ListOfFood);
        if(this.state.RestaurantData[0] != undefined && this.state.FoodSet!=undefined
            && this.state.RestaurantComments!=undefined) { 

            var address = this.state.RestaurantData[0].address.city + "، " +this.state.RestaurantData[0].address.area +
            "، " +this.state.RestaurantData[0].address.addressLine;

        console.log("FoodSet : ",this.state.FoodSet);
        console.log("Comments :", this.state.RestaurantComments);
        
        
        
        // this.state.RestaurantComments.map((c,i)=>{
        //     comments.push( <CommentCard />);
        // })
        return (    
            // Restaurant Large Card
            <React.Fragment>
            <RestaurantCardLarge name={this.state.RestaurantData[0].name} 
            rate={this.state.RestaurantData[0].averageRate} 
            address={address} 
            food={this.state.RestaurantData[0].categories} />
             {/* This is the sidebar foodset */}
             <div className="food_set_sidebar_restaurant_page_div">
                <ul className="food_set_sidebar_restaurant_page">
                <FoodSetSidebar foodSet={Array.from(this.state.FoodSet)}/>
                </ul>
            </div>

            {/* Here we should put the foods */}
            <div className= "AllRestaurants">
                {Array.from(this.state.FoodSet).map((f) => {
                  return  <FoodSection foodSet={f} 
                     foods = {this.state.RestaurantData[0].foods}/>
                })}
            </div>          

            {/* Here we should put the info box */}
            <InfoBox name={this.state.RestaurantData[0].name} address = {address}
            openingTime = {this.state.RestaurantData[0].openingTime}
            closingTime = {this.state.RestaurantData[0].closingTime} />

            {/* Here we should put the comment summary */}
            <CommentSummary name = {this.state.RestaurantData[0].name}
            rate = {this.state.RestaurantData[0].averageRate}
            quality = {this.state.RestaurantComments[0].quality}
            packaging = {this.state.RestaurantComments[0].packaging}
            delivery = {this.state.RestaurantComments[0].deliveryTime}/>
            
            {/* Here we should put the comments from mellat */}
            {/* <CommentCard comments = {this.state.RestaurantComments} /> */}
           
            <div className="AllComments">
               {
                this.state.RestaurantComments.map((c,i)=>{
                return <CommentCard />;
                })}
            </div>

            </React.Fragment>
       );
        }else{
            return null;
        }
    }
}
export default RestaurantPage;