import request from 'superagent';

export default store=>next=>action=> {
    switch (action.type) {
        case 'SHOW_TASK':
            request.get('/tasks')
                .query({"index":action.index})
                .end((err, res)=> {
                    next({type: 'GET_ALL_TASKS', content: res.body});
                });
            // 不要忘记 break;
            break;
        case 'SHOW_TASK_SUB':
            request.get('/tasks/subTask')
                .query({"index":action.index})
                .end((err, res)=> {
                    next({type: 'GET_ALL_TASKS', content: res.body});
                });
            // 不要忘记 break;
            break;
        case 'SHOW_ALL_TASK':
            request.get('/tasks/showAll')
                .end((err, res)=> {
                    next({type: 'GET_ALL_USER_TASK_INFO', content: res.body});
                });
            // 不要忘记 break;
            break;
    }
    next(action);
}
