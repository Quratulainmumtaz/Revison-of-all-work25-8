import React, { Component } from 'react';
import LifecycleB from './LifecycleB';

class LifecycleA extends Component{
    constructor(props){
        super(props)
        console.log('[Lifecycle.js] constructor');

        
    }
  
    state={
        username:'Qurat'
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
      }
    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate');
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecycleA  getSnapshotBeforeUpdate');
        return null
    }
    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate');
    }
    lifeChangeHandler=()=>{
        this.setState({
            name:'Mumtaz'
        })
    }
    
    render(){
        console.log('Lifecycle.js  render')
        return(
            <div>Lifecycle A
                  <LifecycleB />
                  <button onClick={this.lifeChangeHandler}>On cahnge </button>
            </div>
          
            
        );
    }
}

export default LifecycleA;