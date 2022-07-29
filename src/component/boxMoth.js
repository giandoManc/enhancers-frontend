import React, { useState,useEffect } from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import wind from '../images/wind.png';

import moment from "moment";
import Moment from 'react-moment';
import ImageWeather from './imageWeather'

import BoxWeek from './boxWeek';

import { Slide } from 'react-slideshow-image';


function BoxMonth(props) {
    let list = ((props.week)? props.week : []);
    
    const properties = {
            duration: 5000,
            transitionDuration: 500,
            infinite: true,
            indicators: true,
            arrows: false,
            slidesToShow:1, 
            pauseOnHover: true,
            
          };
           
    return (
            
        <Slide  {...properties}  indicators={true}>
            {list.map((element,index) => (
            <div key={index} className="p-4">
                <div  className={`boxWeather p-3`}>
                    <Row >
                            <Col className="col-lg-4">
                                <div className="FirstColon">
                                    <h4><Moment format="MMM D, MMMM" date={element.dt_txt} /></h4>
                                    <img  src={wind}/>
                                </div>
                            </Col>
                            <Col>                        
                                <div className="SecondColon">
                                    <h4>{parseInt(element?.main.temp)}°</h4>
                                    <p>The high will be {element?.main.temp_min} °C, the low will be {element?.main.temp_max} °C.<br/>
                                    Humidity: {element?.main.humidity}% <br/>
                                    Dew point: {element?.main.humidity}°C

                                    </p>   
                                </div>
                            </Col> 
                    </Row>
                </div> 
            </div>
            ))}
        </Slide>   

    );
  }

  
  export default BoxMonth;
  