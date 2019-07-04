import React, { Component } from 'react';
import '../assets/global.css';
import '../assets/main.css';
import '../assets/mainList.css';
import {Line} from 'rc-progress';
import Stars from './Stars';

class  CommentSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }      

      render() {
       
        const h3_style = {
            // float : 'right',
            fontFamily :'Shabnam',
            textAlign : 'right',
            // marginRight : '84px'
        };
      
        const desc_style = {
            fontFamily : 'Shabnam',
            fontSize : '0.75rem',
            fontWeight : '600',
            color : '#9c9c9c'
        }
        const rate_number_style = {
            margin : 'auto'
        }
        const rate_number_2_style = {
            color : '#ffc300'
            // marginRight : 'auto',
            // marginLeft : 'auto'

        }
        const h4_style = {
            fontSize : '0.8rem',
            color : '#9c9c9c'
        }
        return (
            <React.Fragment>
           {/* props : name, rate, quality*/}
           <div className = "info_box_div">
               <div className="info_header">    
                   <h3 style ={h3_style}> نظرات کاربران در مورد رستوران {this.props.name}</h3> 
               </div>
               <div className="inner_comment_summary_box">
                    <div>
                        <p style={desc_style}>شما هم می‌توانید بعد از سفارش از این رستوران، نظر خود را درباره‌ی این رستوران ثبت کنید.</p>    
                        <div>
                            <div className="orange_rating_large_comment_summary">
                                <ul className = "stars_list_comment_summary">
                                    <Stars rate = {this.props.rate} />
                                </ul>
                                <h5 style = {rate_number_style}>{this.props.rate}</h5>
                            </div>
                        </div>
                        {/* Progress bar  */}
                        <div className="progress_comment_summary_div">
                            <h4 style={h4_style}>کیفیت غذا</h4>
                            
                            <div className="test_out">
                                <div className="test_in">
                                    <h5 style = {rate_number_2_style}>{this.props.quality}</h5>
                                </div>
                                    <div className="progress_rc_div">
                                    <Line percent={(this.props.quality)/5 * 100} strokeWidth = "4" trailWidth = "4" strokeColor="#ffc300" />
                                    </div>
                                </div>
                        </div>
                        <div className="progress_comment_summary_line"></div>
                        <div className="progress_comment_summary_div">
                            <h4 style={h4_style}>کیفیت بسته‌بندی</h4>
                            <div className="test_out">
                                <div className="test_in">
                                    <h5 style = {rate_number_2_style}>{this.props.packaging}</h5>
                                </div>
                                    <div className="progress_rc_div">
                                    <Line percent={(this.props.packaging/5)* 100} strokeWidth = "4" trailWidth = "4" strokeColor="#ffc300" />
                                    </div>
                                </div>
                        </div>
                        <div className="progress_comment_summary_line"></div>
                        <div className="progress_comment_summary_div">
                            <h4 style={h4_style}>سرعت ارسال پیک</h4>
                            <div className="test_out">
                                <div className="test_in">
                                    <h5 style = {rate_number_2_style}>{this.props.delivery}</h5>
                                </div>
                                    <div className="progress_rc_div">
                                    <Line percent={(this.props.delivery/5)*100} strokeWidth = "4" trailWidth = "4" strokeColor="#ffc300" />
                                    </div>
                                </div>
                        </div>
                        <div className="progress_comment_summary_line"></div>
                        <div className="progress_comment_summary_div">
                            <h4 style={h4_style}>برخورد پیک</h4>
                            <div className="test_out">
                                <div className="test_in">
                                    <h5 style = {rate_number_2_style}>{this.props.delivery}</h5>
                                </div>
                                    <div className="progress_rc_div">
                                    <Line percent={(this.props.delivery/5)*100} strokeWidth = "4" trailWidth = "4" strokeColor="#ffc300" />
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
           </React.Fragment>
        );
      }
}

export default CommentSummary;