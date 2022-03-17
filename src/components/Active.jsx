import React from 'react';
import {NavLink} from 'react-router-dom'

function Active(){

    let links = ['one','two','three','four']
    return(
        <div>
            
            <h1>Active</h1><br />
            <ul>
                {links.map(el=>
                    <NavLink
                    style={({ isActive }) => {
                      return {
                        display: "block",
                        margin: "1rem 0",
                        color: isActive ? "red" : "",
                      };
                    }}
                    to={`/active/${el}`}
                    key={el}
                  >{el}</NavLink>
                  )}
            </ul>
        </div>
    )
}

export default Active;
