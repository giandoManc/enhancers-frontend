import City  from './city';
import Citys  from './citys';
import SearchCity from './searchCity';
import CitySelect from './citySelect';
import ClickSearchMobile from './clickSearchMobile';

import { combineReducers } from 'redux';

const rootReducer = combineReducers ({
    city:City,
    citys:Citys,
    searchCity:SearchCity,
    citySelect:CitySelect,
    clickSearchMobile:ClickSearchMobile
})

export default rootReducer