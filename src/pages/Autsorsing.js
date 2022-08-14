import React from 'react'
import pic from '../images/Рисунок1.png'

function Autsorsing() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-6 p-5 pt-0'>
                    <div>
                        <img src={pic} style={{ width: '100%' }} />
                    </div>
                </div>
                <div className='col-md-6 p-4 pt-2'>
                    <h2 className='fw-bold'>OVQATLANTIRISHNING AUTSORSING USULI</h2>
                    <br />
                    <h5> <b>Tadbirkor</b> tomonidan Davlat maktabgacha ta'lim tashkilotlarining oshxonalari ijaraga olinib, ovqatlar MTT oshxonalarida tayyorlanib MTT tarbiyalanuvchilari hamda xodimlari ovqatlantiriladi
                    </h5>
                    <br />
                    <h5><b>Tadbirkorlarga qo‘yiladigan talab:</b>
                        <br />1. Umumiy ovqatlantirish faoliyati bilan shug‘ullanuvchi ilg‘or tajribalari korxonalar
                        <br />2. MTT oshxonalarida faoliyat yurituvchi oshpazlar 3-toifadan kam bo‘lmasligi
                        <br />3. Oziq-ovqat mahsulotlarini to‘liq yetkazib berish imkoniyati va transport vositalarining yetarli bo‘lishi
                        <br />4. Taomlarni tayyorlash va tarbiyalanuvchilarni ovqatlatlantirishni amaldagi SanPin me'yorlariga muvofiq kelishi

                    </h5>
                </div>

            </div>
        </div>
    )
}

export default Autsorsing