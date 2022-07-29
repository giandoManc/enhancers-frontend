import { useSelector } from 'react-redux';
import ImageWeather from './imageWeather'
function WeatherNow() {
  const cityStore = useSelector(state=>state.city);
  const nowWeather = ((cityStore.now)? cityStore.now : '');
  const icon = ((nowWeather.weather)? nowWeather?.weather[0].id : '' );
  return (
    <div>
      {(() => {
        if (nowWeather !== '') {
          return (
            <div className="WeatherNow">
              <div className="Table" >
                  <div className="CenterDiv" >
                      <h5>{parseInt(nowWeather.main?.temp)}°</h5>
                      <ImageWeather icon={icon}/>
                  </div>
              </div> 
          </div>
          )
        }
      })()}
    </div>
    
  );
}

export default WeatherNow;
