import * as types from './../constants/ActionType';
var data = JSON.parse(localStorage.getItem('CART'));
var initialState = [
    {
        product : {
            id : 1,
            name : 'Thiên Quan Tứ Phúc',
            image : 'https://a.wattpad.com/cover/114749919-352-k36063.jpg',
            description : 'Hoa Thành x Tạ Liên',
            price : 2000000,
            inventory : 9,
            rating : 4
            },
            quantity : 5
    }
];

const products = (state = initialState, action) => {
    switch (action.type){
        case types.ADD_TO_CART:
            console.log(action);
            return [...state];
        default: return [...state];
    }
};

export default products;