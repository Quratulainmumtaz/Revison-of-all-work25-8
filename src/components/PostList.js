import React, { Component } from 'react';
import axios from 'axios';
class ProList extends Component{

    state={
        Posts:[]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response=>{
            console.log(response);
            this.setState({
                Posts:response.data
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }
    render(){
        const {Posts} = this.state
        return(
            
            <div>
                List of Post{Posts.length? Posts.map(post => <div key={post.id}>{post.title}</div>):null} 
                  
                
            </div>
        );
    }
}
export default ProList;