 import React, { Component } from 'react';
import "./InfoSection.css";
import { Avatar } from '@material-ui/core';
import imageSrc from "../../images/pp1.png"

class InfoSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {

            }
        }
    }

    componentDidMount() {
        this.getInfoSection();
    }


    getInfoSection() {
        const thisContext = this;
        fetch('http://localhost:8080/users/' + JSON.parse(localStorage.getItem("users")).uid)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                thisContext.setState({info: data});
            });
    }

    render() { 
        return ( 
        <div>
            <div className="info__container">
                <Avatar src={imageSrc} className="info__image"/>
                <div className="info_content">
                    <div className="info_username">{this.state.info.userName}</div>
                    <div className="info_description">{this.state.info.name}</div>
                </div>
            </div>
        </div> );
    }
}
 
export default InfoSection;