const ClickSearchMobile = (state=false,action) => {
    switch(action.type) {
        case 'UPDATECLIKSEARCHMOBILE':
            state = action.payload;    
            return state;
        
        default:return state;
    }
}
export default ClickSearchMobile