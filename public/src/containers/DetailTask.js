import {connect} from 'react-redux';
import DetailTask from '../components/DetailTask';
import actions from '../actions/DetailTask';

const mapStateToProps = (state)=> {
    return state;
};

const mapDispatchToProps = (dispatch)=> {
    return {
        onDetailTask: (id)=> {
            dispatch(actions.detailTask(id))
        },
        onShowComment: (id)=> {
            dispatch(actions.showComment(id))
        },

        onAddComment: (id,username,content)=> {
            dispatch(actions.addComment(id,username,content))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailTask);