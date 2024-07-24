import React from 'react'
import '../pages/Dashbord.css'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
  <div >
      <nav className='dashboard'>
        <div className='navdiv'>
          <h1>DASHBOARD</h1>
        </div>
      </nav>
      <div>
      <div className='sideout'>
        <div className='sidebar'>
          <Link to={"/"}><p>PROFILE</p></Link>
          <Link to={"messages"}><p>MESSAGES</p></Link>
          <Link to={"blogs"}><p>BLOGS</p></Link>
          <Link to={"settings"}><p>SETTINGS</p></Link>
        </div>
        <div className='outlet'><Outlet /></div>

      </div>
      
      </div>
    </div>
  )
}




export default Dashboard