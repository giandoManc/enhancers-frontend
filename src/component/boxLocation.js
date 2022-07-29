import ImgLocation from '../images/location.png'; 

import {UpdateLocation} from '../actions'

import { useDispatch } from 'react-redux';
 
function BoxLocation() {
    const dispact = useDispatch();
    const Addlocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((succes) => {
            let lat  = succes.coords.latitude;
            let long = succes.coords.longitude
            dispact(UpdateLocation(lat,long));
        });
        } else { 
        alert("Geolocation is not supported by this browser.");
        }
    } 
    return (
        <div>

            <div className="BoxTitle">
                <h3>Localization</h3>  
            </div>  

            <div onClick={() => {Addlocation()}}  className="clickButton BoxLocation" >
                    <div className="Table" >
                        <div className="CenterDiv" >
                            <img src={ImgLocation} />
                            <h4>Add Location</h4>  
                        </div>
                    </div> 
            </div>
        </div>
    );
  }
  
  export default BoxLocation;
  