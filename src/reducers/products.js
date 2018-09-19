var initialState = [
    {
        id: 1,
        name: 'Thiên Quan Tứ Phúc',
        image: 'https://a.wattpad.com/cover/114749919-352-k36063.jpg',
        description: 'Hoa Thành x Tạ Liên',
        price: 2000000,
        inventory: 9,
        rating: 4
    },
    {
        id: 2,
        name: 'Ma Đạo Tổ Sư',
        image: 'https://images2-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&gadget=a&no_expand=1&refresh=604800&url=https%3A%2F%2Fwoohay.com%2Fdata%2Fimages%2Ffilms%2Fthumb%2Fma-dao-to-su-mo-dao-zu-shi-2018.jpg%3Fsize%3D300',
        description: 'Lam Vong Cơ x Ngụy Vô Tiện',
        price: 3000000,
        inventory: 1,
        rating: 5
    },
    {
        id: 3,
        name: 'Hệ Thống Tự Cứu Của Nhân Vật Phản Diện',
        image: 'https://i.pinimg.com/736x/e9/96/bc/e996bc47048b35238c4ba13b74854037.jpg',
        description: 'Lạc Băng Hà x Thẩm Thanh Thu',
        price: 1000000,
        inventory: 11,
        rating: 3
    }
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];
    }
};

export default products;