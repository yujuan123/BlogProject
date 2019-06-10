const DetailTask = (state ={content:''} , action) => {
    switch (action.type) {
        case "DETAIL_TASKS_LOADED":
            return action.content;
    }
    return state;
};
export default DetailTask;