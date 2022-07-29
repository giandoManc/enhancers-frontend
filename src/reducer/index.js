import City  from './city';
import Citys  from './citys';
import SearchCity from './searchCity';
import CitySelect from './citySelect';

import { combineReducers } from 'redux';

const rootReducer = combineReducers ({
    city:City,
    citys:Citys,
    searchCity:SearchCity,
    citySelect:CitySelect
})

export default rootReducer