const UserAttention = (state=[], action)=> {
    switch (action.type) {
        case 'GET_USER_ATTENTION':
            return action.content;
    }

    return state;
};
export default UserAttention;

