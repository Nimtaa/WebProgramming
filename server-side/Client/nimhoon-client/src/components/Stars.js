import React, { Component } from 'react';
import '../assets/global.css';
import '../assets/main.css';
import 'font-awesome/css/font-awesome.min.css';

function Stars(props) {
    var star_array = new Array();
    var natural_rate = Math.floor(props.rate);
    for (var i=0;i<natural_rate;i++){
        // create checked star
        var span = <span  className='fa fa-star checked'>&nbsp;</span>
        star_array.unshift(span);
    }
    if(props.rate - natural_rate){
        var span = <span className = 'fa fa-star-half-full halfchecked'>&nbsp;</span>
        star_array.unshift(span);
    }
    var unchecked = 5 - Math.ceil(props.rate);
    for(var i=0;i<unchecked;i++){
        //create unchecked star
        var span =  <span className = 'fa fa-star-o unchecked' >&nbsp;</span>
        star_array.unshift(span);
    }
   
    return (
        star_array.map((c, i) => {
            return (<li key={i}>{c}</li>);
            })
   );
}

export default Stars;