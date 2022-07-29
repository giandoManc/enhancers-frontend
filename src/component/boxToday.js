import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector,useDispatch } from 'react-redux';
import moment from 'moment';

function BoxToday(props) {
    
    const cityStore = props.city;
    let nowWeathers = ((cityStore.list)? cityStore.list : []);
    nowWeathers = nowWeathers?.filter(nowWeather => checkDay(nowWeather.dt_txt) )  
    return (
        <div>
            <div className="BoxTitle">
                <h3>Today</h3>  
            </div>  
            <div className="BoxToday">
                <div className="ListngToday">  
                    <p className="text-center nowTitle mb-0">Now</p>  
                    <div className="centerLice">
                        <span className="line"></span>
                    </div> 
                    {nowWeathers.map((nowWeather,index) => (
                            <Row key={index} className={`RowToday pb-4 ${index==0 ? "Now" : ""}`}>
                                <Col className="col-4">
                                    <h4>{parseInt(nowWeather.main.temp)}°</h4></Col>
                                <Col className="col-4 text-center">
                                    <span className="Point "></span>
                                </Col>
                                <Col className="col-4">
                                    <p className={`${index==0 ? "d-none" : ""}`}>{moment(nowWeather.dt_txt).format('HH:mm')}</p>
                                </Col>
                            </Row>
                    ))}
                </div>
            </div>
        </div>
    );
  }
  
  const checkDay = (dayPass) => {
    let check = false;
    let day = moment(dayPass).format('MM-DD-YYYY');
    if(moment().format('MM-DD-YYYY') == day){
        check = true;
    }
    return check
  }
  export default BoxToday;
  