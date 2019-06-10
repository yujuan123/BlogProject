const detailTask =(id)=>{
    return{
        type:'DETAIL_TASKS_GOT',
        id
    }
};
const showComment =(id)=>{
    return{
        type:'SHOW_COMMENTED',
        id
    }
};
const addComment = (id,username,content)=>{
    return{
        type:'ADD_COMMENT',
        id:id,
        username:username,
        content:content
    }
};
module.exports={
    detailTask,
    addComment,
    showComment
};