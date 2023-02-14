import React from 'react'
import BurgerMenu from '../../../Assets/Images/BurgerMenu.png'
import Notification from '../../../Assets/Images/Notification.png'
import Line from '../../../Assets/Images/Line.png'
import Logoryder from '../../../Assets/Images/Logo-ryder.png'
import Singin from '../../../Assets/Images/Singin.png'
import Login from '../../../Assets/Images/Login.png'

function Header() {
  return (
    <>
      <div className='bg-main-header'>
        <div className='section-main-header'>
          <div className="d-flex align-items-center">
            <a href='/'><img src={BurgerMenu} alt="..."></img></a>
            <a href='https://game.ryder365.com/'><img src={Notification} alt="..."></img></a>
            <a href='https://game.ryder365.com/' className="pc"><img src={Line} alt="..."></img></a>
          </div>
          <div>
            <a href='/' ><img src={Logoryder} alt="..."></img></a>
          </div>
          <div className="pc">
            <a href='https://game.ryder365.com/' className='me-3'><img src={Singin} alt="..."></img></a>
            <a href='https://game.ryder365.com/'><img src={Login} alt="..."></img></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header