import React, { useState } from 'react'
import { Col, Row } from 'antd';
import { css } from '@emotion/css'
import { Alert } from 'antd';
import Marquee from 'react-fast-marquee';
import CarouselCard from "./Component/carouselCard";
import ContentMenu from "./Component/contentMenu";
import Singin from '../../../Assets/Images/Singin.png'
import Login from '../../../Assets/Images/Login.png'
import Line from '../../../Assets/Images/ButtonState.png'
import BtnClose from '../../../Assets/Images/Close.png'


function Index() {
    const [close, setClose] = useState(true)

    return (
        <>
            <div className='home-image'>
                <div className='mb mt-4'>
                    <div className="d-flex justify-content-center align-items-center">
                        <a href='https://game.ryder365.com/register' className='me-3'><img src={Singin} className={css`width:100%;
                      
                        }`} alt="..."></img></a>
                        <a href='https://game.ryder365.com/login'><img src={Login} className={css`width:100%;
                         
                        }`} alt="..."></img></a>
                    </div>
                </div>
                <div className="mb">
                    {close === true ? <>

                        <div className="alert-home">
                            <div className="alert-marquee"><Alert
                                message={
                                    <Marquee pauseOnHover gradient={false} speed={70} className="alert-message">
                                        เว็บพนันอันดับ 1 ที่มีครบจบที่เดียวให้นึกถึง RYDER365 เว็บพนันออนไลน์ที่มีทั้งเกมส์ กีฬา คาสิโน หวย พร้อมด้วยโปรโมชั่นมากมาย ที่รองรับการเล่นของสมาชิกทุกท่าน บริการรวดเร็วทันใจด้วยระบบ Auto แอดมินบริการ 24 ชม. ติดปัญหาส่วนใดเเจ้งแอดมินได้ตลอดเลย
                                    </Marquee>
                                }
                            />
                                <img src={BtnClose} onClick={() => setClose(false)} className='icon-close' alt="..." />
                            </div>
                        </div>
                    </> : null


                    }

                </div>

                <Row justify="center" align="top">
                    <Col xs={20} lg={9} className="carousel-mb"><CarouselCard /></Col>
                    <Col xs={22} lg={10}><ContentMenu /></Col>
                    <div className='mb mt-3 mx-3'>
                        <a href='https://lin.ee/VYUt69n' ><img src={Line} className={css`width:100%;
                        }`} alt="..."></img></a>

                    </div>
                </Row>

            </div>
        </>
    )
}

export default Index