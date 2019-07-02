import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import '../assets/global.css';
import '../assets/main.css';
import '../assets/mainList.css';
import RestaurantCard from './RestaurantCard';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import FoodCard from '../components/FoodCard';
import { throwStatement } from '@babel/types';
const axios = require('axios');

class  RestaurantPage extends Component {
    constructor(props) {
        super(props);
        this.FoodSet = new Set();
        this.state = {
           ListOfFood : [],
           RestaurantData :{},
           FoodComponents :[],
           FoodStruct : []
        };
        // this.foodFilterParent = this.foodFilterParent.bind(this);
        // this.RestaurantHandler = this.RestaurantHandler.bind(this);
        // this.FoodFilterHandler = this.FoodFilterHandler.bind(this);
        // this.categoryQueryHandler = this.categoryQueryHandler.bind(this);
        this.FoodListHandler = this.FoodListHandler.bind(this);
    }
    FoodListHandler(){
        this.state.ListOfFood.map((item,i) =>{
            this.FoodSet.add(item.foodSet);
        });
        // this.state.ListOfFood.map((item,i) =>{
        //     this.setState({
        //         FoodStruct : [this.state.FoodStruct, ]
        //     });
        // })
        // this.state.ListOfFood.map((item, i) => {
        //     this.setState({
        //     FoodComponents : [this.state.FoodComponents,<FoodCard name ={item.name} price={item.price}
        //             description = {item.description}/>]
        //     })  ;
        // });
    }
    componentDidMount(){ 
        var id = this.props.id;
        axios.get('http://127.0.0.1:9000/restaurants/'+id)
        .then((response) =>
            this.setState({ListOfFood:[this.state.ListOfFood,response.data.foods]})
        ).then(()=>{
            console.log(this.state.ListOfFood)
            this.FoodListHandler();
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
    }
    render() {
        console.log(this.state.ListOfFood)
        return (
        <div>
           {this.FoodSet}
        </div>
       );
    }
}
export default RestaurantPage;