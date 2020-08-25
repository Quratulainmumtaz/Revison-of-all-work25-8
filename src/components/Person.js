import React from 'react';

const Person =({person})=>{
    return(
        <h2>i am {person.name} i am {person.age} year old  i know {person.skill}</h2>
    );

}

export default Person;
