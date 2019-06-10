import request from 'superagent';

export default store=>next=>action=> {
    switch (action.type) {
        case 'DELETE_TASK':
            request.delete(`/tasks/delete/${action._id}`)
                .end((err, res)=> {
                    next({type: 'SHOW_ALL_TASK'});
                    // store.dispatch action 和 next action 不一样
                });
            break;
    }
    next(action);
}