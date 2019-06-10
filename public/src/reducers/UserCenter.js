const UserCenter = (state=[], action)=> {
    switch (action.type) {
        case "GET_ALL_USER_TASK_INFO":
            return action.content;
        break;
        case "GET_STRANGER_USER_CENTER":
            return action.content;
    }

    return state;
};
export default UserCenter;

