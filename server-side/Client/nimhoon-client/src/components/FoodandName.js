import React, { Component } from 'react';
import '../assets/global.css';
import '../assets/main.css';
import '../assets/mainList.css';
import { booleanLiteral } from '@babel/types';

import FoodCard from '../components/FoodCard';

class  FoodandName extends Component {

    

    constructor(props) {
        super(props);
        this.state = {
        
        };
    }
      
    
      render() {
        return (
            <React.Fragment>
            <div className="food_and_name_div">
                <h2>{this.props.FoodSetName}</h2>
           </div>
           <div className="food_card_grid">
           {this.props.FoodSetCard}
           </div>
           </React.Fragment>
        );
      }
}

export default FoodandName;