const UserInfo = (state=[], action)=> {
    switch (action.type) {
        case "GET_ALL_USER_INFO":
            return action.content;
    }
    return state;
};
export default UserInfo;
