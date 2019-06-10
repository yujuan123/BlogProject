import request from 'superagent';

export default store=>next=>action=>{
    switch (action.type){
        case 'SHOW_USER':
            request.get('/tasks/userTaskInfo')
                .end((err,res)=>{
                    next({type: 'GET_ALL_USER_TASK_INFO', content: res.body});
                 });
            break;
        case 'USER_INFO':
            request.get('/tasks/userInfo')
                .end((err,res)=>{
                    next({type: 'GET_ALL_USER_INFO', content: res.body});
                });
            break;
        case 'ATTENTION':
            request.get('/tasks/userAttention')
                .end((err,res)=>{
                    next({type: 'GET_USER_ATTENTION', content: res.body});
                });
    }
    next(action);
}