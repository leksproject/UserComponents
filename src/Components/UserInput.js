import React from 'react';

const userInput = (props) => {
    const inputstyle = {
        border : '1px solid blue'
    }
    return(
        <div>
            <input type="text" 
            style={inputstyle}
            onChange={props.change}
            value={props.currentval}/>
        </div>
    )
}

export default userInput;