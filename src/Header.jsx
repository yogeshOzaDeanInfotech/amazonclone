import React from "react";

class Header extends React.PureComponent {

    constructor(props){
        super(props);
    }
    render() {
        console.log("header re-rendered")
        return (
            <div>
                <h1>Header : Welcome {this.props.name}</h1>
                <hr />
            </div>
        );
    }
}

export default Header;
