import {connect} from 'react-redux';
import ShowAllTasks from '../components/ShowAllTasks';
import actions from '../actions/ShowAllTasks';

import DetailTask from '../actions/DetailTask';
const mapStateToProps = (state)=> {
    return state;
};

const mapDispatchToProps = (dispatch)=> {
    return {
        onShowAdd: (index)=> {
            dispatch(actions.showTaskAdd(index));
        },
        onShowSub: (index)=> {
            dispatch(actions.showTaskSub(index));
        },
        stopRedirect: ()=>{
            dispatch(actions.stopRedirect());
        },
        onAddComment: (id,username,content)=> {
            dispatch(DetailTask.addComment(id,username,content))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowAllTasks);
