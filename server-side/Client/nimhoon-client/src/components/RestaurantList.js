import React, { Component } from 'react';
import '../assets/global.css';
import '../assets/main.css';
import '../assets/mainList.css';
import RestaurantCard from './RestaurantCard';
import SearchBox from './SearchBox';
import FoodFilter from './FoodFilter';

const axios = require('axios');


var ClosedRestaurants = [];
var FoodFilterArray = [];
class  RestaurantList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            ListOfRestaurants : [],
            numberOfResults : 0,
            RestaurantComponents : [],
            ClosedRestaurantsComponents:[],
            query : 'area=',
            categoryQuery: '',
            foodSet :[],
            FoodFilter :null
        };
        this.foodFilterParent = this.foodFilterParent.bind(this);
        this.RestaurantHandler = this.RestaurantHandler.bind(this);
        this.FoodFilterHandler = this.FoodFilterHandler.bind(this);
    }
  
    //Listen on foodFilter change state to update filter
    foodFilterParent(selectedFilters){
        //here I have  selected filters
        selectedFilters.map((item,i)=>{
          this.setState({categoryQuery : this.state.categoryQuery + '&category='+item})  ;
        });
        console.log(this.state.categoryQuery);
    }
    isOpen(openingTime, closingTime){
        var h = new Date().getHours();
        var m = new Date().getMinutes();
        var currentTime = "" + h + m ;
        if(currentTime.length <4) currentTime = currentTime + '0';
        if((currentTime>openingTime) & (currentTime<closingTime)){
            return true;
        }else{
            return false;
        }
    }
    RestaurantHandler(){
        console.log("this is res handle");
        this.state.ListOfRestaurants.map((item, i) => {
            if(this.isOpen(item.openingTime,item.closingTime)){
                   // this.setState({ numberOfResults: this.state.numberOfResults+1})
            this.setState({
                RestaurantComponents : [this.state.RestaurantComponents,<RestaurantCard name ={item.name} address={item.address.addressLine}
                    rate = {item.rate} food = {item.food} close={false}/>],
                    numberOfResults : this.state.numberOfResults + 1
            })
                }
            else
            this.setState({
                ClosedRestaurantsComponents : [this.state.ClosedRestaurantsComponents,<RestaurantCard name ={item.name} address={item.address.addressLine}
                    rate = {item.rate} food = {item.food} close={true}/>]
            })
            });
    }
    FoodFilterHandler(){
        console.log(this.state.foodSet);
        this.setState({FoodFilter : <FoodFilter FoodSetName={this.state.foodSet}
             RestaurantListFunction = {this.foodFilterParent}/>})
        
    }

    componentDidMount(){ 
        axios.get('http://127.0.0.1:9000/restaurants?area=k')
        .then((response) =>
            this.setState({ListOfRestaurants: response.data})
        ).then(()=>{
            this.RestaurantHandler();
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });

        axios.get('http://127.0.0.1:9000/foods')
        .then((response) =>
            this.setState({foodSet: response.data})
        ).then(()=>{
            this.FoodFilterHandler();
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
        console.log("this is render")
        // if(this.state.RestaurantComponents.length==0)
        //     return null;
            // this.state.ListOfRestaurants.map((item, i) => {
            //     if(this.isOpen(item.openingTime,item.closingTime)){
            //     RestaurantComponents.push(<RestaurantCard name ={item.name} address={item.address.addressLine}
            //             rate = {item.rate} food = {item.food} close={false}/>);
            //             this.setState({ numberOfResults: this.state.numberOfResults+1})
            //         }
            //     else
            //     RestaurantComponents.push(<RestaurantCard name ={item.name} address={item.address.addressLine}
            //         rate = {item.rate} food = {item.food} close={true}/>);
            //     });
            console.log(this.state.ClosedRestaurantsComponents);
            console.log(this.state.RestaurantComponents);
         return (
             <div>
                 <div className="SearchBoxContainer">
                <SearchBox/>
                </div>
                <div >
                   {/* food filter comes here */}
                   {this.state.FoodFilter}
                </div>
             
            <div className = "Counter">
                
             {this.state.numberOfResults} 
            </div>  
            <div className= "ListOfRestaurants">
            {this.state.RestaurantComponents}
            </div>
            <div className="ClosedRestaurants">
            <h4 className="ClosedTitle">رستوران‌های بسته</h4>
            <div className="ClosedRestaurantsContainer">
                {this.state.ClosedRestaurantsComponents}
                </div>
                </div>
                </div>
           );
    }
}

export default RestaurantList;