import React, { useState } from 'react';
//import ReactDOM from 'react-dom';
//import NavBar from '../Components/navbar/NavBar';
import DashboardSideBar from '../Components/sidebar/DashboardSideBar';
import UsersData from '../Components/UsersData';
import Alerts from '../Components/Alerts';
import DataQueries from '../Components/DataQueries';

import './mainstyle.css';
import './animate.css';
import './vertical-menu.css';
import './perfect-scrollbar.css';
import Documents from './Documents';
import UserData from './UserData';

  
const Dashboard = props => {
  
  return (
    <div>
        {props.logindata}
        <DashboardSideBar />
        <div className="content-wrapper animate__animated animate__fadeIn">
          <div className="app-content content overflow-hidden ">
            <UsersData />
            <div className="row match-height">
              <div className="col-md-12 col-lg-6">
                <Alerts />
              </div>
              <div className="col-md-12 col-lg-6">
                <DataQueries />
              </div>
              <div className="col-md-12 col-lg-6">
                <Documents />
              </div>
              <div className="col-md-12 col-lg-6">
                <UserData />
              </div>                
          </div>
        </div>
    </div>
    </div>
          
  );      
}

export default Dashboard;