import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Moment from 'react-moment';
import ImageWeather from './imageWeather'
import {UpdateCity,UpdateSearch,UpdateCitySelect} from '../actions'
import { useDispatch,useSelector } from 'react-redux';

function  ButtonCity(props) {
    const dispatch = useDispatch();
    const city = ((props.city)? props.city : [] );
    const cityName = city?.name;
    const search = useSelector(state=>state.searchCity);
    const cityUpdate = (cityParams) => {
        dispatch(UpdateCity(cityParams));
        dispatch(UpdateSearch(''));
        dispatch(UpdateCitySelect(cityParams));
    }

    return (
        <div>
            {(() => {
                if (search == '' ||  city?.name.toLowerCase().search(search) !== -1) {
                    return (
                        <div onClick={() => {cityUpdate(city?.name)}} className="clickButton ButtonCity">
                            <Row className="justify-content-md-center">
                                <Col className="col-4">
                                    <h4>{city?.name}</h4>  
                                    <p><Moment format="MMM D"/></p>
                                    <p className="Date"><Moment format='LT'/></p> 
                                </Col>
                                <Col className="col-4">
                                    <div className="Table" >
                                        <div className="CenterDiv text-center text-lg-left" >
                                        <ImageWeather icon={city?.weather[0].id}/>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="col-4">
                                    <div className="Table" >
                                        <div className="CenterDiv text-right" >
                                            <h5>{parseInt(city?.main.temp)}°</h5>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            
                        </div>
                    )
                }
            })()}
        </div>
        
    );
  }
    
  export default ButtonCity;
  