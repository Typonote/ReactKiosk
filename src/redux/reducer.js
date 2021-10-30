const initState = {
    orderType: [],
    cart: [],
};

const Reducer = (state = initState, action) => {
    
    switch (action.type) {

    case 'ORDER_SET_TYPE':
        return {
            ...state,
            orderType: action.orderType,
        };
    
    case 'ORDER_ADD_ITEM':
        return {
            ...state, 
            item: action.item,
        };

    case 'ORDER_REMOVE_ITEM':
        return {
            ...action.items
        };

    case 'UPDATE_CART_ITEM':
        return {
            ...action.items
        };

    case 'LOAD_ITEM':
        return {
            ...state, 

        };

    case 'init':
        return {
        ...state,
        orderType: [],
        item: [],
        };

    default:
        return state;
    }
};

export default Reducer;