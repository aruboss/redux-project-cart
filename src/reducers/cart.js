import * as types from './../constants/ActionType';
var data = JSON.parse(localStorage.getItem('CART'));
var initialState = [
    {
        product: {
            id: 1,
            name: 'Thiên Quan Tứ Phúc',
            image: 'https://a.wattpad.com/cover/114749919-352-k36063.jpg',
            description: 'Hoa Thành x Tạ Liên',
            price: 2000000,
            inventory: 9,
            rating: 4
        },
        quantity: 5
    },
    {
        product: {
            id: 3,
            name: 'Hệ Thống Tự Cứu Của Nhân Vật Phản Diện',
            image: 'https://i.pinimg.com/736x/e9/96/bc/e996bc47048b35238c4ba13b74854037.jpg',
            description: 'Lạc Băng Hà x Thẩm Thanh Thu',
            price: 1000000,
            inventory: 11,
            rating: 3
        },
        quantity: 6
    }
];

const products = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            console.log(action);
            return [...state];
        default: return [...state];
    }
};

export default products;