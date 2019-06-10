import request from 'superagent';

export default store=>next=>action=> {
    switch (action.type) {
        case 'SHOW_COMMENTED':
            request.get(`/tasks/showComment/${action.id}`)
                .end((err, res)=> {
                    next({type: 'SHOW_ADDED_COMMENT', content: res.body})
                });
            break;
    }
    next(action);
}