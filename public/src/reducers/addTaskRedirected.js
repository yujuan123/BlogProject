const addTaskRedirected = (state = false, action)=> {
  switch (action.type) {
    case 'ADD_TASK_REDIRECTED':
      return action.isRedirect;
    case 'STOP_REDIRECT':
      return false;
  }
  return state;
};

export default addTaskRedirected;