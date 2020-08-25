import React, { Component } from 'react';
import Parents from './components/Parents';
import UserGreeting  from './components/UserGreeting';
import NameList from './components/Namelist';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import Mainhero from './components/Mianhero';
import ProList from './components/PostList';


import './App.css';

class App extends Component {
 
  render(){
    return (
      <div className="App">
        <Parents />
        <UserGreeting />
        <NameList />
        <Form />
        <LifecycleA />
        <Mainhero />
        <ProList />

        
        
      </div>
    );
  }
 
}

export default App;
