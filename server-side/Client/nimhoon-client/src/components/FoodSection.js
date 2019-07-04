import React, { Component } from 'react';
import '../assets/global.css';
import '../assets/main.css';
import '../assets/mainList.css';
import FoodCard from './FoodCard';


class  FoodSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
      
    
      render() {
        const div_style = {
            // float:'right'
        };
        const header_style = {
            // float : 'right',
            fontFamily :'Shabnam',
            textAlign : 'right',
            marginRight : '84px'
        };
        return (
            <React.Fragment>
              {/* For each food set return div consists of food cards from that foodset */}
              <div style={div_style}> 
                <div>
                  <h3 style = {header_style} id = {this.props.foodSet}>{this.props.foodSet}</h3>
                  </div>
                  <div className="OpenRestaurants_copy">
                  {this.props.foods.map((f,i) =>{
                     if(f.foodSet == this.props.foodSet){
                         return <FoodCard  name = {f.name} price = {f.price} description = {f.description}/>
                     }
                  })}
                  </div>
              </div>
            </React.Fragment>   
        );
      }
}

export default FoodSection;