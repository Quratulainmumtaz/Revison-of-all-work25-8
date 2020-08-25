import React, { Component } from 'react';


class UserGreeting extends Component{
    state={
        isLogin:false
    }
    render(){
        return this.state.isLogin?(
            <div>Well Come Qurat</div>):(
                <div>Well Come Guest</div>
            )
    }
}

export default UserGreeting;