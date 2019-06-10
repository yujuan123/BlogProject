const ShowAllTasks = (state={data:[],index:-5}, action)=> {
    switch (action.type) {
        case "GET_ALL_TASKS":
            return action.content;
    }
    console.log(state);
    return state;
};
export default ShowAllTasks;