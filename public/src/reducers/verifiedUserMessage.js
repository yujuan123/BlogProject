const verifiedUserMessage = (state={},action)=>{
  switch(action.type){
    case 'USER_IDENTITY_REQUESTED':
      return {
        isLogged:false
      };
    case 'USER_IDENTITY_RECEIVED':
      return {
        username:action.username,
        isLogged:action.isLogged
      }
  }
  return state;
};

export default verifiedUserMessage;