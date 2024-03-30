import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header(props) {
    const location = useLocation();
    const handleLogout = () => {
        axios.post('/api/logout') 
            .then(response => {
                window.localStorage.removeItem('token')
                window.location.href = `/#/login`
            })
            .catch(error => {
            });
    };
    const [isSidebarOpen, setSidebarOpen] = useState(false)
    const toggleSidebar = () =>{
        setSidebarOpen(!isSidebarOpen)
    }
    useEffect(() => {
        props.setSidebarOpen(isSidebarOpen)
    },[isSidebarOpen])
    return (
        <>
            <header id="page-topbar">
                <div className="navbar-header">
                    <div className="d-flex">
                        <div className={`navbar-brand-box ${isSidebarOpen ? 'openside' : 'closeside'}`}>
                            {/* <a >sjlfjdsl</a> */}
                            <a href="index.html" className="logo logo-dark">
                                <span className="logo-sm">
                                    <img src="assets/images/logo.svg" alt="" height={22} />
                                </span>
                                <span className="logo-lg">
                                    <img src="assets/images/logo-dark.png" alt="" height={19} />
                                </span>
                            </a>
                            <a href="index.html" className="logo logo-light">
                                <span className="logo-sm">
                                    <img src="assets/images/logo-light.svg" alt="" height={22} />
                                </span>
                                <span className="logo-lg">
                                    <img src="assets/images/logo-light.png" alt="" height={19} />
                                </span>
                            </a>
                        </div>
                        <button
                            onClick={toggleSidebar}
                            type="button"
                            className="btn btn-sm px-3 font-size-16 header-item waves-effect border-0"
                            id="vertical-menu-btn"
                        >
                            {/* {isSidebarOpen ? "cc" : <i className="fa fa-fw fa-bars" />} */}
                            <i className="fa fa-fw fa-bars" />
                        </button>

                    </div>
                    <div className="d-flex">
                        <div className="dropdown d-inline-block d-lg-none ms-2">
                            <button
                                type="button"
                                className="btn header-item noti-icon waves-effect border-0"
                                id="page-header-search-dropdown"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <i className="mdi mdi-magnify" />
                            </button>
                            <div
                                className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                                aria-labelledby="page-header-search-dropdown"
                            >
                                <form className="p-3">
                                    <div className="form-group m-0">
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Search ..."
                                                aria-label="Recipient's username"
                                            />
                                            <div className="input-group-append">
                                                <button className="btn btn-primary" type="submit">
                                                    <i className="mdi mdi-magnify" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div>
                            <Link to="/dashboard/crmentry"  className='btn btn-info rounded-pill px-4 m-3 border border-0'>Entry</Link>
                        </div>
                        <div>
                            <button onClick={handleLogout} className='btn btn-info rounded-pill px-4 m-3 border border-0'>Logout</button>
                        </div>

                        <div className="dropdown d-inline-block">
                            <button
                                type="button"
                                className="btn header-item waves-effect border-0"
                                id="page-header-user-dropdown"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <img
                                    className="rounded-circle header-profile-user"
                                    src="assets/images/users/avatar-1.jpg"
                                    alt="Header Avatar"
                                />
                                <span className="d-none d-xl-inline-block ms-1" key="t-henry">
                                    Henry
                                </span>
                                <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">
                                {/* item*/}
                                <a className="dropdown-item" href="#/">
                                    <i className="bx bx-user font-size-16 align-middle me-1" />{" "}
                                    <span key="t-profile">Profile</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="bx bx-wallet font-size-16 align-middle me-1" />{" "}
                                    <span key="t-my-wallet">My Wallet</span>
                                </a>
                                <a className="dropdown-item d-block" href="#">
                                    <span className="badge bg-success float-end">11</span>
                                    <i className="bx bx-wrench font-size-16 align-middle me-1" />{" "}
                                    <span key="t-settings">Settings</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="bx bx-lock-open font-size-16 align-middle me-1" />{" "}
                                    <span key="t-lock-screen">Lock screen</span>
                                </a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item text-danger" href="#">
                                    <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />{" "}
                                    <span key="t-logout">Logout</span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header