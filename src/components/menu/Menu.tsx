import React from 'react'
import './menu.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';
import AdUnitsOutlinedIcon from '@mui/icons-material/AdUnitsOutlined';
import AdbOutlinedIcon from '@mui/icons-material/AdbOutlined';
import {Link } from 'react-router-dom'
const Menu = () => {
  return (
    <div className='menu'>
      <div className="menuItem">
        <span className='menuTitle'>MAIN</span>
        <Link to='/'>
        <div className="item">
          
          <HomeOutlinedIcon />
          <span>HomePage</span>
          
        </div>
        </Link>
        <Link to='/'>
        <div className="item">
          <GroupOutlinedIcon />
          <span>Profile</span>
        </div>
        </Link>
      </div>

      <div className="menuItem">
        <span className='menuTitle'>LISTS</span>
        <Link to='/users'>
        <div className="item">
          <PeopleOutlineOutlinedIcon />
          <span>Users</span>
        </div>
        </Link>
        <Link to='/products'>
        <div className="item">
          <Inventory2OutlinedIcon />
          <span>Products</span>
        </div>
        </Link>
      </div>


      <div className="menuItem">
        <span className='menuTitle'>OTHERS</span>
        <div className="item">
          <InventoryOutlinedIcon />
          <span>card</span>
        </div>
        <div className="item">
          <AccessAlarmOutlinedIcon />
          <span>access</span>
        </div>
      </div>
      <div className="menuItem">
        <span className='menuTitle'>OTHERS</span>
        <div className="item">
          <AdUnitsOutlinedIcon />
          <span>phone</span>
        </div>
        <div className="item">
          <AdbOutlinedIcon />
          <span>Adb</span>
        </div>
        <div className="item">
          <GroupOutlinedIcon />
          <span>Profile</span>
        </div>
        <div className="item">
          <GroupOutlinedIcon />
          <span>Profile</span>
        </div>
        <div className="item">
          <GroupOutlinedIcon />
          <span>Profile</span>
        </div>
        <div className="item">
          <GroupOutlinedIcon />
          <span>Profile</span>
        </div>
        <div className="item">
          <GroupOutlinedIcon />
          <span>Profile</span>
        </div>

      </div>


    </div>
  )
}

export default Menu