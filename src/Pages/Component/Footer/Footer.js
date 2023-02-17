import React from 'react'
import { Col, Row } from 'antd';
import { css } from '@emotion/css'
import Wallet from '../../../Assets/Images/Wallet.png'
import Deposit from '../../../Assets/Images/Deposit.png'
import Playgame from '../../../Assets/Images/Playgame.png'
import Withdraw from '../../../Assets/Images/Withdraw.png'
import Promotion from '../../../Assets/Images/Promotion.png'

function Footer() {
        return (
                <div className='bg-main-footer'>
                        <Row justify="center" align="middle">
                                <Col span={4}><a href='https://game.ryder365.com/login'><img src={Wallet} className={css`width:100%;
              
                        }`} alt="..."></img></a></Col>
                                <Col span={4}><a href='https://game.ryder365.com/login'><img src={Deposit} className={css`width:100%;
             
                        }`} alt="..."></img></a></Col>
                                <Col span={6}> <a href='https://game.ryder365.com/login'><img src={Playgame} className={css`width:100%;
           
                        }`} alt="..."></img></a></Col>
                                <Col span={4}><a href='https://game.ryder365.com/login'><img src={Withdraw} className={css`width:100%;
               
                        }`} alt="..."></img></a></Col>
                                <Col span={4}><a href='/promotion'><img src={Promotion} className={css`width:100%;
             
                        }`} alt="..."></img></a></Col>
                        </Row>
                </div>
        )
}

export default Footer