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



class App extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {query: true};
  }

  render(){
   
    // if(this.state.query){
      return (
        <RestaurantList/>
        // <React.Fragment>
        //     <Header/>
        //     <Search/>
        //     <Footer/>
        //   {/* <RestaurantCard name= {'شاندیز'} address = {'Hafez Ave'} rate= {'4'} food={'foodG'} /> */}
        //   {/* <SearchBox/> */}
        // </React.Fragment>
        );
    // }else{
    //   return (
    //      <SearchBox/> 
    //   );
    // }
    
  }
}

export default App;
