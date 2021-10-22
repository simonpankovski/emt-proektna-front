
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {videos: []};
        
    }

    componentDidMount() {
        console.log('Click happened');
       
        fetch("http://localhost:9091/videos", {
            method: 'GET'
            
        }).then(response => response.json())
        .then(data => this.setState({videos:data}));
        }
    
render() {
    return (
        <div>
            
            
            {this.state.videos.map(name => (  
          
            <video width="400" height="400" controls>
                <source src={"http://localhost:9091/files?name="+name} type="video/mp4" />

                Your browser does not support HTML video.
            </video>
           
        ))}
        
        <Link to="/new">New video</Link>
        </div>
    )
}
}

