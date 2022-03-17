import React from 'react';
import { Outlet, Route, Routes, Link } from 'react-router-dom'

function Outlet_() {

    return (
        <div>
            <h1>Outlet</h1><br />
            <nav>
                <Link to="/outlet">Parent</Link>
                <Link to="/outlet/child">Child</Link>
            </nav>
            <Routes>
                <Route path="/*" element={<ParentComponent />}>
                    <Route path="child" element={<ChildComponent />} />
                </Route>
            </Routes>
        </div>
    )
}
function ParentComponent() {
    return <div>
        <h1>i am parent component</h1>
        <Outlet />
    </div>;
}
function ChildComponent() {
    return <div>
        <h1>i am child component</h1>
    </div>;
}
export default Outlet_;
