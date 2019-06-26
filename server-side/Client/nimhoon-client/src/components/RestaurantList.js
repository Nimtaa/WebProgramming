import React, { Component } from 'react';
import '../assets/global.css';
import '../assets/main.css';
import '../assets/mainList.css';
import RestaurantCard from './RestaurantCard';
import SearchBox from './SearchBox';
import FoodFilter from './FoodFilter';

const axios = require('axios');

var RestaurantComponents = [];
class  RestaurantList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            ListOfRestaurants : [],
            ClosedRestaurants : [],
            numberOfResults : 0
        };
    }
    //Listen on foodFilter change state to update filter
    foodFilterParent(){

    }

    isOpen(openingTime, closingTime){

        var h = new Date().getHours();
        var m = new Date().getMinutes();
        var currentTime = "" + h + m ;
        if((currentTime>openingTime) & (currentTime<closingTime)){
            return true;
        }else{
            return false;
        }
    }

    componentDidMount(){ 
        axios.get('http://127.0.0.1:9000/restaurants?area=k')
        .then((response) => 
            this.setState({ListOfRestaurants: response.data})
        )
        
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
    }
    render() {
        if(this.state.ListOfRestaurants.length==0)
            return null;
            this.state.ListOfRestaurants.map((item, i) => {
                if(this.isOpen(item.openingTime,item.closingTime)){
                RestaurantComponents.push(<RestaurantCard name ={item.name} address={item.address}
                        rate = {item.rate} food = {item.food} close={false}/>);
                    this.setState({ numberOfResults: this.state.numberOfResults+1})
                    }
                else
                RestaurantComponents.push(<RestaurantCard name ={item.name} address={item.address.addressLine}
                    rate = {item.rate} food = {item.food} close={true}/>);
                });
            console.log(this.state.ClosedRestaurants);
            console.log(RestaurantComponents);
         return (
             <React.Fragment>
                 <div className="SearchBoxContainer">
                <SearchBox/>
                </div>
                {/* <div>   
                    <FoodFilter  = {}/>
                </div> */}
             <div>
            <div className = "Counter">
            
             {this.state.numberOfResults} 
             
            </div>  
            <div className= "ListOfRestaurants">
            {RestaurantComponents}
            </div>
            </div>
            <div className="ClosedRestaurants">
            <h4 className="ClosedTitle">رستوران‌های بسته</h4>
                {this.ClosedRestaurants}
                </div>
            </React.Fragment>
           );
    }
}

export default RestaurantList;