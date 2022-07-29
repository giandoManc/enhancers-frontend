import React, { useState } from "react";

import Moment from 'react-moment';
import ImageWeather from './imageWeather'

import { Slide } from 'react-slideshow-image';


function BoxWeek(props) {
    let list = ((props.week)? props.week : []);

    let isDesktop = ((props.isDesktop !== false)? true : false );
    const properties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: false,
        slidesToShow:3, 
        pauseOnHover: true,
        
      };    
      console.log(props);
      if(!isDesktop){
        properties.slidesToShow = 2;
        properties.indicators = false;
      }
    return (       
            <div className="slide-container">
                <Slide  {...properties}  >
                {list.map((element,index) => (
                    <div key={index} className="each-slide">
                        <div className="boxWeather">
                            <div className="Table">
                                <div className="CenterDiv">
                                    <h4><Moment format="dddd" date={element.dt_txt} /></h4>
                                    <h5>{parseInt(element?.main.temp)}°</h5>
                                    <ImageWeather icon={element.weather[0]?.id} />
                                </div>
                            </div>
                        </div> 
                    </div>
                ))} 
                </Slide>
            </div>            
    );
  }

  
  export default BoxWeek;
  