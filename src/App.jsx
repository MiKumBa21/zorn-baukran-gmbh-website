import React, { Component } from 'react';
import NavBar from "./Components/NavBar/navBar.jsx";
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css';
class App extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className="header">
                    
                    <NavBar />
                </div>

            </React.Fragment>
        );
    }
}
export default App; 