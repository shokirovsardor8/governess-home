import React from 'react'
import pic from '../images/Рисунок2.png'

function Kombinat() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-6 p-5 pt-0'>
                    <div>
                        <img src={pic} style={{ width: '100%' }} />
                    </div>
                </div>
                <div className='col-md-6 p-4 pt-2'>
                    <h3 className='fw-bold'>OVQATLANTIRISH KOMBINATI </h3>
                    <br />
                    <h5> <b>Tadbirkor</b> tomonidan Davlat maktabgacha ta'lim tashkilotlarining oshxonalariga sifatli tayyor va yarim tayyor oziq-ovqat mahsulotlarini yetkazib beradi
                    </h5>
                    <br />
                    <h5><b>Tadbirkorlarga qo‘yiladigan talab:</b>
                        <br /><br />1. Autsorsing faoliyati bilan shug‘ullanuvchi ilg‘or tajribali korxonalar
                        <br />2. Go‘sht, sut va sut mahsulotlariga bo‘lgan ehtiyojlarni qoplash bo‘yicha chorvachilik faoliyati mavjudligi
                        <br />3. Go‘sht, sut va sut mahsulotlari qayta ishlash, ularni saqlash va yetkazib berish faoliyatining mavjudligi
                        <br />4. Qishloq xo‘jaligi mahsulotlarini yetishtirish faoliyatining mavjudligi
                        <br />5. Qishloq xo‘jaligi mahsulotlarini qayta ishlash va ularni yetkazib berish faoliyatining mavjudligi
                        <br />6. Oziq-ovqat mahsulotlarini tashish bo‘yicha maxsus transport vositalarining mavjudligi


                    </h5>
                </div>

            </div>
        </div>
    )
}

export default Kombinat