import React from 'react'
import './SideBar.css'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/frontend_assets/assets';

interface SideBarProps {
  sidebarVisible: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ sidebarVisible }) => {
  return (
    <div className={`border-end bg-white ${sidebarVisible ? '' : 'd-none'}`} id="sidebar-wrapper">
                <div className="sidebar-heading border-bottom bg-light">
                    <img src={assets.logo} alt="Logo" className="img-fluid" />
                </div>
                <div className="list-group list-group-flush">
                    <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/admin/add">
                    <i className="bi bi-plus-circle"></i> Add Food</Link>
                    <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/admin/list">
                    <i className="bi bi-list"></i> List Food</Link>
                    <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/admin/orders">
                    <i className="bi bi-cart"></i> Orders</Link>
                </div>
            </div>
  )
}

export default SideBar
