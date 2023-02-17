import React from 'react'
import { Col, Row } from 'antd';
import { css } from '@emotion/css'
import menuGame from "../../../../Assets/Images/หมวดหมู่เกมส์.png"
import menuPlayGame from "../../../../Assets/Images/Allgame.png"
import menuSlot from "../../../../Assets/Images/Slot.png"
import menuSport from "../../../../Assets/Images/Sport.png"
import menuCasino from "../../../../Assets/Images/Casino.png"
import menuLotto from "../../../../Assets/Images/Lottery.png"


function contentMenu() {
    return (
        <>
            <div className="text-menu ">
                <img src={menuGame} className={css`width:40%;
                        }`} alt="..." />
            </div>
            <Row justify="center" align="middle" className='content-menu-row pc'>
                <Col xs={10} sm={8} lg={8} xl={8}>
                    <a href="https://game.ryder365.com/">
                        <img src={menuSlot} className={css`width:100% ; 
                        &:hover,
                        :focus {
                          box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
                          transform: translateY(-0.50em);
                        }`} alt="..." />
                    </a>
                </Col>
                <Col xs={10} sm={8} lg={8} xl={8}>
                    <a href="https://game.ryder365.com/">
                        <img src={menuSport} className={css`width:100% ; 
                        &:hover,
                        :focus {
                          box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
                          transform: translateY(-0.50em);
                        }`} alt="..." />
                    </a>
                </Col>
                <Col xs={10} sm={8} lg={8} xl={8}>
                    <a href="https://game.ryder365.com/" >
                        <img src={menuCasino} className={css`width:100% ; 
                        &:hover,
                        :focus {
                          box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
                          transform: translateY(-0.50em);
                        }`} alt="..." />
                    </a>
                </Col>
                <Col xs={10} sm={8} lg={8} xl={8}>
                    <a href="https://game.ryder365.com/">
                        <img src={menuLotto} className={css`width:100% ; 
                        &:hover,
                        :focus {
                          box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
                          transform: translateY(-0.50em);
                        }`} alt="..." />
                    </a>
                </Col>
                <Col xs={10} sm={8} lg={8} xl={8}>
                    <a href="https://game.ryder365.com/" >
                        <img src={menuPlayGame} className={css`width:100% ; 
                        &:hover,
                        :focus {
                          box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
                          transform: translateY(-0.50em);
                        }`} alt="..." />
                    </a>
                </Col>
            </Row>


            <div className='content-menu-row mb'>
                <div className='content-menu-left'>
                    <a href="https://game.ryder365.com/">
                        <img src={menuSlot} className={css`width:100% ; 
                        &:hover,
                        :focus {
                          box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
                          transform: translateY(-0.50em);
                        }`} alt="..." />
                    </a>

                    <a href="https://game.ryder365.com/" >
                        <img src={menuCasino} className={css`width:100% ; 
                        &:hover,
                        :focus {
                          box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
                          transform: translateY(-0.50em);
                        }`} alt="..." />
                    </a>

                    <a href="https://game.ryder365.com/" >
                        <img src={menuPlayGame} className={css`width:100% ; 
                        &:hover,
                        :focus {
                          box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
                          transform: translateY(-0.50em);
                        }`} alt="..." />
                    </a>
                </div>
                <div className='content-menu-right'>
                    <a href="https://game.ryder365.com/">
                        <img src={menuSport} className={css`width:100% ; 
                        &:hover,
                        :focus {
                          box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
                          transform: translateY(-0.50em);
                        }`} alt="..." />
                    </a>


                    <a href="https://game.ryder365.com/">
                        <img src={menuLotto} className={css`width:100% ; 
                        &:hover,
                        :focus {
                          box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
                          transform: translateY(-0.50em);
                        }`} alt="..." />
                    </a>
                </div>
            </div>
        </>
    )
}

export default contentMenu 