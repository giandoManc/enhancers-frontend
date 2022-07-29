const CitySelect = (state='',action) => {
    switch(action.type) {
        case 'UPDATECITYSELECT':
            state = action.payload;    
            return state;
        
        default:return state;
    }
}
export default CitySelect