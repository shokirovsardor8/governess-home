import React from 'react'
import pic from '../images/depositphotos_70931673_l-2015.jpg'

function AboutCompany() {
  return (
    <div className='container'>
      <br />
      <br />
      <div className='row'>
        <div className='col-md-6 p-1'>
          <div>
            <img src={pic} style={{ width: '100%' }} />
          </div>
        </div>
        <div className='col-md-6 p-4 pt-0'>
      <h1 className='fw-bold'>«Governess Business» MCHJ haqida</h1>
          <h5> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Korxonaning manzili Toshkent viloyati Zangiota tumani Erkin qishlog‘ida joylashgan bо‘lib, bugungi kunda korxona tomonidan Toshkent viloyati Nurafshon shaxar va Bо‘stonliq tumani maktabgacha ta’lim bо‘limi tasarrufidagi 30 ta davlat maktabgacha ta’lim tashkilotlarida AUTSORSING usulida ovqatlantirishni tashkil etib, 4852 nafar maktabgacha ta’lim tarbiyalanuvchilarini sifatli va xavfsiz ovqatlantirib kelmoqda.</h5>
          <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bundan tashqari Toshkent viloyati Bо‘stonliq va Zangiota tumanlarida 16 ta maktabgacha ta’lim tashkilotlari oshxonalariga 50 dan ortiq nomdagi sifatli oziq-ovqat mahsulotlari ta’minotini yetkazib bermoqda.
            Korxona tasarrufida 1000 tonna sig‘imli omborxona va 200 tonna sig‘imli muzlatgich, 12 ta yuk tashishga mо‘ljallangan transport vositalari
            (1 ta MAN, 1 Xunday, 2 ta Changan, 8 ta Labo) mavjud.
          </h5>
        </div>

      </div>

    </div>
  )
}

export default AboutCompany