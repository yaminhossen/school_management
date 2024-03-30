
import { useState } from 'react';
import { Link } from 'react-router-dom'

function Sidebar(props) {
    const [menuOpen1, setMenuOpen1] = useState(true)
    const [menuOpen2, setMenuOpen2] = useState(true)
    const [menuOpen3, setMenuOpen3] = useState(true)
    const [menuOpen4, setMenuOpen4] = useState(true)
    const [menuOpen5, setMenuOpen5] = useState(true)
    const toggleMenubar = (num) => {
        if (num == 1) {
            setMenuOpen1(!menuOpen1)
        }
        if (num == 2) {
            setMenuOpen2(!menuOpen2)
        }
        if (num == 3) {
            setMenuOpen3(!menuOpen3)
        }
        if (num == 4) {
            setMenuOpen4(!menuOpen4)
        }
        if (num == 5) {
            setMenuOpen5(!menuOpen5)
        }
    }

    let isSidebarOpen = props.isSidebarOpen;
    // console.log('sidebar issiedebaropen', props.isSidebarOpen);
    return (
        <>
            <div className={`sidebar ${isSidebarOpen ? 'sidebaropen' : 'closeside'}`} >
                <div className="vertical-menu" style={{ "overflowY": "scroll" }}>
                    <div data-simplebar="" className="h-100">
                        {/*- Sidemenu */}
                        <div id="sidebar-menu">
                            {/* Left Menu Start */}
                            <ul className="tismenu list-unstyled" id="side-menu">
                                <li className="nu-title" key="t-menu">
                                    Menu
                                </li>
                                <li>
                                    <a href="#/dashboard" className=" waves-effect">
                                        <i className="bx bx-home-circle" />
                                        <span key="t-dashboards">Dashboards</span>
                                    </a>
                                </li>


                                <li>
                                    <a onClick={() => toggleMenubar(1)} className="has-arrow waves-effect">
                                        <i className="bx bx-user-circle" />
                                        <span key="t-dashboards">User Management</span>
                                    </a>
                                    <ul className={`sub-menu ${menuOpen1 ? 'openmenu' : 'closemenu'}`} aria-expanded="false">
                                        <li>

                                            <Link to="/dashboard/user">User</Link>
                                        </li>


                                    </ul>
                                </li>


                            </ul>
                        </div>
                        {/* Sidebar */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar