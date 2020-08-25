import React from 'react';

const Child =(props)=>{
    return(
        <div>
            <button onClick={props.greatParents}>Greet Parents</button>
        </div>
    )

}
    

export default Child;