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
    this.state = {query: true};
  }

  render(){
   
    // if(this.state.query){
      return (
        // <React.Fragment>
        // <div className="ListApp">  
        //     <Header/>
        //     <RestaurantList/>
        //     <Footer/>
        // </div>
        // </React.Fragment>
        // <RestaurantList/>
        

        <React.Fragment>
          {/* <FoodCard name={'قیمه'} price= {'1200'} description={'خوب درست شده'}/>  */}
          <RestaurantPage id={'5d1b64b6e816db12f85c59c0'}/>
        </React.Fragment>
        );    
  }
}

export default App;
