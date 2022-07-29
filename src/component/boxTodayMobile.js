import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector,useDispatch } from 'react-redux';
import moment from 'moment';

function BoxTodayMobile(props) {
    
    const cityStore = props.city;
    let nowWeathers = ((cityStore.list)? cityStore.list : []);
    nowWeathers = nowWeathers?.filter(nowWeather => checkDay(nowWeather.dt_txt) )  
    return (
        <div>
            <div className="BoxTodayMobile">
                <div className="ListngToday">  
                    <div className="centerLice">
                        <span className="line"></span>
                    </div> 
                    {nowWeathers.map((nowWeather,index) => (
                            <div key={index} className={`RowToday pb-4 ${index==0 ? "Now" : ""}`}>    
                                {(index==0) &&
                                    <p className="mb-0 Grassetto">Now</p>
                                }
                                {(index!=0) &&
                                    <p>{moment(nowWeather.dt_txt).format('HH:mm')}</p>
                                }
                                <span className="Point "></span>
                                <h4>{parseInt(nowWeather.main.temp)}°</h4>
                            </div>
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
  export default BoxTodayMobile;
  