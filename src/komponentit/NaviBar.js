import React from 'react';
import { Link } from 'react-router-dom'

export class NaviBar extends React.Component {
    render() {
        return (
            <div className="App">

                <div className="container">
                    <ul className="nav navbar-nav">
                        <li><Link to={"/home"}>Home</Link></li>
                        <li><Link to={"/register"}>Register</Link></li>
                        <li><Link to={"/login"}>Login</Link></li>
                         </ul>
                    <form className="navbar-form navbar-left" action="/action_page.php">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Search" name="search"></input>
                        </div>
                        <button type="submit" className="btn btn-default">
                        <i className="glyphicon glyphicon-search"></i></button>
                    </form>
                </div>
            </div>


    );
    }
}

