import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import UserCenter from '../components/UserCenter';
import actions from '../actions/UserCenter';

const mapStateToProps = (state)=>{
    return state;
};

const mapDispatchToProps = (dispatch)=>{
    return {
        onShowUser:()=>{
            dispatch(actions.showUser());
        },
        onUserInfo:()=>{
            dispatch(actions.userInfo());
        },
        deleteElement: (_id)=> {
            dispatch(actions.deleteTask(_id));
        },
        onAttention:()=>{
            dispatch(actions.attention());
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(UserCenter));