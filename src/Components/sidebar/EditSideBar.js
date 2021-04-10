import { Fragment, useState, useRef } from 'react'

import './SideBar.css'
import logo from '../../assets/logo.svg';
import NavBar from '../navbar/NavBar'
import classnames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'
import EditNavBar from '../navbar/EditNavBar';


const EditSideBar = props => {
  const state = {
    isMenuExpanded:false
  };
  // ** Props
  const { menuCollapsed, menu, skin } = props

  // ** States
  const [groupOpen, setGroupOpen] = useState([])
  const [groupActive, setGroupActive] = useState([])
  const [activeItem, setActiveItem] = useState(null)

  // ** Menu Hover State
  const [menuHover, setMenuHover] = useState(false)
  const [sidebar, setSidebar] = useState(false)

  // ** Ref
  const shadowRef = useRef(null)

  // ** Function to handle Mouse Enter
  const onMouseEnter = () => {
    if (menuCollapsed) {
      setMenuHover(true)
    }
  }

    const openSidebar = () => {                
        setSidebar(!sidebar);      
        console.log(sidebar);  
    }

    const closeSidebar = () => {        
        setSidebar(!sidebar); 
        console.log(sidebar);                                     
    }

  // ** Scroll Menu
  const scrollMenu = container => {
    if (shadowRef && container.scrollTop > 0) {
      if (!shadowRef.current.classList.contains('d-block')) {
        shadowRef.current.classList.add('d-block')
      }
    } else {
      if (shadowRef.current.classList.contains('d-block')) {
        shadowRef.current.classList.remove('d-block')
      }
    }
  }

  return (
    <Fragment>
      <div className={classnames('wrapper vertical-layout navbar-floating footer-static vertical-menu-modern menu-hide', {'menu-expanded': sidebar, 'menu-hide': !sidebar})}>
      <div
        className={classnames('main-menu menu-fixed menu-accordion menu-shadow', {
          expanded: menuHover || menuCollapsed === false,
          'menu-light': skin !== 'semi-dark' && skin !== 'dark',
          'menu-dark': skin === 'semi-dark' || skin === 'dark'
        })}
        onMouseEnter={onMouseEnter}
        onMouseLeave={() => setMenuHover(false)}
      >
        {menu ? (
          menu
        ) : (
          <Fragment>            
            <div className="navbar-header">
      <ul className="nav navbar-nav flex-row">
         <li className="nav-item mr-auto">
            <a aria-current="page" className="navbar-brand active" href="/">
               <h2 className="brand-text mb-0">River Route</h2>
            </a>
         </li>
         <li className="nav-item nav-toggle">
            <div className="nav-link modern-nav-toggle cursor-pointer">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-tour="toggle-icon" className="text-primary toggle-icon d-none d-xl-block">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="3"></circle>
               </svg>
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="toggle-icon icon-x d-block d-xl-none" onClick={closeSidebar}>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
               </svg>
            </div>
         </li>
      </ul>
   </div>
   
            <div className='shadow-bottom' ref={shadowRef}></div>
            <PerfectScrollbar
              className='main-menu-content'
              options={{ wheelPropagation: false }}
              onScrollY={container => scrollMenu(container)}
            >
              <ul className='navigation navigation-main'>
                <EditNavBar />
              </ul>
            </PerfectScrollbar>
          </Fragment>
        )}
      </div>
      </div>
      <nav className="header-navbar navbar align-items-center floating-nav navbar-shadow navbar navbar-expand-lg navbar-light">
            <div className="navbar-container d-flex content">
                <div className="bookmark-wrapper d-flex align-items-center">
                    <ul className="navbar-nav d-xl-none">
                        <li className="mobile-menu mr-auto nav-item">
                        <a className="nav-menu-main menu-toggle hidden-xs is-active nav-link" onClick={openSidebar}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ficon">
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        </a>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav bookmark-icons">
                        <li className="d-none d-lg-block nav-item">
                        <a id="email" className="d-flex align-items-center nav-link" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> <span className="menu-title text-truncate nav_text">Home</span>
                        </a>
                        </li>
                        <li className="d-none d-lg-block nav-item">
                        <a id="chat" className="nav-link" href="/apps/chat">
                            Start
                        </a>
                        </li>
                        <li className="d-none d-lg-block nav-item">
                        <a id="todo" className="nav-link" href="/apps/todo">
                            Search
                        </a>
                        </li>
                        <li className="d-none d-lg-block nav-item">
                        <a id="calendar" className="nav-link" href="/apps/calendar">
                            Alerts
                        </a>
                        </li>
                        <li className="nav-item d-none d-lg-block nav-item">
                        <a className="bookmark-star nav-link">
                            Reports
                        </a>                        
                        </li>
                    </ul>
                </div>                
            </div>
            </nav>
    </Fragment>
  )
}
export default EditSideBar;