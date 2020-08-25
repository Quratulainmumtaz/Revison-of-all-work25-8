import React, { Component } from 'react';
import Hero from './Hero';
import ErrorBoundry from './ErrorBoundry';

class Mainhero extends Component{
    render(){
        return(
            <div>
                <ErrorBoundry>
            <Hero heroname="Batman">BatMan</Hero>
            </ErrorBoundry>
            <ErrorBoundry> <Hero heroname="Superman">Superman</Hero></ErrorBoundry>
            <ErrorBoundry><Hero heroname='joker'>Joker</Hero></ErrorBoundry>
           
            </div>
            
           
            
           
          
            
        );
    }
}
export default Mainhero;