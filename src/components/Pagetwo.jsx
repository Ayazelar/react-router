import React from 'react';
import {useNavigate} from 'react-router-dom'


function Pagetwo(){

    let navigate = useNavigate();

    return(
        <div>
        <h1>Pagetwo</h1><br />
        <button onClick={() => navigate(-1)}>Go back</button>
        <button onClick={()=> navigate('/pagethree')}>Navigate to Page 3</button>
        <button onClick={() => navigate(+1)}>Go Next</button>
        </div>
    )
}

export default Pagetwo;
