import cloud from '../images/cloud.png'; 
import sunny from '../images/sunny.png'; 
import rain from '../images/rain.png'; 

function ImageWeather(props) {
    let img;
    switch(props.icon){
        case 500:
        case 501:
        case 502:
        case 201:
        case 503:
        case 504:
            img=rain;
            break;
        case 801:
        case 803:
        case 804:
        case 802:
            img=cloud;
        break;
        default:
            img=sunny
        break;
    }
    return (
        <img src={img}/>
    );
  }
  
  export default ImageWeather;
  