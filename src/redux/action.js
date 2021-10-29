
export const actionOrderType = orderType => ({
    type: 'ORDER_SET_TYPE',
    orderType,
});

export const init = () => ({
    type: 'init',
});