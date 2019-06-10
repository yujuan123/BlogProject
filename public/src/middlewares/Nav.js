import request from 'superagent';
export default store=>next=>action=> {
  switch (action.type){
    case 'USERNAME_LOADED':
      request.get('/tasks/legal-username')
          .end((err,res)=>{
            if(!err&&res.text){
              console.log(res.text);
              next({type: 'USERNAME_GOT', data: res.text})
            }
          });
      break;
  }
  next(action);
}