import React, { Component } from 'react';
import './Form.css'

class Form extends Component{
    state={
        UserName:'',
        Lastname:'',
        comment:'',
        topic:'react'
      }
      changeHandler=(event)=>{
          this.setState({
              UserName:event.target.value
          })

      }
      LastchangeHandler=(event)=>{
        this.setState({
            Lastname:event.target.value
        })

    }
      commentchangeHandler=(event)=>{
          this.setState({
              comment:event.target.value
          })
      }
      handleTopiccahnge=(event)=>{
        this.setState({
            topic:event.target.value
        })

      }
    render(){
        return(
          <form className="Form">
              <div>
                  <label>First Name</label>
                  <input type="text" value={this.state.UserName} onChange={this.changeHandler} />
              </div>
              <div>
                  <label>Last Name</label>
                  <input type="text" value={this.state.Lastname} onChange={this.LastchangeHandler} />
              </div>
              <div>
                  <label>Comment</label>
                  <textarea value={this.state.comment} onChange={this.commentchangeHandler} />
              </div>
              <div>
                  <label value> Topic</label>
                  <select value={this.state.topic}  onChange={this.handleTopiccahnge}>
                  <option value='react'>React</option>
                  <option value='python'>Python</option>
                  <option value='Rust'>RUST</option>
                    </select>
                
              </div>
          </form>
        );
    }
}

export default Form;