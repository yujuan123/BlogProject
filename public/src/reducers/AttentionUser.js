const AttentionUser = (state = {focus:'',fanLength:'',friendLength:''}, action)=> {
    switch (action.type) {
        case 'ATTENTION_SUCCESS':
            return action.content;
        case 'ATTENTION_ED':
            return action.content;
    }
    return state;
};

export default AttentionUser;
