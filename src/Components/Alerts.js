import React from "react";
import UsersData from '../Components/UsersData';

const Alerts = () => {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h3>Missing Incomplete Data Forms</h3>
                    <UsersData />
                </div>
            </div>            
        </>
    );
};

export default Alerts;