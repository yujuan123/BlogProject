import React, {Component} from 'react';

export default class AddTask extends Component {
    verifyUsernameIdentity(){
        this.props.verifyUserIdentity();
    }
    NotNull() {
        let username = this.props.nav;
        $("#tip").text("");
        const input = this.refs.input.value.trim();
        if (input == "") {
            $("#tip").text("输入不能为空");
        }
        else {
            /*在这之前,判断用户是否登录*/
            if(this.props.verifiedUserMessage.isLogged){
                this.props.onInput({input, username});
            }
        }
    }
    
    clearInput() {
        $("#tip").text("");
        this.refs.input.value = '';
    }

    render() {
        return (
            <div>
                <div className="row addTask">
                    <div className="col-md-4 col-md-offset-3">
                        <input type="text" className="form-control task-input" id="input" ref="input"
                               placeholder="#今天锻炼25分钟" onFocus={this.clearInput.bind(this)} onBlur={this.verifyUsernameIdentity.bind(this)}/>
                        <span id="tip"> </span>
                    </div>
                    <div className="col-md-2 ">
                        <button className="btn btn-primary" onClick={this.NotNull.bind(this)}>Post</button>
                    </div>
                </div>
            </div>
        )
    }
}

