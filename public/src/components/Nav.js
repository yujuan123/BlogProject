import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Nav extends Component{
    componentWillMount() {
        this.props.loadUsername();
    }
    
    render(){
        const username = this.props.nav;
        return (
            <div>
                <nav className="navbar navbar-inverse" role="navigation">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link to="/"><img className="logoImg" src="../images/番茄.png" width="36"/></Link>
                        </div>
                        <span className="token">
                            <Link to="/userCenter" className={username?'':'hidden'}>{username}</Link>
                            <Link to="/show"  className={username===''?'':'hidden'}>登陆|注册</Link>
                        </span>
                    </div>
                </nav>
            </div>
        )
    }
}

