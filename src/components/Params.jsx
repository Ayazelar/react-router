import React from 'react';
import {useParams} from 'react-router-dom'

function Params(){

    let params = useParams();
    console.log(params);
    return(
        <div>
            <h1>Param: {params.name}</h1>
        </div>
    )
}

export default Params;
