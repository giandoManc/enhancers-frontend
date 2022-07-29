import ImgSearch from '../images/search.png'; 
import {useEffect, useState} from 'react';
import {UpdateSearch} from '../actions'
import { useSelector,useDispatch } from 'react-redux';
function BoxSearch() {
    const [search, setSearch] = useState("");
    const dispact = useDispatch();

    const Search = () => {
        dispact(UpdateSearch(search))
    }

    return (
        <div>

            <div className="BoxTitle">
                <h3>Search</h3>  
            </div>  

            <div className="BoxSearch" >
                <div className="Table" >
                    <div className="CenterDiv" >
                        <input name="searchCity" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='ex: Miami'/>
                    </div>   
                </div> 
                <button onClick={() =>{Search()}} className="clickButton">
                    <div className="Table" >
                        <div className="CenterDiv" >
                            <img src={ImgSearch} />
                        </div>   
                    </div> 
                </button>  
            </div>
        </div>
    );
  }
  
  export default BoxSearch;
  