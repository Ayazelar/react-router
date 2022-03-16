import React from 'react';
import {useNavigate} from 'react-router-dom'

function Pageone(){

    let navigate = useNavigate();

    return(
        <div>
        <h1>Pageone</h1><br />
        <button onClick={() => navigate(-1)}>Go back</button>
        <button onClick={()=> navigate('/pagetwo')}>Navigate to Page 2</button>
        <button onClick={() => navigate(+1)}>Go Next</button>
        </div>
    )
}

export default Pageone;
