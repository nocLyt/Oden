import React from "react";
import { render } from "react-dom";


class App extends React.PureComponent {
    render() {
        return (
            <div> Hello World </div>
        )
    }
}

render(<App />, document.getElementById("app"));