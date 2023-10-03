import './navbar.scss'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ExtensionIcon from '@mui/icons-material/Extension';
import CropFreeIcon from '@mui/icons-material/CropFree';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SettingsIcon from '@mui/icons-material/Settings';
const Navbar = () => {
  return (
    <div className="navbar">

      <div className="navbar_logo">
        <img src="logo.svg" alt="" />
        <Link to='/'>Lil snake</Link>
      </div>

      <div className='navvar_right'>
        <SearchIcon className='icon' />
        <ExtensionIcon className='icon' />
        <CropFreeIcon className='icon' />
        <div className='messages'>
        <ChatBubbleOutlineIcon className='icon'/>
        <span>1</span>
        </div>
        
        <div className='user'>
          <img src="noavatar.png" alt="" />
          <span>username</span>
        </div>
        <SettingsIcon  className='icon'/>
      </div>
    </div>
  )
}

export default Navbar