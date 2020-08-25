import React from 'react';
import Person from './Person';

const Namelist=()=>{
    const Persons =[{
        id: 1,
        name:'Qurat',
        age:25,
        skill:'React'
    },
    {
        id: 2,
        name:'Mumtaz',
        age:30,
        skill:'React'
    },
    {
        id:3,
        name:'Qurat',
        age:25,
        skill:'React'
    }]
const NewList = Persons.map(person =><Person person={person}/>);
    return(
        <div>
          {NewList} 
        </div>
    );
}

export default Namelist;