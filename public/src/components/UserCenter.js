import React, {Component} from 'react';
import Nav from '../containers/Nav';

export default class UserCenter extends Component {
    deleteTask(_id) {
        this.props.deleteElement(_id);
    }

    componentWillMount() {
        this.props.onAttention();
        this.props.onUserInfo();
        this.props.onShowUser();
    }

    render() {
        const userInfo = this.props.UserCenter.map((ele, index)=> {
            return <div key={index} className="center-block">
                <div className="detail">
                    <div>
                        <span className="col-md-9 info">{ele.content}</span>
                        <span className="time">{ele.regtime}</span>
                    </div>
                    <div>
                        <a href="#" id='like' className="col-md-2">喜欢</a>
                        <a href="#" id='reply'>回复</a>
                        <button className="btn btn-primary" onClick={this.deleteTask.bind(this, ele._id)}>删除</button>
                    </div>
                </div>
            </div>
        });
        return <div>
            <div className="userContent">
                <div className="author">
                    <img className="img-circle" src="../images/番茄.png"/>
                    <span id="authorName">{this.props.UserInfo.map((ele)=>ele.username)}</span>
                    <ul>
                        <li>粉丝{this.props.UserAttention[0]}</li>|
                        <li>关注{this.props.UserAttention[1]}</li>
                    </ul>
                </div>
                <hr />
                {userInfo}
            </div>
        </div>
    }
}
