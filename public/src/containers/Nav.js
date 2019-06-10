import {connect} from 'react-redux';
import Nav from '../components/Nav';
import ShowAllTasks from '../actions/ShowAllTasks';
const mapStateToProps = (state)=> {
  return state;
};

const mapDispatchToProps = (dispatch)=> {
  return {
    loadUsername:()=>{
      dispatch(ShowAllTasks.loadUsername());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);