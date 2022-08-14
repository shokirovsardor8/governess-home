import React from 'react'

import anis from './images/xodim/photo_2022-07-06_16-22-26.jpg'
import jumanazar from './images/xodim/photo_2022-06-30_17-56-59.jpg'
import farzod from './images/xodim/photo_2022-06-30_18-14-17.jpg'
import sherzod from './images/xodim/photo_2022-06-30_18-22-11.jpg'
import temurbek from './images/xodim/photo_2022-07-07_12-24-43.jpg'
import alisher1 from './images/xodim/photo_2022-07-07_12-24-42 (2).jpg'
import oybek from './images/xodim/photo_2022-07-07_12-24-41.jpg'
import orif from './images/xodim/photo_2022-06-28_13-05-48.jpg'
import azizbek from './images/xodim/photo_2022-07-04_17-17-47.jpg'
import otabek from './images/xodim/photo_2022-07-05_10-25-17.jpg'
import yoldosh from './images/xodim/photo_2022-07-07_12-24-39.jpg'
import matlyuba from './images/xodim/photo_2022-07-07_12-24-42.jpg'
import akrom from './images/xodim/photo_2022-07-07_12-24-39 (2).jpg'
import bobur from './images/xodim/photo_2022-07-07_12-24-40.jpg'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import alisher from './images/xodim/photo_2022-07-07_12-26-20.jpg'


function Xodimlar() {
    return (
        <div>
            <div class="container-fluid pt-5" id='employee'>
                <div class="container pb-3">
                    <div class="text-center pb-2">
                        <p class="section-title px-5"><span class="px-2">Bizning xodimlar</span></p>
                        <h1 class="mb-4">Bizning xodimlar bilan tanishing</h1>
                    </div>
                    <Swiper
                        breakpoints={{
                            200: {
                                slidesPerView: 2,
                            },
                            640: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 4,
                            },
                        }}
                        // slidesPerView={4}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{ delay: 3000 }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div class="text-center team mb-5">
                                <div class="position-relative overflow-hidden mb-4" style={{ borderRadius: "100%" }}>
                                    <img class="img-fluid w-100" src={anis} alt="" />
                                </div>
                                <h4>Anis Hamidov</h4>
                                <i>Direktor</i>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="text-center team mb-5">
                                <div class="position-relative overflow-hidden mb-4" style={{ borderRadius: "100%" }}>
                                    <img class="img-fluid w-100" src={alisher} alt="" />
                                </div>
                                <h4>Alisher Hasanov</h4>
                                <i>Direktor o'rinbosari</i>
                            </div>
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <div class="text-center team mb-5">
                                <div class="position-relative overflow-hidden mb-4" style={{ borderRadius: "100%" }}>
                                    <img class="img-fluid w-100" src={temurbek} alt="" />
                                </div>
                                <h4>Temurbek Rahmonqulov</h4>
                                <i>Iqtisodchi</i>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="text-center team mb-5">
                                <div class="position-relative overflow-hidden mb-4" style={{ borderRadius: "100%" }}>
                                    <img class="img-fluid w-100" src={alisher1} alt="" />
                                </div>
                                <h4>Alisher Haqberdiyev</h4>
                                <i>Bosh hisobchi</i>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="text-center team mb-5">
                                <div class="position-relative overflow-hidden mb-4" style={{ borderRadius: "100%" }}>
                                    <img class="img-fluid w-100" src={oybek} alt="" />
                                </div>
                                <h4>Oybek Xoliqov</h4>
                                <i>Hisobchi</i>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="text-center team mb-5">
                                <div class="position-relative overflow-hidden mb-4" style={{ borderRadius: "100%" }}>
                                    <img class="img-fluid w-100" src={yoldosh} alt="" />
                                </div>
                                <h4>Yo'ldosh Qurbonov</h4>
                                <i>Ombor mudiri</i>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="text-center team mb-5">
                                <div class="position-relative overflow-hidden mb-4" style={{ borderRadius: "100%" }}>
                                    <img class="img-fluid w-100" src={matlyuba} alt="" />
                                </div>
                                <h4>Matlyuba O'razbayeva</h4>
                                <i>Xodimlar bo'limi</i>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="text-center team mb-5">
                                <div class="position-relative overflow-hidden mb-4" style={{ borderRadius: "100%" }}>
                                    <img class="img-fluid w-100" src={akrom} alt="" />
                                </div>
                                <h4>Akrom Muqimov</h4>
                                <i></i>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="text-center team mb-5">
                                <div class="position-relative overflow-hidden mb-4" style={{ borderRadius: "100%" }}>
                                    <img class="img-fluid w-100" src={bobur} alt="" />
                                </div>
                                <h4>Bobur Mustafoyev</h4>
                                <i>Dasturchi</i>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="text-center team mb-5">
                                <div class="position-relative overflow-hidden mb-4" style={{ borderRadius: "100%" }}>
                                    <img class="img-fluid w-100" src={jumanazar} alt="" />
                                </div>
                                <h4>Jumanazar Ko'charov</h4>
                                <i>Texnolog</i>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="text-center team mb-5">
                                <div class="position-relative overflow-hidden mb-4" style={{ borderRadius: "100%" }}>
                                    <img class="img-fluid w-100" src={farzod} alt="" />
                                </div>
                                <h4>Farzod Soatqulov</h4>
                                <i>Hisobchi</i>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="text-center team mb-5">
                                <div class="position-relative overflow-hidden mb-4" style={{ borderRadius: "100%" }}>
                                    <img class="img-fluid w-100" src={sherzod} alt="" />
                                </div>
                                <h4>Sherzod Asadov</h4>
                                <i>Bo'stonliq tumani menegeri</i>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="text-center team mb-5">
                                <div class="position-relative overflow-hidden mb-4" style={{ borderRadius: "100%" }}>
                                    <img class="img-fluid w-100" src={orif} alt="" />
                                </div>
                                <h4>Orifbek Fayzullayev</h4>
                                <i>Hisobchi</i>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="text-center team mb-5">
                                <div class="position-relative overflow-hidden mb-4" style={{ borderRadius: "100%" }}>
                                    <img class="img-fluid w-100" src={azizbek} alt="" />
                                </div>
                                <h4>Azizbek Rasulov</h4>
                                <i>Hisobchi</i>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="text-center team mb-5">
                                <div class="position-relative overflow-hidden mb-4" style={{ borderRadius: "100%" }}>
                                    <img class="img-fluid w-100" src={otabek} alt="" />
                                </div>
                                <h4>Otabek Chulliyev</h4>
                                <i>Ta'minotchi</i>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}



{/* <div
                                        class="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                                        <a class="btn btn-outline-light text-center me-2 px-0" style={{ width: "38px", height: "38px" }}
                                            href="#"><AiFillPhone /></a>
                                        <a class="btn btn-outline-light text-center me-2 px-0" style={{ width: "38px", height: "38px" }}
                                            href="#"><FaFacebookF /></a>
                                        <a class="btn btn-outline-light text-center px-0" style={{ width: "38px", height: "38px" }}
                                            href="#"><FaTelegramPlane /></a>
                                    </div>
<div */}

export default Xodimlar