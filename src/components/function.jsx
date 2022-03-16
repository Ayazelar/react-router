import React from 'react';
import { Link,Routes,Route } from "react-router-dom";
import Left from './Left';
import Multiple from './Multiple';
import Pageone from './Pageone';
import Pagethree from './Pagethree';
import Pagetwo from './Pagetwo';


function Function(props){


    return(
    <div>
        <ul>
            <li><Link to="/pageone">Page 1</Link></li>
            <li><Link to="/pagetwo">Page 2</Link></li>
            <li><Link to="/pagethree">Page 3</Link></li>
            <li><Link to="/multiple">Multiple</Link></li>
        </ul>
            <Routes>
                <Route path="pageone" element={<Pageone />} />
                <Route path="pagetwo" element={<Pagetwo />} />
                <Route path="pagethree" element={<Pagethree />} />
                <Route path="multiple" element={<Multiple />} />
                <Route path="left" element={<Left />} />
            </Routes>
    </div>

)
}

export default Function;
