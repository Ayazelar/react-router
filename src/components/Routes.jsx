import React from 'react';
import { Link, Routes, Route } from "react-router-dom";
import Active from './Active';
import Left from './Left';
import Multiple from './Multiple';
import Outlet from './Outlet';
import Pageone from './Pageone';
import Pagethree from './Pagethree';
import Pagetwo from './Pagetwo';
import Params from './Params';
import Search from './Search';


function Function(props) {

    let name = 'Ayaz'
    return (
        <div>
            <ul>
                <li><Link to="/pageone">Page 1</Link></li>
                <li><Link to="/pagetwo">Page 2</Link></li>
                <li><Link to="/pagethree">Page 3</Link></li>
                <li><Link to="/multiple">Multiple</Link></li>
                <li><Link to={`/params/${name}`}>Params</Link></li>
                <li><Link to="/search">Search</Link></li>
                <li><Link to="/outlet">Outlet</Link></li>
                <li><Link to="/active">Active</Link></li>

            </ul>

            <Routes>
                <Route path='' element />
                <Route path="pageone" element={<Pageone />} />
                <Route path="pagetwo" element={<Pagetwo />} />
                <Route path="pagethree" element={<Pagethree />} />
                <Route path="multiple/*" element={<Multiple />} />
                <Route path="left" element={<Left />} />
                <Route path="params/:name" element={<Params />} />
                <Route path="search" element={<Search />} />
                <Route path="outlet/*" element={<Outlet />} />
                <Route path="active/*" element={<Active />} />

                <Route path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                            <img src="https://png.pngtree.com/png-vector/20200313/ourmid/pngtree-page-not-found-error-404-concept-with-people-trying-to-fix-png-image_2157908.jpg" alt="" />
                        </main>
                    }></Route>
            </Routes>
        </div>

    )
}

export default Function;
