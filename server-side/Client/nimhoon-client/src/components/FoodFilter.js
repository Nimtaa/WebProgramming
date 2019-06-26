import React, { Component } from 'react';
import '../assets/global.css';
import '../assets/main.css';
import '../assets/mainList.css';
import CheckBox from './CheckBox';

var FoodSetNames = ['salad','kebab'];

var checkboxes = []
class  FoodFilter extends Component {

    parentFunction = (isChecked) => {
        console.log(isChecked);
    }
    constructor(props) {
        
        super(props);
        this.state = {
        };
      }
     
      render() {
        FoodSetNames.map((item, i) => {                   
            checkboxes.push (<CheckBox name={item} parentFunction={this.parentFunction} />) 
         });
        //   checkboxes.sort(function(a,b){
        //     return a.props.isChecked - b.props.isChecked;
        //   });
        //   checkboxes.forEach(function(item,index){
        //       console.log(item.props.isChecked);
        //   })
        return (
            <div className= "FoodFilterContainer">
                {checkboxes}
            </div>
        );
    }
}

export default FoodFilter;