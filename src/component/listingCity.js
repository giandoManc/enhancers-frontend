import Plus from '../images/plus.png'; 
import ButtonCity from './buttonCity'; 

function ListingCity(props) {
    const citys = ((props.citys && props.citys.length)? props.citys : [] );
    return (
        <div className="marginNegative">
            <div className="ListingCity" >
                <div className="clickButton AddCity">
                    <div className="Table" >
                        <div className="CenterDiv" >
                            <img src={Plus} /> <h4>Aggiungi città</h4>  
                        </div>
                    </div>
                </div>
                {citys.map((city,index) => (
                    <ButtonCity key={index}  city={city}/>
                ))}
            </div>
        </div>
    );
  }
  
  export default ListingCity;
  