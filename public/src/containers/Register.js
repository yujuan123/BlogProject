import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Register from '../components/Register';
import actions from '../actions/Register';

const mapStateToProps = (state)=> {
    return state;
};
const mapDispatchToProps = (dispatch)=> {
    return {
        onExit: (username)=> {
            dispatch(actions.isExit(username));
        },
        onRegister: (content)=> {
            dispatch(actions.register(content));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Register));