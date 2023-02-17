import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import NewPromotion from '../../../Assets/Images/โปรโมชั่นล่าสุด.png'

import PromotionCa1 from '../../../Assets/Images/Promotion/Cryder1.png'
import PromotionCa2 from '../../../Assets/Images/Promotion/Cryder2.png'
import PromotionCa3 from '../../../Assets/Images/Promotion/Cryder3.png'
import PromotionCa4 from '../../../Assets/Images/Promotion/Cryder4.png'
import PromotionCa5 from '../../../Assets/Images/Promotion/Cryder5.png'

import PromotionLO1 from '../../../Assets/Images/Promotion/Loryder1.png'

import PromotionSL1 from '../../../Assets/Images/Promotion/Slryder1.png'
import PromotionSL2 from '../../../Assets/Images/Promotion/Slryder2.png'
import PromotionSL3 from '../../../Assets/Images/Promotion/Slryder3.png'
import PromotionSL4 from '../../../Assets/Images/Promotion/Slryder4.png'
import PromotionSL5 from '../../../Assets/Images/Promotion/Slryder5.png'
import PromotionSL6 from '../../../Assets/Images/Promotion/Slryder6.png'

import PromotionSP1 from '../../../Assets/Images/Promotion/SPryder1.png'
import PromotionSP2 from '../../../Assets/Images/Promotion/SPryder2.png'
import PromotionSP3 from '../../../Assets/Images/Promotion/SPryder3.png'
import PromotionSP4 from '../../../Assets/Images/Promotion/SPryder4.png'
import PromotionSP5 from '../../../Assets/Images/Promotion/SPryder5.png'
import PromotionSP6 from '../../../Assets/Images/Promotion/SPryder6.png'
import PromotionSP7 from '../../../Assets/Images/Promotion/SPryder7.png'
import PromotionSP8 from '../../../Assets/Images/Promotion/SPryder8.png'
import PromotionSP9 from '../../../Assets/Images/Promotion/SPryder9.png'
import PromotionSP10 from '../../../Assets/Images/Promotion/SPryder10.png'
import PromotionSP11 from '../../../Assets/Images/Promotion/SPryder11.png'
import PromotionSP12 from '../../../Assets/Images/Promotion/SPryder12.png'





export default function PromotionPage() {

    const [bannerPromotionList, setBannerPromotionList] = useState([])
    const [bannerPromotion, setBannerPromotion] = useState([])
    const [proType, setProType] = useState('all')

    const [bannerPro] = useState([
        {
            imageUrl: PromotionCa1,
            type: 'casino'
        },
        {
            imageUrl: PromotionCa2,
            type: 'casino'
        },
        {
            imageUrl: PromotionCa3,
            type: 'casino'
        },
        {
            imageUrl: PromotionCa4,
            type: 'casino'
        },
        {
            imageUrl: PromotionCa5,
            type: 'casino'
        },
        {
            imageUrl: PromotionSP1,
            type: 'sport'
        },
        {
            imageUrl: PromotionSP2,
            type: 'sport'
        },
        {
            imageUrl: PromotionSP3,
            type: 'sport'
        },
        {
            imageUrl: PromotionSP4,
            type: 'sport'
        },
        {
            imageUrl: PromotionSP5,
            type: 'sport'
        },
        {
            imageUrl: PromotionSP6,
            type: 'sport'
        },
        {
            imageUrl: PromotionSP7,
            type: 'sport'
        },
        {
            imageUrl: PromotionSP8,
            type: 'sport'
        },
        {
            imageUrl: PromotionSP9,
            type: 'sport'
        },
        {
            imageUrl: PromotionSP10,
            type: 'sport'
        },
        {
            imageUrl: PromotionSP11,
            type: 'sport'
        },
        {
            imageUrl: PromotionSP12,
            type: 'sport'
        },
        {
            imageUrl: PromotionSL1,
            type: 'slot'
        },
        {
            imageUrl: PromotionSL2,
            type: 'slot'
        },
        {
            imageUrl: PromotionSL3,
            type: 'slot'
        },
        {
            imageUrl: PromotionSL4,
            type: 'slot'
        },

        {
            imageUrl: PromotionSL5,
            type: 'slot'
        },
        {
            imageUrl: PromotionSL6,
            type: 'slot'
        },
        {
            imageUrl: PromotionLO1,
            type: 'lotto'
        },

    ])

    useEffect(() => {
        setBannerPromotionList(bannerPro)
        setBannerPromotion(bannerPro)
    }, [bannerPro])

    const updatePromotion = (proType) => {
        const promotionFilter = bannerPromotionList.filter(i => i.type === proType)
        setBannerPromotion(promotionFilter)
        setProType(proType);
    }

    const updatePromotionAll = (proType) => {
        setBannerPromotion(bannerPromotionList)
        setProType(proType);
    }


    return (
        <div className="div-main-promotion-page promotion-bg-image">
            <div className="session-title-promotion">
                <img src={NewPromotion} className="img-promotion-memu" alt="..." />
            </div>

            <div className="seesion-title-catgory">
                <div className={classNames('pro-item', {
                    'active-promotion-category': proType === 'all'
                })} onClick={() => {
                    updatePromotionAll('all');
                }}>
                    <p className='mb-0'>ทั้งหมด</p>
                </div>
                <div className={classNames('pro-item', {
                    'active-promotion-category': proType === 'sport'
                })} onClick={() => {
                    updatePromotion('sport');
                }}>
                    <p className='mb-0'>กีฬา</p>
                </div>
                <div className={classNames('pro-item', {
                    'active-promotion-category': proType === 'casino'
                })} onClick={() => {
                    updatePromotion('casino');
                }}>
                    <p className='mb-0'>คาสิโน</p>
                </div>
                <div className={classNames('pro-item', {
                    'active-promotion-category': proType === 'slot'
                })} onClick={() => {
                    updatePromotion('slot');
                }}>
                    <p className='mb-0'>สล็อต</p>
                </div>
                <div className={classNames('pro-item', {
                    'active-promotion-category': proType === 'lotto'
                })} onClick={() => {
                    updatePromotion('lotto');
                }}>
                    <p className='mb-0'>หวย</p>
                </div>
            </div>
            <div className="session-banner-promotion">
                {bannerPromotion.map((row, index) => (
                    <div className="box-banner-promotion" key={index}>
                        <a href="https://game.ryder365.com/">
                            <img src={row.imageUrl} draggable={false} className='w-100' alt={row.type} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}