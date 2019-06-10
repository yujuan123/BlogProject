const ShowComment = (state=[],action)=>{
    switch (action.type) {
        case "SHOW_ADDED_COMMENT":
            return action.content;
    }
    return state;
};
export default ShowComment;