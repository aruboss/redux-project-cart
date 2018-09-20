import * as Message from './../constants/Message';

var initialState = Message.MSG_WELCOM;

const message = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
    }
};

export default message;