import React, {Component} from 'react';
import moment from 'moment';
import {Link} from 'react-router';

import AddTask from '../containers/AddTask';

export default class ShowAllTasks extends Component {
    constructor(props) {
        super(props);
        this.state = {comment: ''};
    }

    handleChange(e) {
        this.setState({
            comment: e.target.value,
        })
    }

    componentWillMount() {
        const index = -5;
        this.props.onShowAdd(index);
    }

    componentWillUpdate(nextProps) {
        if (nextProps.addTaskRedirected) {
            this.props.router.push('/show');
            //果然,要去阻止 登录页和首页来回跳
            this.props.stopRedirect();
        }
    }

    handleComment(id) {
        let content = this.state.comment;
        let username = this.props.nav;
        this.props.onAddComment(id, username, content);
    }

    ShowByPageAdd() {
        this.props.onShowAdd(this.props.ShowAllTasks.index);
    }

    ShowByPageSub() {
        this.props.onShowSub(this.props.ShowAllTasks.index);
    }

    render() {
        let content = this.props.ShowAllTasks.data.map((ele, index)=> {
            let fromNow = moment(ele.regtime).fromNow();
            return (
                <div key={index} className="border">
                    <div className="row">
                        <div className="col-md-1">
                            <Link to={`/strangerInfo/` + ele.username}>{ele.username} </Link>
                        </div>
                        <div className="col-md-3 col-md-offset-1">
                            {ele.content}
                        </div>
                        <div className="col-md-4 ">
                            <span><img src="../../images/闹钟.png" width="30" height="30"/></span>
                            {fromNow}
                        </div>
                        <div className="col-md-3">
                            {/*button trigger modal*/}
                            <button type="button" className="btn btn-primary " data-toggle="modal"
                                    data-target="#myModal" data-backdrop="true">
                                评论
                            </button>
                            {/*Modal*/}
                            <div className="modal fade" id="myModal" tabIndex="-1" role="dialog"
                                 aria-labelledby="myModalLabel">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <button type="button" className="close" data-dismiss="modal"
                                                    aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                        </div>
                                        <div className="modal-body">
                                            <textarea rows="5" cols="30" placeholder="#说点什么吧" value={this.state.comment}
                                                      onChange={this.handleChange.bind(this)}> </textarea>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-default" data-dismiss="modal">取消
                                            </button>
                                            <button type="button" className="btn btn-primary"
                                                    onClick={this.handleComment.bind(this, ele._id)}>发表评论
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link to={`/detailTask/` + ele._id}>查看评论</Link>
                        </div>
                    </div>
                    <br/>
                </div>
            )
        });
        return (
            <div>
                <AddTask />
                {content}
                <nav>
                    <ul className="pager">
                        <li id="older"><a onClick={this.ShowByPageSub.bind(this)}>← 上一页</a></li>
                        <li id="newer"><a onClick={this.ShowByPageAdd.bind(this)}>下一页 →</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}
