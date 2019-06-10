import request from 'superagent';

const addTask = (content)=> {
  return {
    type: 'ADD_TASK',
    content: content
  }
};

const requestUserIdentity = ()=> {
  return {
    type: 'USER_IDENTITY_REQUESTED'
  }
};
const receivedUserIdentity = (username,isLogged)=> {
  return {
    type: 'USER_IDENTITY_RECEIVED',
    username,
    isLogged
  }
};
const addTaskRedirected = (isRedirect)=>{
  return {
    type: 'ADD_TASK_REDIRECTED',
    isRedirect
  }
};
//首页发布番茄任务时的用户验证
const verifyUserIdentity = ()=> {
  return (dispatch)=> {

    dispatch(requestUserIdentity());
    
    request.get('/tasks/verify-user-identity')
        .end((err,res)=>{
          if(res.text){//验证成功过后的用户名:字符串
            dispatch(receivedUserIdentity(res.text,true));
          }else{//验证失败,则重定向
            dispatch(addTaskRedirected(true));
          }
        })
  }
};

module.exports = {
  addTask,
  verifyUserIdentity,
  addTaskRedirected
};
