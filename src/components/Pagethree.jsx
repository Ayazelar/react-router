import React from 'react';
import {useNavigate} from 'react-router-dom'

function Pagethree(){

    let navigate = useNavigate();
    
    return(
        <div>
        <h1>Pagethree</h1><br />
        <button onClick={() => navigate(-1)}>Go back</button>
        <button onClick={()=> navigate('/pageone')}>Navigate to Page 1</button>
        <button onClick={() => navigate(+1)}>Go Next</button>
        </div>
    )
}

export default Pagethree;
