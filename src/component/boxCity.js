import Moment from 'react-moment';


const BoxCity = (props) => {
    const cityStore = props.city;
    const weather = ((cityStore.now)? cityStore.now.weather[0].description : '');
    const city = ((cityStore.city)? cityStore.city.name : '');
    const date = new Date();
    return (
      <div className="BoxCity" style={{ backgroundImage:'url('+'https://picsum.photos/1200/800)'}}>
        <div className="Layer">
            <h1>{city}</h1>
            <p><Moment format="MMM D, MMMM">{date}</Moment></p>  
            <p className="Weather">{weather}</p>
        </div>


      </div>
    );
  }
  
  export default BoxCity;
  