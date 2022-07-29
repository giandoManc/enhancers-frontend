const Citys = (state={},action) => {
    switch(action.type) {
        case 'INITCITYS' :
            state = action.payload;    
            return state;
        default:return state;
    }
}
export default Citys