const loadStrangerInfo = (username) => {
    return {
        type : 'STRANGER_INFO_LOADED',
        username:username
    }
};
const attentionUser =(username)=>{
    return{
        type:'ATTENTION_USER',
        username:username
    }
};
const isFriend = (username)=>{
    return{
        type:'IS_FRIEND',
        username:username
    }
};
module.exports = {
    loadStrangerInfo,
    attentionUser,
    isFriend
};

