import React from "react"
import { useState } from "react";

const Navbar = ()=>{

    const[clicked,setClicked] = useState(false);

    const getUsers = ()=>{
        setClicked(true);
    }

    return(
        <div className="nav">
            <div>
                <h1>Zippy</h1>
            </div>
            <div>
                <button className="btn" onClick={getUsers}>USERS</button>
            </div>
        </div>
    )
}

export default Navbar
