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
            categoryQuery: "",
            categorySet :[],
            FoodFilter :null
        };
        this.foodFilterParent = this.foodFilterParent.bind(this);
        this.RestaurantHandler = this.RestaurantHandler.bind(this);
        this.FoodFilterHandler = this.FoodFilterHandler.bind(this);
        this.categoryQueryHandler = this.categoryQueryHandler.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
    }
  
    //Listen on foodFilter change state to update filter
    foodFilterParent(selectedFilters){
        console.log("Selected Filters: ",selectedFilters);
        //here I have  selected filters
        selectedFilters.map((item,i)=>{
            var copyQuery = this.state.categoryQuery;
            if(!copyQuery.includes(item)){
                console.log("into the if")
                copyQuery = copyQuery + '&category='+item;
                console.log("Copy Query1: ",copyQuery);
            }
            console.log("Copy Query2: ",copyQuery);
            this.setState({categoryQuery : copyQuery},function(data){
                this.categoryQueryHandler();
            }); 
        });
    }
    categoryQueryHandler(){
        console.log("This is running.!")
        axios.get('http://127.0.0.1:9000/restaurants?area=سعادت'+this.state.categoryQuery)
        .then((response) =>
                this.setState({ListOfRestaurants: response.data},function(data){
                    this.RestaurantHandler();
                }
                ))
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
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
    clickHandler(event){
        this.props.fatherHandler(event);
    }
    RestaurantHandler(){
        console.log("this is res handle");
        this.state.ListOfRestaurants.map((item, i) => {
            console.log("Hey categories : ", item.categories);
            if(this.isOpen(item.openingTime,item.closingTime)){
                   // this.setState({ numberOfResults: this.state.numberOfResults+1})
            this.setState({
                RestaurantComponents : [this.state.RestaurantComponents,<RestaurantCard name ={item.name} address={item.address.addressLine}
                    rate = {item.averageRate} food = {item.categories} close={false} id={item._id}
                    clickHandler ={this.clickHandler}/>],
                    numberOfResults : this.state.numberOfResults + 1
            })
                }
            else
            this.setState({
                ClosedRestaurantsComponents : [this.state.ClosedRestaurantsComponents,<RestaurantCard name ={item.name} address={item.address.addressLine}
                    rate = {item.averageRate} food = {item.categories} close={true} id={item._id}
                    clickHandler ={this.clickHandler}/>]
            })
            });
    }
    FoodFilterHandler(){
        console.log("Category Set :", this.state.categorySet);
        this.setState({FoodFilter : <FoodFilter FoodSetName={this.state.categorySet}
             RestaurantListFunction = {this.foodFilterParent}/>})
    }
    
    componentDidMount(){ 
        axios.get('http://127.0.0.1:9000/restaurants?area=سعادت')
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
    }
    
    componentWillUpdate(){
        console.log("this is co willl updated ", this.state.categoryQuery);
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
            console.log("Rest",this.state.ListOfRestaurants);
            let closedTitle ;
            if(this.state.ClosedRestaurantsComponents.length){
                closedTitle = <p className="ClosedTitle">رستوران‌های بسته</p>
            }else{
                closedTitle = null;
            }
         return (
            <React.Fragment>
                <div className="restaurant_search_banner"/>
                <div className="SearchBoxContainer">
                    <div className = "Counter">رستوران فعال {this.state.numberOfResults} </div>  
                    <div className="SearchBox_div">
                    <SearchBox/>
                    </div>
                </div> 
                {/* <div className="BodyContainer"> */}
                    <fieldset className="SideBar">
                        {/* food filter comes here */}
                        <span>
                        {this.state.FoodFilter}
                        </span>
                    </fieldset>
                <div className="AllRestaurants">
                    <div className= "OpenRestaurants">
                            {this.state.RestaurantComponents}
                    </div>
                    {closedTitle}
                    <div className="ClosedRestaurants">
                            {this.state.ClosedRestaurantsComponents}
                        </div>
                    </div>
                
            </React.Fragment> 
           );
    }
}

export default RestaurantList;