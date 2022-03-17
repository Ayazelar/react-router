import React from 'react';
import {Outlet, Route,Routes,Link} from 'react-router-dom'
import Pageone from './Pageone';
import Pagetwo from './Pagetwo';

function Multiple(){

        
    return(
        <div>
            <h1>Multiple</h1><br />
            <div className="multiple" style={{width:'100%',display:'flex'}}>
                <ul>
                    <li><Link to="/multiple/pageone">Multiple Page 1</Link></li>
                    <li><Link to="/multiple/pagetwo">Multiple Page 2</Link></li>
                </ul>
            <Routes>
            
                    <Route path="/pageone" element={<Pageone />} />
                    <Route path="/pagetwo" element={<Pagetwo />} />
          
            </Routes>
                {/* <div className="right" style={{width:'50%',background:'#f6f6f6',height:'400px'}}></div> */}
            </div>
            <Outlet />
        </div>
    )
}

export default Multiple;
