import React, {Component} from 'react';
import "./MainPage.css";
import Post from '../Post/Post';
import uploadImage from "../../images/upload.png";
import {storage} from "../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";




class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postArray: [],
            progressBar: "",
        }
    }

    componentDidMount() {
        this.getPost();
    }

    getPost = () => { //API
        const thisContext = this;
        fetch('http://localhost:8080/post')
            .then(response => response.json())
            .then(data => {
                thisContext.setState({postArray: data});
            });
    }

    upload = (event) => {
        let image = event.target.files[0];
        const thisContext = this;
        if (image == null || image == undefined)
            return;

        const storageRef = ref(storage, `files/${image.name}`);

        var uploadTask = uploadBytesResumable(storageRef, image);
        uploadTask.on(
            "state_changed",
            function (snapshot) {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                thisContext.setState({progressBar: progress});
            },
            function (error) {
                alert(error);
            },
            function () {
                getDownloadURL(uploadTask.snapshot.ref).then(function (downloadURL) {
                    console.log(downloadURL);

                    let payload = {
                        "postId": Math.floor(Math.random() * 100000).toString(),
                        "userId": JSON.parse(localStorage.getItem("users")).uid,
                        "postPath": downloadURL,
                        "timeStamp": new Date().getTime(),
                        "likeCount": 0
                    }

                    const requestOptions = {
                        method: "POST",
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(payload),
                    }

                    fetch("http://localhost:8080/post", requestOptions)
                        .then(response => response.json())
                        .then(data => {
                            console.log(data);
                            thisContext.getPost();
                        })
                        .catch(error => {
                            alert(error)
                        })

                })
            }
        );
    }

    render() {
        return (
            <div className={"mainpage__container_posts"}>
                {/*<div className="mainpage__container">*/}
                {/*    <div className="mainpage__divider"></div>*/}
                {/*    <div className="fileupload">*/}
                {/*        <label htmlFor="file-upload">*/}
                {/*            <img className="mainpage__uploadicon" src={uploadImage}/>*/}
                {/*        </label>*/}
                {/*        <input onChange={this.upload} id="file-upload" type="file"/>*/}
                {/*    </div>*/}
                {/*    <div className="mainpage__divider"></div>*/}
                {/*</div>*/}
                {/*<div className="upload_text">{this.state.progressBar}</div>*/}
                {
                    this.state.postArray.map((item, index) => (
                        <div key={index}>
                            <Post id={item.postId} userName={item.userName} postImage={item.postPath}
                                  likes={item.likeCount}/>
                        </div>

                    ))
                }
            </div>
        );
    }
}

export default MainPage;