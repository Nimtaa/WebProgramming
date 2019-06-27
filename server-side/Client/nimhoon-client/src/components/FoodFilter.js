import React, { Component } from 'react';
import '../assets/global.css';
import '../assets/main.css';
import '../assets/mainList.css';
import CheckBox from './CheckBox';
import { throwStatement } from '@babel/types';


var checkboxes = []
var position = {};
class  FoodFilter extends Component {
    
    parentFunction = (isChecked,name) => {
        console.log(isChecked,name);
        
        if(isChecked){
            console.log("Iam going to change the state")
            this.setState({checked : [this.state.checked,name]});
            this.props.RestaurantListFunction(this.state.checked);
        }
        else{
            var index = this.state.checked.indexOf(name);
            if(index > -1){
                var copy = this.state.checked;
                copy.splice(index,1);
                this.setState({checked:copy});
                this.props.RestaurantListFunction(this.state.checked);
            }
        }
    }

    
    constructor(props) {
        super(props);
        this.checkBoxInit()
        this.state = {
            checked : []
        };
    }
    checkBoxInit(){
        //initialize the checkboxes
        this.props.FoodSetName.map((item, i) => {                   
            checkboxes.push (<CheckBox name={item} parentFunction={this.parentFunction} />) ;
    })
    }
   
    render() {
        // checkboxes = []
        return (
            <div className= "FoodFilterContainer">
                {checkboxes}
            </div>
        );
    }
}

export default FoodFilter;