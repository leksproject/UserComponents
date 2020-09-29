import React from 'react';
import './UserOutput.css'

const UserOutput=(props)=>{

    console.log("username",props.username);

    return(
        <div className="UserOutput">
            <p>This is sample text</p>
            <p>Username : {props.username}</p>
            <p>This is trial version</p>
        </div>
    )


}

export default UserOutput;