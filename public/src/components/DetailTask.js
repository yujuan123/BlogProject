import React, {Component} from 'react';

export default class DetailTask extends Component {
    componentWillMount() {
        this.props.onDetailTask(this.props.params._id);
        this.props.onShowComment(this.props.params._id);
    }

    clearInput() {
        this.refs.detailComment.value = '';
        $("#commentTip").text('');
    }

    addComment() {
        const content = this.refs.detailComment.value;
        if (content === '') {
            $("#commentTip").text("输入不能为空！");
        }
        else {
            const id = this.props.params._id;
            const username = this.props.nav;
            this.props.onAddComment(id, username, content);
        }
    }

    render() {
        const content = this.props.DetailTask.content;
        const username = this.props.DetailTask.username;
        const regtime = this.props.DetailTask.regtime;
        const comment = this.props.ShowComment.map((ele, index)=> {
            return <div key={index} className="comment">
                <div id="commentContent">
                    <span className="col-md-2">{ele.commentUsername}</span>
                    <span className="col-md-6">{ele.content}</span>
                    <span className="col-md-3">{ele.commentTime}</span>
                    <span className="col-md-1">回复</span>
                </div>
                <hr />
            </div>
        });
        return <div>
            <div id="detail">
                <div id="detailContent">
                    <span className=" detailImg">
                        <img className="img-circle" src="../images/番茄.png" width="36" height="36"/>
                        <span className="name">{username}</span><br />
                        <span className="time">{regtime}</span>
                    </span>
                    <div className="room">{content}</div>
                    <div className="test">
                        <span className="bot"> </span>
                        <span className="top"> </span>
                        <textarea rows="6" cols="60" id="detailComment" ref='detailComment' placeholder="#写下你的评论..."
                                  onFocus={this.clearInput.bind(this)}>
                    </textarea>
                    </div>
                    <div id="commentTip"></div>
                    <div>
                        <button id="commitButton" className="btn btn-primary col-lg-2"
                                onClick={this.addComment.bind(this)}>
                            发表
                        </button>
                    </div>
                </div>
                <hr id="commentHr"/>
            </div>
            {comment}
        </div>
    }
}