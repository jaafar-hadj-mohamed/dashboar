const initiaState={
    cart:[]
}
const cartReducer=(state=initiaState, action)=>{
    switch (action.type) {
        case 'ADD_PRODUCT':
            
            return state;
    
        default:
            return state;
    }
}
export default cartReducer;