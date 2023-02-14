import React from 'react'
import { Alert, Col, Row } from 'antd';
import { css } from '@emotion/css'
import Marquee from 'react-fast-marquee';
import CarouselCard from "./Component/carouselCard";
import ContentMenu from "./Component/contentMenu";

import Singin from '../../../Assets/Images/Singin.png'
import Login from '../../../Assets/Images/Login.png'
import Line from '../../../Assets/Images/ButtonState.png'


function index() {
    return (
        <>
            <div className='home-image'>
                <div >
                    <Alert
                        className="alert-home mb"
                        closable
                        message={
                            <Marquee pauseOnHover gradient={false} speed="50" >
                                ยินดีต้อนรับสู่ Ryder168 เล่นสล็อตวันนี้ รับโบนัสเพิ่มทันที 50%.
                            </Marquee>
                        }
                    />

                </div>



                <Row justify="center" align="middle" className='mt-5'>
                    <Col xs={22} lg={8} xl={8} justify="center" align="middle" ><CarouselCard /></Col>
                    <div className='mb mt-4 mx-3'>
                        <div className="d-flex align-items-center">
                            <a href='/' className='me-3'><img src={Singin} className={css`width:100%;
                      
                        }`} alt="..."></img></a>
                            <a href='/'><img src={Login} className={css`width:100%;
                         
                        }`} alt="..."></img></a>
                        </div>
                    </div>
                    <Col xs={22} lg={10} xl={10} className="mb-3" justify="center" align="middle"><ContentMenu /></Col>
                    <div className='mb mt-3 mx-3'>

                        <a href='/' ><img src={Line} className={css`width:100%;
                        }`} alt="..."></img></a>

                    </div>
                </Row>

            </div>
        </>
    )
}

export default index