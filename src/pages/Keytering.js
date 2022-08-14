import React from 'react'
import pic from '../images/Рисунок3.png'
import pic1 from '../images/Рисунок3.png'

function Keytering() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-6 p-5 pt-0'>
                    <div>
                        <img src={pic} style={{ width: '100%' }} />
                        <img src={pic1} style={{ width: '100%' }} />
                    </div>
                </div>
                <div className='col-md-6 p-4 pt-2'>
                    <h2 className='fw-bold'>TAYYOR TAOMLAR YETKAZIB BERISH XIZMATI (KEYTERING) USULI </h2>
                    <br />
                    <h5> <b>Tadbirkor</b> tomonidan Davlat maktabgacha ta'lim tashkilotlariga tayyor taomlarni yetkazib beradi

                    </h5>
                    <br />
                    <h5><b>Tadbirkorlarga qo‘yiladigan talab:</b>
                    <br/><br/>1. Ovqatlantirish kombinati faoliyati bilan shug‘ullanuvchi ilg‘or tajribali korxonalar
                    <br/>2. Tayyorlangan taomlarning sertifikat xujjatlarining mavjudligi
                    <br/>3. Tayyor taomlarni yetkazib berish imkoniyati va transport vositalarining yetarli bo‘lishi
                    <br/>4. Tayyor taomlarni tayyorlash va tarbiyalanuvchilarni ovqatlatlantirishni amaldagi SanPin me'yorlariga muvofiq kelishi



                    </h5>
                </div>

            </div>
        </div>
    )
}

export default Keytering