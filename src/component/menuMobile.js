import home from '../images/home_mobile.png'; 
import location from '../images/location_mobile.png'; 
import search from '../images/search_mobile.png'; 


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useDispatch,useSelector } from 'react-redux';

import {UpdateLocation,UpdateCitySelect,ClickSearchMobile} from '../actions'
import { useState } from 'react';

function MenuMobile() {
  const dispatch = useDispatch();
  const [root,setRoot] = useState('home');
  const clickSearchMobile = useSelector(state=>state.clickSearchMobile);
  const Addlocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((succes) => {
          let lat  = succes.coords.latitude;
          let long = succes.coords.longitude
          dispatch(UpdateLocation(lat,long));
          dispatch(UpdateCitySelect('1'));
          setRoot('location')
          dispatch(ClickSearchMobile(false));
      });
      } else { 
      alert("Geolocation is not supported by this browser.");
      }
  } 
  
  const ReturnHome = () => {
        dispatch(UpdateCitySelect(''));
        setRoot('home')
        dispatch(ClickSearchMobile(false));
        
  }

  const ClickSearch = () => {
      let check = ((clickSearchMobile)? false : true );
      if(check){
        setRoot('home');
      }
        dispatch(UpdateCitySelect(''));
        dispatch(ClickSearchMobile(check));
  } 

  return (
    <div className="ContainerMenu">
        <div className="Menu">
            <Row className="m-0">
              <Col className="text-center pl-4 pr-4 pt-4 col-4">
                <div onClick={()=>{ReturnHome()}} className={`voceMenu ${root=='home' && !clickSearchMobile ? "active" : ""}`} >
                    <img  src={home} /> 
                </div>
              </Col>
              <Col className="text-center pl-4 pr-4 pt-4 col-4">
                <div onClick={()=>{ClickSearch()}} className={`voceMenu ${clickSearchMobile ? "active" : ""}`}>
                    <img  src={search}  />
                </div>
              </Col>
              <Col className="text-center pl-4 pr-4 pt-4 col-4">
                <div onClick={()=>{Addlocation()}} className={`voceMenu ${root=='location' && !clickSearchMobile ? "active" : ""}`}>
                    <img  src={location} /> 
                </div>
              </Col>
            </Row>

        </div>
    </div>
  );
}

export default MenuMobile;
