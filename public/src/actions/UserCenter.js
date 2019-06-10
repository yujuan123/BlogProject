const showUser = ()=> {
    return {
        type: 'SHOW_USER'
    }
};
const userInfo = ()=>{
    return {
        type:'USER_INFO'
    }
};
const deleteTask = (_id)=> {
    return {
        type: 'DELETE_TASK',
        _id: _id
    }
};
const attention = ()=>{
  return{
      type:'ATTENTION'
  }
};
module.exports = {
    showUser,
    userInfo,
    deleteTask,
    attention
};