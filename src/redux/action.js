// 매장 & 포장
export const actionOrderType = orderType => ({
    type: 'ORDER_SET_TYPE',
    orderType,
});

// 구매 리스트에 저장
export const actionAddOrder = item => ({
    type: 'ADD_ITEM',
    item,
});

// 구매 리스트에서 삭제
export const actionRemoveOrder = item => ({
    type: 'REMOVE_ITEM',
    item,
});

// 구매 리스트 업데이트
export const updateCartItem = (product, quantity) => ({
    type: 'UPDATE_CART_ITEM',
    product,
    quantity
});

// 구매 리스트 불러오기
export const loadItem = (item) => {
    return {
        type: 'LOAD_ITEM',
        item,
    };
};

// 초기화
export const init = () => ({
    type: 'init',
});


