import React from 'react'
import Sidebar from '../components/Sidebar';
import '../Styles/Dashboard.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Sidebag from '../components/Sidebag';

const Bag = () => {
  return (
    <div className='dashboard'>
    <Sidebar className='sidebar'/>
    <div className='main-content'>
      
    </div>
    <Sidebag className='sidebag'/>
  </div>
  )
}

export default Bag