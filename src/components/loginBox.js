import React from 'react';
import {Switch, Route} from "react-router-dom";
import Login from "./login.component";
import SignUp from "./signup.component";

class LoginBox extends React.Component {
    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">

                    <Switch>
                        <Route exact path='/' component={Login} />
                        <Route path="/sign-in" component={Login} />
                        <Route path="/sign-up" component={SignUp} />
                    </Switch>
                </div>
            </div>

        )
    }
}

export default LoginBox;