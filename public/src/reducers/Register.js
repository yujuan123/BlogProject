const Register = (state = {}, action)=> {
    switch (action.type) {
        case "USER_EXIT":
            return action.content;
        // case "REGISTER_SUCCESSFUL":
        //     return action.content;
    }
    return state;
};
export default Register;