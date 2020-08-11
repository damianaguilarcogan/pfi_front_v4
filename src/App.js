import React, {Component} from 'react';
import './App.css';
import Navbar from './components/navbar';
import LoginBox from './components/loginBox';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar/>
                <LoginBox/>
            </div>
        );
    }
}
export default App;