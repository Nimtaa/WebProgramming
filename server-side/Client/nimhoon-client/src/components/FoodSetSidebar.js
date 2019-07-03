import React, { Component } from 'react';
import '../assets/global.css';
import '../assets/main.css';
import '../assets/mainList.css';


class  FoodSetSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        };
    }
      
    
      render() {
        const style = {
            textDecoration : 'none',
            color : '#9c9c9c'
        };
        
        return (
            <React.Fragment>
                {this.props.foodSet.map((f,i) =>{
                    return <a  style = {style} href= {"#"+ f}> <li key={i}>{f}</li></a>
                })}
            </React.Fragment>   
        );
      }
}

export default FoodSetSidebar;