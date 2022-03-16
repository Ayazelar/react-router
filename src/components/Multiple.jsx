import React from 'react';
import {Route,Routes} from 'react-router-dom'
import Left from './Left';
import Pageone from './Pageone';

function Multiple(){

        
    return(
        <div>
            <h1>Multiple</h1><br />
            <div className="multiple" style={{width:'100%',display:'flex'}}>
            <Routes>
             <Route path="/" element={<Left />} />
             <Route exact path="/home" element={<Pageone />} />
          
            </Routes>
                {/* <div className="right" style={{width:'50%',background:'#f6f6f6',height:'400px'}}></div> */}
            </div>
        </div>
    )
}

export default Multiple;
