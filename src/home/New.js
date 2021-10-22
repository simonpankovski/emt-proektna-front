import React, { Component } from 'react'

export default class New extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }
    handleSubmit(e){
       
        window.location.href="http://localhost:3000"
    }
    render() {
        return (
            <div>
                <form method="POST" action="http://localhost:9091/" enctype="multipart/form-data">
                    <input type="file"
                        id="avatar" name="file"
                        accept="video/mp4" />
                        <input type="text" name="video" />
                    <input type="submit" onClick={this.handleSubmit}/>
                </form>
            </div>
        )
    }
}

