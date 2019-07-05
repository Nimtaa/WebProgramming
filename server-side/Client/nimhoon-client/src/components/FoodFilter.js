import React, { Component } from 'react';
import '../assets/global.css';
import '../assets/main.css';
import '../assets/mainList.css';
import CheckBox from './CheckBox';
import { throwStatement } from '@babel/types';


var checkboxes = []
var position = {};
var dict = {};
class  FoodFilter extends Component {
    
    parentFunction = (event) => {
        console.log("name of chbox changed!",event.target.name);
        if(event.target.checked){
            console.log("Iam going to change the state")
            var copy = this.state.checked;
            copy.push(event.target.name);
            dict[event.target.name]= 1;
            this.setState({checked : copy},()=>{
                this.props.RestaurantListFunction(this.state.checked);
            });
        }
        else{
            var index = this.state.checked.indexOf(event.target.name);
            if(index > -1){
                var copy = this.state.checked;
                copy.splice(index,1);
                dict[event.target.name]= 0;
                this.setState({checked:copy},()=>{
                    this.props.RestaurantListFunction(this.state.checked);
                    console.log("removed from checked !", this.state.checked);
                });
                
            }
        }
    }

    
    constructor(props) {
        super(props);
        // this.checkBoxInit()
        this.dictInit();

        this.state = {
            checked : []
        };
        this.parentFunction = this.parentFunction.bind(this);
    }
    // checkBoxInit(){
    //     //initialize the checkboxes
    //     this.props.FoodSetName.map((item, i) => {                   
    //         checkboxes.push (<CheckBox name={item} value={item.id} parentFunction={this.parentFunction} />) ;
    // })
    // }
    dictInit(){
        this.props.FoodSetName.map((item,i)=>{
            dict[item] = 0;
        })
    }
   
    render() {
        console.log("we are in render!");

        console.log("This is our checked state", this.state.checked);
        console.log(dict);
        var checkboxes = new Array();
        this.props.FoodSetName.map((item, i) => { 
            if(dict[item] == 1){
                console.log('Fucking checked!');
                checkboxes.unshift(<CheckBox name={item} propcheck={true} value={item.id} parentFunction={this.parentFunction} />);
            }else{
                console.log('Fucking unchecked!');
                checkboxes.push (<CheckBox name={item} propcheck={false} value={item.id} parentFunction={this.parentFunction} />) ;
            }                     
    })
        console.log("This is Checkboxes:::",checkboxes);
        return (
            <div className= "FoodFilterContainer">
                {checkboxes}
            </div>
        );
    }
}

export default FoodFilter;