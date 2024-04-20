import React, { Component } from "react";

class App extends Component {
    componentDidMount() {
        const cssUrl = "style.css";
        this.addStyle(cssUrl);
    }

    addStyle = url => {
        const style = document.createElement("link");
        style.href = url;
        style.rel = "stylesheet";
        style.async = true;

        document.head.appendChild(style);
    };

    render() {
        return <div>  </div>;
    }
}

export default App;
