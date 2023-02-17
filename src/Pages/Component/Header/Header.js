import React from 'react'
import { MdClose } from "react-icons/md";
import BurgerMenu from '../../../Assets/Images/BurgerMenu.png'
import Notification from '../../../Assets/Images/Notification.png'
import Line from '../../../Assets/Images/Line.png'
import Logoryder from '../../../Assets/Images/Logo-ryder.png'
import Singin from '../../../Assets/Images/Singin.png'
import Login from '../../../Assets/Images/Login.png'

import BurgerAlliance from '../../../Assets/Images/BurgerAlliance.png'
import BurgerContact from '../../../Assets/Images/BurgerContact.png'
import BurgerDownload from '../../../Assets/Images/BurgerDownload.png'
import BurgerHistory from '../../../Assets/Images/BurgerHistory.png'
import BurgerMoneyback from '../../../Assets/Images/BurgerMoneyback.png'
import BurgerPlayGame from '../../../Assets/Images/BurgerPlayGame.png'
import BurgerPromotion from '../../../Assets/Images/BurgerPromotion.png'

function Header() {
  return (
    <>
      <div className='bg-main-header'>
        <div className='section-main-header'>
          <div className="d-flex align-items-center">
            <img data-toggle="modal" data-target="#exampleModal" className="burgerbar" src={BurgerMenu} alt="..."></img>
            <a href='https://game.ryder365.com/'><img src={Notification} alt="..."></img></a>
            <a href='https://lin.ee/VYUt69n' className="pc"><img src={Line} alt="..."></img></a>
          </div>
          <div className="main-header-center">
            <a href='/' ><img src={Logoryder} alt="..."></img></a>
          </div>
          <div className="pc">
            <a href='https://game.ryder365.com/' className='me-3'><img src={Singin} alt="..."></img></a>
            <a href='https://game.ryder365.com/'><img src={Login} alt="..."></img></a>
          </div>
        </div>
      </div>



      <div className='modal fade' id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content bg-modal-bar'>
            <div class="modal-header">
              <button type="button" class="close-btn" data-dismiss="modal" aria-label="Close"><MdClose /></button>
            </div>
            <div className='modal-body'>
              <div className='session-menu-bar mb-3'>
                <a href="https://game.ryder365.com/login" >
                  <img src={BurgerPlayGame} className='Burger-Image' alt="logo" />
                </a>

                <a href="https://game.ryder365.com/login" >
                  <img src={BurgerMoneyback} className='Burger-Image' alt="logo" />
                </a>

              </div>
              <div className='session-menu-bar mb-3'>
                <a href="https://game.ryder365.com/login" >
                  <img src={BurgerHistory} className='Burger-Image' alt="logo" />
                </a>
                <a href="/promotion" >
                  <img src={BurgerPromotion} className='Burger-Image' alt="logo" />
                </a>
              </div>
              <div className='session-menu-bar mb-3'>
                <a href="https://game.ryder365.com/login" >
                  <img src={BurgerAlliance} className='Burger-Image' alt="logo" />
                </a>
                <a href="https://game.ryder365.com/login" className='border-session-menu-bar-2'>
                  <img src={BurgerContact} className='Burger-Image' alt="logo" />
                </a>
              </div>
              <div className='session-menu-bar mb-3'>
                <a href="https://game.ryder365.com/login" >
                  <img src={BurgerDownload} className='Burger-Image' alt="logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header