import React, { useEffect, useState } from 'react'
import { css } from '@emotion/css'
import classNames from 'classnames'
import NewPromotion from '../../../Assets/Images/โปรโมชั่นล่าสุด.png'
import Promotion from '../../../Assets/Images/Carousel.png'


export default function PromotionPage() {

    const [bannerPromotionList, setBannerPromotionList] = useState([])
    const [bannerPromotion, setBannerPromotion] = useState([])
    const [proType, setProType] = useState('all')

    const bannerPro = [
        {
            imageUrl: Promotion,
            type: 'casino'
        },
        {
            imageUrl: Promotion,
            type: 'casino'
        },
        {
            imageUrl: Promotion,
            type: 'casino'
        },
        {
            imageUrl: Promotion,
            type: 'sport'
        },
        {
            imageUrl: Promotion,
            type: 'sport'
        },
        {
            imageUrl: Promotion,
            type: 'slot'
        },
        {
            imageUrl: Promotion,
            type: 'slot'
        },
        {
            imageUrl: Promotion,
            type: 'slot'
        },
        {
            imageUrl: Promotion,
            type: 'slot'
        },

        {
            imageUrl: Promotion,
            type: 'lotto'
        },

    ]

    useEffect(() => {
        setBannerPromotionList(bannerPro)
        setBannerPromotion(bannerPro)
    }, [])

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