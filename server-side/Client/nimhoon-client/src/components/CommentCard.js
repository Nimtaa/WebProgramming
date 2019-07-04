import React, { Component } from 'react';
import '../assets/global.css';
import '../assets/main.css';
import '../assets/mainList.css';
import { FaQuoteRight } from 'react-icons/fa';
import FoodCard from './FoodCard';
import Stars from './Stars';

class  CommentCatd extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }      

      render() {
        
        const quote_icon_style = {
            color : '#d40263',
            size : '1.7rem'
        }
        const rate_number_style = {
            fontWeight : '600',
            fontSize : '1.35rem'
        }
        const h3_style = {
            // float : 'right',
            fontFamily :'Shabnam',
            textAlign : 'right',
            // marginRight : '84px'
        };
        const text_comment_style  = { 
            marginRight:'1.5%',
            fontFamily : 'Shabnam'
        }
        
        const time_style = {
            marginTop : '4%',
            fontFamily : 'Shabnam',
            width : '50%',
            fontSize : '0.7rem'
        }
        const report_link_style = {
            fontFamily : 'Shabnam',
            color : '#9c9c9c',
            fontSize : '0.8rem',
            marginTop : '64%'
        }
        const author_style= {
            fontFamily : 'Shabnam',
            fontSize : '1rem'
        }
        return (
            <div>
           {/* props : name, text, rate,  */}
           <div className = "info_box_div">
              
                <div className="orange_rating_large_commentCard">
            <ul className = "stars_list_commentCatd">
                <Stars rate = {this.props.rate} />
            </ul>
            <span style={rate_number_style}>{this.props.rate}</span>
            <div style={report_link_style}><a>گزارش</a></div>
            </div>
               <div className="info_header">
               <h3 style={author_style}>{this.props.author}</h3>
               <div className="text_comment_div">
                   <FaQuoteRight style = {quote_icon_style}/>
                    <span style = {text_comment_style}>{this.props.text}</span>
                   </div>
               <div style = {time_style}><h4 >{new Date().getDay() - new Date(this.props.date).getDay()}روز قبل</h4></div>
               </div>
               <div className="inner_information_box">
                </div>
           </div>
          </div>
        );
      }
}

export default CommentCatd;