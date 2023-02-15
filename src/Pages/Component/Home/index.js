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
                <div className="mb">
                    {close === true ? <>

                        <div className="alert-home">
                            <div className="alert-marquee"><Alert
                                message={
                                    <Marquee pauseOnHover gradient={false} className="alert-message">
                                        ยินดีต้อนรับสู่ Ryder168 เล่นสล็อตวันนี้ รับโบนัสเพิ่มทันที 50%.
                                    </Marquee>
                                }
                            />
                                <img src={BtnClose} onClick={() => setClose(false)} className='icon-close' alt="..." />
                            </div>
                        </div>
                    </> : null


                    }

                </div>

                <Row justify="center" align="middle" className='mt-3'>
                    <Col xs={20} lg={10}><CarouselCard /></Col>
                    <div className='mb mt-4 mx-3'>
                        <div className="d-flex align-items-center">
                            <a href='/' className='me-3'><img src={Singin} className={css`width:100%;
                      
                        }`} alt="..."></img></a>
                            <a href='/'><img src={Login} className={css`width:100%;
                         
                        }`} alt="..."></img></a>
                        </div>
                    </div>
                    <Col xs={22} lg={10}><ContentMenu /></Col>
                    <div className='mb mt-3 mx-3'>

                        <a href='/' ><img src={Line} className={css`width:100%;
                        }`} alt="..."></img></a>

                    </div>
                </Row>

            </div>
        </>
    )
}

export default Index