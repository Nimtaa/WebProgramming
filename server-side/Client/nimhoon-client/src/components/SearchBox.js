import React, { Component } from 'react';
import '../assets/global.css';
import '../assets/main.css';
import '../assets/mainList.css';



class  SearchBox extends Component {

    constructor(props) {
        super(props);
        this.state = {title: "جستجوی رستوران در این محدوده"};
      }
    

    handleChange(event){
        this.setState({
            title : event.value
        });
    }
    clickHandler(event){
        this.setState({
            title : ""
        });
    }
   render(){
       return(
       <div className="SearchBox">
            <input className="SearchBoxInput" 
            type="text" name="mainList_neighbourSearch" 
            value={this.state.title}
            onChange={this.handleChange.bind(this)}
            onClick={this.clickHandler.bind(this)}
            />
        </div>
       );
   }
}

export default SearchBox;