import React, { useState,useEffect } from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import wind from '../images/wind.png';

import moment from "moment";
import Moment from 'react-moment';
import ImageWeather from './imageWeather'

import BoxWeek from './boxWeek';
import BoxMonth from './boxMoth';

import { Slide } from 'react-slideshow-image';


function BoxOtherDay(props) {
    const i = 3;
    const cityStore = props.city;
    let list = ((cityStore.list)? listDay(cityStore.list) : []);
    const [listenView, setlistenView] = useState('week');
    const [visible, setvisible] = useState(false);
    const properties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: false,
        slidesToShow:3, 
        pauseOnHover: true,
        
      };
        setTimeout(() => {
            setvisible(true);
            
        },400)
    const properties2 = {
            duration: 5000,
            transitionDuration: 500,
            infinite: true,
            indicators: true,
            arrows: false,
            slidesToShow:1, 
            pauseOnHover: true,
            
          };
            setTimeout(() => {
                setvisible(true);
                
            },300)
    return (
        <div className={`BoxOtherDay ${visible ? "" : "d-none"}`}>
            <ul>
                <li onClick={() => { setlistenView('week')}} className={`clickButton ${listenView=='week' ? "active" : ""}`}>This week</li>
                <li onClick={() => { setlistenView('month')}} className={`clickButton ${listenView=='month' ? "active" : ""}`}>This month</li>
            </ul>
            <div className={`BoxWeek ${listenView=='week' ? "active" : ""}`}>
                <BoxWeek week={list}/>
            
            </div> 
            <div className={`BoxMonth ${listenView=='month' ? "active" : ""}`}>
                <BoxMonth week={list}/>
            </div> 

        </div>
    );
  }

  const listDay = (listInput) => {
    let list = listInput;
    let listOutput = [];
    let i =0;
    for (let index = 0; index-1 < list.length; index++) {
        const element = list[index];
        if((moment(list[index+1]?.dt_txt).format('YYYY-MM-DD') != moment(element?.dt_txt).format('YYYY-MM-DD') && moment().format('YYYY-MM-DD') != moment(element?.dt_txt).format('YYYY-MM-DD') )) {
            listOutput.push(element);
            i++;
        }
        
    }
    return listOutput;
  }
  
  export default BoxOtherDay;
  