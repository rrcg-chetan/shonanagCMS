import React, { useState } from 'react';
import "./NavBar.css";
import classnames from 'classnames';

const DashboardNavBar = () => {
   const [collapse, setCollapse] = useState(false);
   const [collapseInvoice, setCollapseInvoice] = useState(false);

   const openCollapse = (e) => {
      e.preventDefault();
      setCollapse(!collapse);
   }
   const openCollapseInvoice = (e) => {
      e.preventDefault();
      setCollapseInvoice(!collapseInvoice);
   }
    return(
        <div>   
   <div className="shadow-bottom"></div>
   <div className="scrollbar-container main-menu-content ps ps--active-y">
      <ul className="navigation navigation-main">
         <li className="">
         <a className="d-flex align-items-center" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
               </svg>
               <span className="menu-title text-truncate">Administrator</span></a>
         </li>
         <li className="nav-item">
            <a className="d-flex align-items-center" href="#">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
               </svg>
               <span className="menu-item text-truncate">Database Information</span>
            </a>
         </li>
         <li className="nav-item">
            <a className="d-flex align-items-center" href="/users">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
               </svg>
               <span className="menu-item text-truncate">Users</span>
            </a>
         </li>
         <li className="nav-item">
            <a className="d-flex align-items-center" href="#">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
               </svg>
               <span className="menu-item text-truncate">Countries</span>
            </a>
         </li>
         <li className="nav-item">
            <a className="d-flex align-items-center" href="#">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
               </svg>
               <span className="menu-item text-truncate">Centers</span>
            </a>
         </li>
         <li className="nav-item">
            <a className="d-flex align-items-center" href="#">
               <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="4 7 4 4 20 4 20 7"></polyline>
                  <line x1="9" y1="20" x2="15" y2="20"></line>
                  <line x1="12" y1="4" x2="12" y2="20"></line>
               </svg>
               <span className="menu-item text-truncate">Message to Users</span>
            </a>
         </li>
         <li className="nav-item">
            <a className="d-flex align-items-center" href="#">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
               </svg>
               <span className="menu-item text-truncate">Welcome Message</span>
            </a>
         </li>
         <li className="nav-item">
            <a className="d-flex align-items-center" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
               </svg>
               <span className="menu-item text-truncate">Admin Email</span>
            </a>
         </li>
         <li className="nav-item has-sub">
            <a className="d-flex align-items-center" href="/">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                  <line x1="1" y1="10" x2="23" y2="10"></line>
               </svg>
               <span className="menu-title text-truncate">Documents</span>
            </a>
            <ul className="menu-content">
               <div className="collapse">
                  <li className="nav-item">
                     <a className="d-flex align-items-center" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                           <circle cx="12" cy="12" r="10"></circle>
                        </svg>
                        <span className="menu-item text-truncate">Protocols</span>
                     </a>
                  </li>
                  <li className="nav-item">
                     <a className="d-flex align-items-center" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                           <circle cx="12" cy="12" r="10"></circle>
                        </svg>
                        <span className="menu-item text-truncate">Payment Information Sheet</span>
                     </a>
                  </li>
                  <li className="nav-item">
                     <a className="d-flex align-items-center" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                           <circle cx="12" cy="12" r="10"></circle>
                        </svg>
                        <span className="menu-item text-truncate">Consent Form</span>
                     </a>
                  </li>
               </div>
            </ul>
         </li>
         <li className="nav-item">
            <a className="d-flex align-items-center" href="#">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
               </svg>
               <span className="menu-item text-truncate">Data Export</span>
            </a>
         </li>  
         <li className={classnames('nav-item has-sub', {'open menu-collapsed-open sidebar-group-active': collapseInvoice })}>
            <a className="d-flex align-items-center" href="/" onClick={openCollapseInvoice}>
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
               </svg>
               <span className="menu-title text-truncate">Dropdowns</span>
            </a>
            <ul className="menu-content">
               <div className="">
                  <li className="nav-item">
                     <a className="d-flex align-items-center" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                           <circle cx="12" cy="12" r="10"></circle>
                        </svg>
                        <span className="menu-item text-truncate">Drp 1</span>
                     </a>
                  </li>
                  <li className="nav-item">
                     <a className="d-flex align-items-center" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                           <circle cx="12" cy="12" r="10"></circle>
                        </svg>
                        <span className="menu-item text-truncate">Drp 2</span>
                     </a>
                  </li>
                  <li className="nav-item">
                     <a className="d-flex align-items-center" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                           <circle cx="12" cy="12" r="10"></circle>
                        </svg>
                        <span className="menu-item text-truncate">Drp 3</span>
                     </a>
                  </li>
                  <li className="nav-item">
                     <a className="d-flex align-items-center" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                           <circle cx="12" cy="12" r="10"></circle>
                        </svg>
                        <span className="menu-item text-truncate">Drp 4</span>
                     </a>
                  </li>
               </div>
            </ul>
         </li>       
      </ul>
      <div className="ps__rail-x">
         <div className="ps__thumb-x" tabIndex="0"></div>
      </div>
      <div className="ps__rail-y">
         <div className="ps__thumb-y" tabIndex="0"></div>
      </div>
   </div>
</div>
    )
}

export default DashboardNavBar;