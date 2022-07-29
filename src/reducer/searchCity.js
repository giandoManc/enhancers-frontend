const SearchCity = (state='',action) => {
    switch(action.type) {
        case 'UPDATESEARCH':
            state = action.payload;    
            return state;
        default:return state;
    }
}
export default SearchCity