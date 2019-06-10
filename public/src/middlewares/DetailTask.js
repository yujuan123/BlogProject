import request from 'superagent';
import moment from 'moment';

export default store=>next=>action=>{
    switch (action.type){
        case 'DETAIL_TASKS_GOT':
            request.get(`/tasks/detailTask/${action.id}`)
                .end((err,res)=>{
                    next({type:'DETAIL_TASKS_LOADED',content:res.body})
                });
            break;
        case 'ADD_COMMENT':
            request.post(`/tasks/addComment/${action.id}`)
                .send({"commentUsername":action.username,"content":action.content,"commentTime":moment().format('YYYY-MM-DD HH:mm:ss')})
                .end((err,res)=>{
                    next({type:'SHOW_COMMENTED',id:action.id})
                });
            break;
    }
    next(action);
}