import React, { Component } from 'react';
import '../assets/global.css';
import '../assets/main.css';
import '../assets/mainList.css';
import CheckBox from './CheckBox';

var FoodSetNames = ['salad','kebab'];
var checkboxes = []
var position = {};
class  FoodFilter extends Component {

    parentFunction = (isChecked,name) => {
        console.log(isChecked,name);
        if(isChecked){
            this.state.checked.push(name);
        }else{
            var index = this.state.checked.indexOf(name);
            if(index > -1)
            this.state.checked.splice(index,1);
        }
        
    }
    constructor(props) {
        super(props);
        
        this.state = {
            checked : []
        };
    }
    render() {
        FoodSetNames.map((item, i) => {                   
            checkboxes.push (<CheckBox name={item} parentFunction={this.parentFunction} />) 
    });
        return (
            <div className= "FoodFilterContainer">
                {checkboxes}
            </div>
        );
    }
}

export default FoodFilter;