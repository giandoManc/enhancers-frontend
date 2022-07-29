import Moment from 'react-moment';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BoxWeek from '../boxWeek';
import BoxTodayMobile from '../boxTodayMobile';

import plus from '../../images/plus_mobile.png'; 
import arrow from '../../images/arrow_left.png'; 
import ImageWeather from '../imageWeather'

import { useDispatch } from 'react-redux';
import {UpdateCitySelect} from '../../actions'

const MobileView = (props) => {
    const cityStore = props.city;
    const weather = ((cityStore.now)? cityStore.now.weather[0].description : '');
    const city = ((cityStore.city)? cityStore.city.name : '');
    
    const icon = ((cityStore.now.weather)? cityStore.now?.weather[0].id : '' );
    const temp = ((cityStore.now.main)? cityStore.now.main.temp : '' )
    const isDesktop = props.isDesktop;
    const week = props.week;
    const citySelect = props.citySelect;

    const dispatch = useDispatch();
    const ReturnHome = () => {
        dispatch(UpdateCitySelect(''));
    }
    return (
        <div className="MobileDashbord">
            <div className='Main'>
                <div className='TitleMobile'>
                    <Row className='m-0 p-4'>
                        <Col className='col-3 pt-2'>
                            <img onClick={()=>{ReturnHome()}} src={arrow}/>
                        </Col>
                        <Col className='col-6 p-0 text-center'>
                            <h4>
                                {city}
                            </h4>
                            <h5>
                                <Moment format="MMM D, MMMM">{new Date()}</Moment>
                            </h5>
                            <p>{weather}</p>
                        </Col>
                        <Col className='col-3 p-2 text-right'>
                            <img src={plus}/>
                        </Col>
                    </Row>
                </div>

                <Col className='col-10 mx-auto p-4'>
                    <Row className='m-0'>
                        <Col className='col-lg-3 p-0'>
                            <ImageWeather icon={icon}/>
                        </Col>
                        <Col className='col-lg-3 p-0'>
                            <h5 class="Temp">{parseInt(temp)}°</h5>
                        </Col>
                    </Row>
                </Col>
                <BoxTodayMobile city={cityStore}/>
                <BoxWeek isDesktop={isDesktop}  week={week}/>
            </div>
        </div>
    );
  }
  
  export default MobileView;
  