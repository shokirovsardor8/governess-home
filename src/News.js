import React from 'react'
import {Carousel} from 'react-bootstrap'

function News() {
  return (
    <div>
        <div class="container-fluid pt-5">
                <div class="container pb-3">
                    <h1>DMTT faoliyatidan</h1>
                    <Carousel>
                        <Carousel.Item>
                            <img src={require('./images/dklsjfhsafjlk.jpg')} className='w-100' />
                            <h2>Sertifikat topshirish jarayoni</h2>
                            <p className=''>Bo'stonliq tumani DMTT</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={require('./images/skladjlaksfl.jpg')} className='w-100' />
                            <h2>Sertifikat topshirish jarayoni</h2>
                            <p className=''>Nurafshon shahri DMTT</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={require('./images/photo_2022-06-30_12-32-44.jpg')} className='w-100' />
                            <h2>Malaka oshirish jarayoni</h2>
                            <p className=''>Nurafshon shahri DMTT</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={require('./images/photo_2022-06-30_12-32-46.jpg')} className='w-100' />
                            <h2>Malaka oshirish jarayoni</h2>
                            <p className=''>Nurafshon shahri DMTT</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={require('./images/djshkfksadfkj.jpg')} className='w-100' />
                            <h2>Amaliy mashg'ulotlarda rahbar nazorati</h2>
                            <p className=''>7-DMTT/23.06.2022 yil</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={require('./images/ovqat-tayyorlash.jpg')} className='w-100' />
                            <h2>Malaka oshirish jarayonidan lavha</h2>
                            <p className=''>7-DMTT/23.06.2022 yil</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={require('./images/photo_2022-06-22_11-47-52.jpg')} className='w-100' />
                            <h2>Malaka oshirishda faollarni taqdirlash jarayoni</h2>
                            <p className=''>Bo'stonliq tuman DMTT</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <video width="100%" controls className=''>
                                <source src={require('./images/59.mp4')} type="video/mp4" />
                                Your browser does not support HTML video.
                            </video>
                            <h2>Bolajonlarning bog'chadagi shiorlari</h2>
                            <p className=''>7-DMTT/23.06.2022 yil</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <video width="100%" controls className=''>
                                <source src={require('./images/26.mp4')} type="video/mp4" />
                                Your browser does not support HTML video.
                            </video>
                            <h2>Bog'chada tushlik vaqti</h2>
                            <p className=''>7-DMTT/23.06.2022 yil</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <video width="100%" controls className=''>
                                <source src={require('./images/7e966870c4d446b397628dd6d7d97c03.mp4')} type="video/mp4" />
                                Your browser does not support HTML video.
                            </video>
                            <h2>Bog'chada tushlik vaqti</h2>
                            <p className=''>7-DMTT/23.06.2022 yil</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <video width="100%" controls className=''>
                                <source src={require('./images/137.mp4')} type="video/mp4" />
                                Your browser does not support HTML video.
                            </video>
                            <h2>Bolajonlarning bog'cha taomlari haqida fikrlari</h2>
                            <p className=''>7-DMTT/23.06.2022 yil</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={require('./images/photo_2022-07-05_14-57-50.jpg')} className='w-100' />
                            <h2>Bog'chada tushlik vaqti</h2>
                            <p className=''>7-DMTT/23.06.2022 yil</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={require('./images/photo_2022-07-05_15-49-17.jpg')} className='w-100' />
                            <h2>Bog'chada tushlik vaqti</h2>
                            <p className=''>7-DMTT/23.06.2022 yil</p>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>

            <div class="container-fluid pt-5 mt-5 mb-5">
                <div class="container pb-3">
                    <h1>Korxona faoliyatidan</h1>
                    <Carousel>
                        <Carousel.Item>
                            <img src={require('./images/photo_2022-06-30_11-18-55\ \(3\)1.jpg')} className='w-100'/>
                            <h2>Ishlab chiqarish jarayoni</h2>
                            <p className=''>Sut va sut mahsulotlari ishlab chiqarish va qayta ishlash sexi</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={require('./images/photo_2022-07-02_15-18-08.jpg')} className='w-100' />
                            <h2>Ishlab chiqarish jarayoni</h2>
                            <p className=''>Sut va sut mahsulotlari ishlab chiqarish va qayta ishlash sexi</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='' >
                                <img src={require('./images/photo_2022-06-30_11-18-53.jpg')} className='w-100' />
                            </div>
                            <h2>Ovqat tayyorlash laboratoriyasi</h2>
                            <p className=''>Sut va sut mahsulotlari ishlab chiqarish laboratoriyasi</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='' >
                                <img src={require('./images/mol.jpg')} className='w-100' />
                            </div>
                            <h2>Chorva mollarini ovqatlantirish</h2>
                            <p className=''>Chorva mollari boqish faoliyatidan</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='' >
                                <img src={require('./images/photo_2022-06-30_13-59-20.jpg')} className='w-100' />
                            </div>
                            <h2>Sigir sog'ish jarayoni</h2>
                            <p className=''>Chorva mollari boqish faoliyatidan</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='' >
                                <img src={require('./images/photo_2022-07-02_15-18-27.jpg')} className='w-100' />
                            </div>
                            <h2>Eco sut mahsulotlari</h2>
                            <p className=''>Sut va sut mahsulotlari ishlab chiqarish va qayta ishlash sexi</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='' >
                                <img src={require('./images/photo_2022-07-05_09-11-19.jpg')} className='w-100' />
                            </div>
                            <h2>Eco sut mahsulotlari</h2>
                            <p className=''>Sut va sut mahsulotlari ishlab chiqarish va qayta ishlash sexi</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='' >
                                <img src={require('./images/photo_2022-07-05_09-11-19 (2).jpg')} className='w-100' />
                            </div>
                            <h2>Eco sut mahsulotlari</h2>
                            <p className=''>Sut va sut mahsulotlari ishlab chiqarish va qayta ishlash sexi</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='' >
                                <img src={require('./images/photo_2022-07-05_09-11-18.jpg')} className='w-100' />
                            </div>
                            <h2>Eco sut mahsulotlari</h2>
                            <p className=''>Sut va sut mahsulotlari ishlab chiqarish va qayta ishlash sexi</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='' >
                                <video width="100%" controls className=''>
                                    <source src={require('./images/video_2022-07-02_17-34-09.mp4')} type="video/mp4" />
                                    Your browser does not support HTML video.
                                </video>
                            </div>
                            <h2>Korxona faoliyatidan videolavha</h2>
                            <p className=''>Sut va sut mahsulotlari ishlab chiqarish va qayta ishlash sexi</p>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
    </div>
  )
}

export default News