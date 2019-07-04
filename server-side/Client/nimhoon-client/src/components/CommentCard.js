import React, { Component } from 'react';
import '../assets/global.css';
import '../assets/main.css';
import '../assets/mainList.css';
import { FaMapMarkerAlt,FaClock } from 'react-icons/fa';
import FoodCard from './FoodCard';
import Stars from './Stars';

class  CommentCatd extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }      

      render() {
        const address_style = {
            // float:'right'
            fontFamily : 'Shabnam',
            fontSize : '0.9rem'
        };
        const h3_style = {
            // float : 'right',
            fontFamily :'Shabnam',
            textAlign : 'right',
            // marginRight : '84px'
        };
        const h5_style = {
            // float : 'right',
            fontSize : '0.8rem',
            fontFamily : 'Shabnam', 
            textAlign : 'right'
            // marginRight : '84px'
        };
        
        const timing_div_style = {
            marginTop : '31px'
        }
        const icon_style = {
          marginLeft : '6px'
        }
        const time_in_li_style = {
            float : 'left'
        }
        return (
            <div>
           {/* props : name, address, openingTime, closingTime */}
           <div className = "info_box_div">
                <h3>محمد</h3>
                <div className="orange_rating_large_comment_summary">
                                <ul className = "stars_list">
                                    <Stars rate = {4} />
                                </ul>
                                <h5>{4}</h5>
                            </div>
               <div className="info_header">    
                   <h3 style ={h3_style}>محمد </h3>
               </div>
               <div className="inner_information_box">
                <div >
                    <h4 style={h3_style}>{this.props.name}</h4>    
                </div>
                </div>
           </div>
          </div>
        );
      }
}

export default CommentCatd;