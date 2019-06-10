import {connect} from 'react-redux';
import StrangerUserCenter from '../components/StrangerUserCenter';
import actions from '../actions/LoadStrangerInfo';
import AddTask from '../actions/AddTask';
import ShowAllTasks from '../actions/ShowAllTasks';
const mapStateToProps = (state)=> {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    verifyUser: ()=> {
      dispatch(AddTask.verifyUserIdentity());
    },
    loadStrangerInfo: (username) => {
      dispatch(actions.loadStrangerInfo(username));
    },
    stopRedirect: ()=> {
      dispatch(ShowAllTasks.stopRedirect());
    },
    attentionUser:(username)=>{
      dispatch(actions.attentionUser(username));
    },
    isFriend:(username)=>{
      dispatch(actions.isFriend(username));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StrangerUserCenter);
