import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import AddTask from '../components/AddTask';
import actions from  '../actions/AddTask'

const mapStateToProps = (state)=> {
    return state
};

const mapDispatchToProps = (dispatch)=> {
    return {
        verifyUserIdentity:()=>{
            dispatch(actions.verifyUserIdentity());
        },
        onInput: (content)=> {
            dispatch(actions.addTask(content));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddTask));
