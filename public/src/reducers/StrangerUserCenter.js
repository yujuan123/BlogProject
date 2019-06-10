const StrangerUserCenter = (state=[], action)=> {
    switch (action.type) {
        case "GET_STRANGER_USER_CENTER":
            return action.content;
    }

    return state;
};
export default StrangerUserCenter;
