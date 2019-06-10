import request from 'superagent';

export default store=>next=>action=>{
    switch (action.type){
        case 'STRANGER_INFO_LOADED':
            request.get(`/tasks/strangerInfo/${action.username}`)
                .end((err,res) =>{
                    next({type: 'GET_STRANGER_USER_CENTER',content:res.body});
                });
            break;
        case 'ATTENTION_USER':
            request.post(`/tasks/attentionUser/${action.username}`)
                .end((err,res) =>{
                    next({type: 'ATTENTION_SUCCESS', content: res.body});
                });
            break;
        case 'IS_FRIEND':
            request.get(`/tasks/isFriend/${action.username}`)
                .end((err,res) =>{
                    console.log(res.body);
                    next({type: 'ATTENTION_ED', content: res.body});
                });
            break;
    }
    next(action);
}