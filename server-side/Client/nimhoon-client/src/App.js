import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/Search';
import RestaurantCard from './components/RestaurantCard';
import SearchBox from './components/SearchBox';
import FoodFilter from './components/FoodFilter';
import RestaurantList from './components/RestaurantList';
import RestaurantCardLarge from './components/RestaurantCardLarge';
import FoodCard from './components/FoodCard';
import RestaurantPage from './components/RestaurantPage';
import Stars from './components/Stars';


class App extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      query: true,
      renderRestaurantPage : false,
      restaurantClickedId : '',
      area : ''
    };

    this.RestaurantPageHandler = this.RestaurantPageHandler.bind(this);
    this.RestaurantListHandler = this.RestaurantListHandler.bind(this);
  }
  RestaurantPageHandler (event){
    if(event.target.id!=undefined)
    this.setState({renderRestaurantPage : true , restaurantClickedId : event.target.id});
  }
  RestaurantListHandler(event){
    if(event.target.id!=undefined)
    console.log("my id: ",event.target.id);
  }
  render(){
   
    // if(this.state.query){
      console.log(this.state.renderRestaurantPage);
      console.log("ID: ", this.state.restaurantClickedId);
      if(this.state.renderRestaurantPage==true && this.state.restaurantClickedId!=null){
        return ( <RestaurantPage id={this.state.restaurantClickedId}/>);
      }else{
        return ( 

          // <React.Fragment>
          // <div className="ListApp">  
          //     <Header/>
          //     <RestaurantList/>
          //     <Footer/>
          // </div>
          // </React.Fragment>
          // <React.Fragment>
          //   <Header/>
          //   <Search fatherHandler = {this.RestaurantListHandler}/>
          //   <Footer/>
          // </React.Fragment>
          
        
          <RestaurantList fatherHandler = {this.RestaurantPageHandler}/>
      
          );    
      }
    
  }
}

export default App;
