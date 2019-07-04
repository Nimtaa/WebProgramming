import React, { Component } from 'react';
import '../assets/global.css';
import '../assets/main.css';
import '../assets/mainList.css';
import { FaMapMarkerAlt,FaClock } from 'react-icons/fa';
import FoodCard from './FoodCard';

class  InfoBox extends Component {
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
            <React.Fragment>
           {/* props : name, address, openingTime, closingTime */}
           <div className = "info_box_div">
               
               <div className="info_header">    
                   <h3 style ={h3_style}>اطلاعات رستوران</h3>
               </div>
               <div className="inner_information_box">
                <div >
                    <h4 style={h3_style}>{this.props.name}</h4>    
                    <div>
                    <span>
                    <p style = {address_style}>
                        <FaMapMarkerAlt style={icon_style}/>
                       {this.props.address}
                    </p>
                    </span>
                    </div>
                    <div style = {timing_div_style}>
                    <h5 style = {h5_style}>
                        <FaClock style={icon_style}/>
                        ساعت سفارش گیری</h5>
                        <div className = "infobox_timing_div">
                            <ul className="infobox_timing_ul">
                                <li className = "infobox_timing_li">
                                    شنبه تا پنجشنبه
                                    <span style={time_in_li_style}> &nbsp;{this.props.closingTime}</span>
                                    <span style={time_in_li_style}> &nbsp;تا</span>
                                    <span style={time_in_li_style}>&nbsp;{this.props.openingTime}</span>
                                    <span style={time_in_li_style}>&nbsp;از</span>
                                    </li>

                                <li className = "infobox_timing_li">جمعه
                                <span style={time_in_li_style}> &nbsp;{this.props.closingTime}</span>
                                    <span style={time_in_li_style}> &nbsp;تا</span>
                                    <span style={time_in_li_style}>&nbsp;{this.props.openingTime}</span>
                                    <span style={time_in_li_style}>&nbsp;از</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                </div>
           </div>
           </React.Fragment>
        );
      }
}

export default InfoBox;