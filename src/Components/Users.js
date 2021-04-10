import React, { useState, Fragment, useEffect, ReactFragment } from 'react';
//import ReactDOM from 'react-dom';
//import NavBar from '../Components/navbar/NavBar';
import DashboardSideBar from '../Components/sidebar/DashboardSideBar';

import './mainstyle.css';
import './animate.css';
import './vertical-menu.css';
import './perfect-scrollbar.css';

import User from './User';
import { Button } from 'react-bootstrap';




  const onSubmit = async values => {

    /*if (document.getElementById("paraffin").value == '') {
      console.log('Please select a button');     
    }else{*/

    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));    
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
    /*}*/
  };

  
      const Users = () => {
       
      return (
        <div>
            <DashboardSideBar />
            <div className="content-wrapper animate__animated animate__fadeIn">
              <div className="app-content content overflow-hidden">
              <a href="/users/add"><Button className="position-right">Add New</Button></a>
                <User />
                               
              </div>
            </div>
        </div>
        
              
      );      
    }

    export default Users;