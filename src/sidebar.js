import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink, Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
            <CDBSidebar textColor="#fff" backgroundColor="green">

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <Link to="/m" >
                            <CDBSidebarMenuItem ><img src="https://upload.wikimedia.org/wikipedia/commons/b/be/Naava_logo.jpg" style={{ width: "180px", height: "50px" }} /></CDBSidebarMenuItem>
                        </Link >
                        <hr style={{ position: "relative", top: "10px", border: "none", height: "3px", background: "white", margin: "none" }} />
                        <NavLink exact to="/jjj" activeClassName="activeClicked">
                            <CDBSidebarMenuItem style={{ marginTop: "20px" }}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT39WgeYcnt2O6za60KmSy02znNkqoy5kgXow&usqp=CAU" style={{ width: "30px", height: "30px", borderRadius: "50%", marginRight: "20px" }} />
                                Kishor Kumar
                                <i className="fa-solid fa-angle-down" style={{ marginLeft: "20px" }}></i><br>
                                </br><span style={{ marginLeft: "50px", opacity: "0.5" }}>Student</span>
                            </CDBSidebarMenuItem>

                        </NavLink>
                        <hr style={{ position: "relative", top: "10px", border: "none", height: "3px", background: "white", margin: "none" }} />

                        <Link exact to="/" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="home">Dashboard</CDBSidebarMenuItem>
                        </Link>
                        <NavLink exact to="/tables" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="table">Approvals</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/profile" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user">Contact Us</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/analytics" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="chart-line">Members</CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
            </CDBSidebar>
        </div>


    );
};

export default Sidebar;