import React, {Component} from 'react';
import {Link} from 'react-router';
import Nav from '../containers/Nav';

export default class StrangerUserCenter extends Component {
    componentWillMount(){
        this.props.isFriend(this.props.params.username);
    }
    componentDidMount() {
        this.props.verifyUser();

        const username = this.props.params.username;
        const loginUser = this.props.nav;
        if(username===loginUser){
            this.props.router.push('/userCenter');
        }
        else {
            this.props.loadStrangerInfo(username);
        }
    }

    handleClick(){
        if(this.props.verifiedUserMessage.isLogged){
            this.props.attentionUser(this.props.params.username);
        }
    }

    componentWillUpdate(nextProps){
        if (nextProps.addTaskRedirected) {
            this.props.router.push('/show');
            //果然,要去阻止 登录页和首页来回跳
            this.props.stopRedirect();
        }
    }

    render() {
        var attention=this.props.AttentionUser.focus;
        const strangerUserInfo = this.props.StrangerUserCenter.map((ele, index)=> {
            return <div key={index} className="center-block">
                <div className="detail">
                    <div>
                        <span className="col-md-10 info">{ele.content}</span>
                        <span className="time">{ele.regtime}</span>
                    </div>
                    <div>
                        <a href="#" id='like' className="col-md-2">喜欢</a>
                        <a href="#" id='reply'>回复</a>
                    </div>
                </div>
            </div>
        });
        return <div>
            <div className="userContent">
                <div className="author">
                    <img className="img-circle" src="../images/番茄.png"/>
                    <span id="authorName">{this.props.params.username}</span>
                    <ul>
                        <li>粉丝{this.props.AttentionUser.fanLength}</li>
                        <li>关注{this.props.AttentionUser.friendLength}</li>
                        <li>
                            <button className="btn btn-primary focusButton" onClick={this.handleClick.bind(this)}>{attention}</button>
                        </li>
                    </ul>
                </div>
                <hr />
                {strangerUserInfo}
            </div>
        </div>
    }
}
