import React from 'react'
import Sidebar from '../components/Sidebar';
import '../Styles/Dashboard.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Sidebag from '../components/Sidebag';
import BagItems from '../components/BagItems';

const BagPage = () => {
  return (
    <div className='dashboard'>
    <Sidebar className='sidebar'/>
    <div className='main-content'>
      <BagItems/>
    </div>
    <Sidebag className='sidebag'/>
  </div>
  )
}

export default BagPage