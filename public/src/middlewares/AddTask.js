import request from 'superagent';
import moment from 'moment';

export default store=>next=>action=> {
    switch (action.type) {
        case 'ADD_TASK':
            request.post('/tasks/add')
                .send({"username": action.content.username, "content": action.content.input, "regtime": moment().format('YYYY-MM-DD HH:mm:ss')})
                .end((err, res)=> {
                    next({type: 'SHOW_TASK'})
                })
    }
    next(action);
}
