import React from 'react'
import './MenuBar.css'

interface MenuBarProps {
  toggleSidebar: () => void;
}

const MenuBar: React.FC<MenuBarProps> = ({ toggleSidebar }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <div className="container-fluid">
                <button className="btn btn-primary" id="sidebarToggle" onClick={toggleSidebar}>
                    <i className="bi bi-list"></i>
                    </button>
                
            </div>
        </nav>
    )
}

export default MenuBar
