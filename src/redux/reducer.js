const initState = {
    orderType: [],
};

const Reducer = (state = initState, action) => {
    switch (action.type) {
        case 'ORDER_SET_TYPE':
        return {
        ...state,
        orderType: action.orderType,
        };

    case 'init':
        return {
        ...state,
        orderType: [],
        };

    default:
        return state;
    }
};

export default Reducer;