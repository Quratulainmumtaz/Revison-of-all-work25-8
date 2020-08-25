import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component{

    state={
        parentName: 'Parent'
    }
    

    //Event handler
    greetHandler=()=>{
        alert('Hellow' + this.state.parentName);
    }
    render(){
        return(
            <div>
                <Child  greatParents= {this.greetHandler}/>
            </div>
        );

    }
}

export default Parent;