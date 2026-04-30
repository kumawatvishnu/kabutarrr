import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './AdminPanel.css'
import SideBar from '../../components/SideBar/SideBar'
import MenuBar from '../../components/MenuBar/MenuBar'
import AddFood from './AddFood'
import ListFood from './ListFood'
import Orders from './Orders'
import { ToastContainer } from 'react-toastify'


const AdminPanel = () => {
    const [sidebarVisible, setSidebarVisible] = useState(true)

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible)
    }
    return (
        <div className="d-flex" id="wrapper">

            <SideBar sidebarVisible={sidebarVisible} />

            <div id="page-content-wrapper">

                <MenuBar toggleSidebar={toggleSidebar} />
                <ToastContainer/>
                <div className="container-fluid">
                    <Routes>
                        <Route index element={<AddFood />} />
                        <Route path='add' element={<AddFood />} />
                        <Route path='list' element={<ListFood />} />
                        <Route path='orders' element={<Orders />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default AdminPanel