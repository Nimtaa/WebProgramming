import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/Search';
import RestaurantCard from './components/RestaurantCard';
import SearchBox from './components/SearchBox';


function App() {
  return (
  <React.Fragment>
      {/* <Header/>
      <Search/>
      <Footer/> */}
    {/* <RestaurantCard name= {'شاندیز'} address = {'Hafez Ave'} rate= {'4'} food={'foodG'} /> */}
    <SearchBox/>
  </React.Fragment>
  );
}

export default App;
