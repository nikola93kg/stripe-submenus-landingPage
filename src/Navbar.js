import React from 'react'
import { useGlobalContext } from './context'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'

function Navbar() {

    const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
    const displaySubmenu = (e) => {
        const page = e.target.textContent;
        const tempBtn = e.target.getBoundingClientRect();
        const center = (tempBtn.left + tempBtn.right) / 2 //ovako dobijamo centar btn-a tako da znamo kuda ce se kretati submenu
        const bottom = tempBtn.bottom - 3; // ovako podizemo meni 3px gore

        openSubmenu(page, { center, bottom })
    }

    const handleSubmenu = (e) => {
        if (!e.target.classList.contains('link-btn')) {
            closeSubmenu()
        }
    }

    return (
        <nav className="nav" onMouseOver={handleSubmenu}>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} alt="stripe logo" className='nav-logo' />
                    <button className="btn toggle-btn" onClick={openSidebar}>
                        <FaBars />
                    </button>
                </div>
                <ul className="nav-links">
                    <li><button className="link-btn" onMouseOver={displaySubmenu}>products</button></li>
                    <li><button className="link-btn" onMouseOver={displaySubmenu}>developers</button></li>
                    <li><button className="link-btn" onMouseOver={displaySubmenu}>company</button></li>
                </ul>
                <button className="btn signin-btn">Sign in</button>
            </div>
        </nav>
    )
}

export default Navbar