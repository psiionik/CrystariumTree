import React from 'react'
import "./Navbars.scss"

export default class Navbar extends React.Component {
    constructor(props: any){
        super(props);
    }

    render() {
        return (
            <div className="background">
                <div className="nav-box-1">
                    <p className="text" style={{fontSize: "30px"}}>Branden Kim</p>
                </div>
                <div className="nav-box-2">
                    <p className="text">Crystarium Tree</p>
                    <p className="text" style={{marginLeft: "5%"}}>Blogs</p>
                    <p className="text" style={{marginLeft: "5%"}}>Projects</p>
                    <p className="text" style={{marginLeft: "5%"}}>About</p>
                </div>
            </div>
        )
    }
}
