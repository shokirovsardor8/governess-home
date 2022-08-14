import React, { useEffect, useState } from 'react'
import logo from './images/logo.png'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Carousel } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FaFacebookF, FaTelegramPlane, FaLinkedinIn, FaInstagram, FaTwitter, FaShippingFast, FaWarehouse } from 'react-icons/fa'
import { CgSmartHomeRefrigerator } from 'react-icons/cg'
import { GiCampCookingPot, GiCookingGlove, GiCookingPot, GiFoodTruck } from 'react-icons/gi'
import { BiFoodMenu } from 'react-icons/bi'
import { FcIdea } from 'react-icons/fc'
import { TbMilk } from 'react-icons/tb'
import { MdFoodBank, MdOutlineLocalShipping } from 'react-icons/md'
import { AiFillPhone } from 'react-icons/ai'
import { BsCheckLg } from 'react-icons/bs'
import icon16 from './images/Без имени-2.png'
import icon17 from './images/Без имени-1 (2).png'
import icon18 from './images/Без имени-3.png'
import icon19 from './images/LOGO1.png'
import icon20 from './images/Макфа.png'
import icon21 from './images/motabar_un.png'
import Xodimlar from './Xodimlar'
import { Link } from 'react-router-dom'
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import News from './News'

function Home() {

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }

    const [showMore, setshowMore] = useState(false)
    const mijozlar = [44, 3512, 4342, 618]
    const xodimlar = [10, 6, 60, 15]

    function updateCount(el, goal, inc, sec) {
        var inc1 = inc;
        var sec1 = sec;
        var aaa = parseInt(el.textContent);
        el.textContent = aaa;
        const count = setInterval(() => {
            if (goal <= 15) {
                inc1 = 1;
                sec1 = 1000;
                // console.log(inc1, sec1, 'inc, sec');
            } else if (goal < 100 && sec < 20) {
                inc1 = 1;
            } else if (goal < 1000 && sec < 20) {
                inc1 = 10;
            }
            if (aaa < goal) {
                aaa += inc1;
                if (aaa > goal) {
                    el.textContent = goal
                } else {
                    el.textContent = aaa;
                }
            } else {
                clearInterval(count);
            }
        }, sec1);
    }
    window.onscroll = function () {
        if (window.scrollY - 800 <= document.getElementById('r44').offsetTop && window.scrollY + windowSize.innerHeight >= document.getElementById('r44').offsetTop) {
            for (let i = 0; i < mijozlar.length; i++) {
                updateCount(document.getElementById('r' + mijozlar[i]), mijozlar[i], 50, 15);
                // console.log('r' + mijozlar[i]);
            }
        } else {
            for (let i = 0; i < mijozlar.length; i++) {
                document.getElementById('r' + mijozlar[i]).textContent = 0;
            }
        }
        if (window.scrollY - 800 <= document.getElementById('x10').offsetTop && window.scrollY + windowSize.innerHeight >= document.getElementById('x10').offsetTop) {
            for (let i = 0; i < xodimlar.length; i++) {
                updateCount(document.getElementById('x' + xodimlar[i]), xodimlar[i], 5, 60);
                // console.log('x' + xodimlar[i]);
            }
        } else {
            for (let i = 0; i < xodimlar.length; i++) {
                document.getElementById('x' + xodimlar[i]).textContent = 0;
            }
        }
    }



    return (
        <div>
            <div class="container-fluid  mb-5 home-img px-0 position-relative" id='home'>
                <div className='aaaaa w-100 px-0 px-md-5 text-center'>
                    <div className='centerr row d-flex justify-content-around col-md-12 col-12'>
                        <div className='col-md-9'>
                            <h4 className='text-white mb-4 mt-5 mt-lg-0 text-uppercase'>Autsorsing usulida ovqatlantirish</h4>
                            <h2 class="display-3 font-weight-bold text-white">Aqlan teran, jismonan sog‘lom, Barkamol – kelajak avlod uchun!</h2>
                            <h4 class="text-white mb-4 mt-lg-0">Ayni damda Toshkent viloyati Nurafshon shahar va Bo‘stonliq tuman maktabgacha ta’lim bo’limi tasarrufidagi 30 ta davlat maktabgacha ta’lim tashkilotlari Autsorsing usulida ovqatlantirish tashkil etilgan.</h4>
                            <Link to="/about" class="btn btn-success mt-1 py-2 px-5">Batafsil</Link>
                        </div>
                    </div>
                </div>

            </div>

            <div class="container-fluid pt-5" id='xodimm'>
                <div class="container pb-3 text-center">
                    <h1 className='mb-4'>Tarbiyalanuvchilar</h1>
                    <p>Davlat maktabgacha ta'lim tashkilotlarida ovqatlantirilayotganlar soni</p>
                    <div class="row mt-5">
                        <div class="col-lg-3 col-md-6 pb-1">
                            <div class="bg-light shadow rounded mb-4" style={{ padding: '30px' }}>
                                <div class="pl-4">
                                    <p id='r44' style={{ fontSize: "70px" }} className='fw-bold text-primary r44' >0</p>
                                    <p class="m-0">Davlat maktabgacha ta'lim tashkilotlari</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 pb-1">
                            <div class="bg-light shadow rounded mb-4" style={{ padding: '30px' }}>
                                <div class="pl-4">
                                    <p id='r3512' style={{ fontSize: "70px" }} className='fw-bold text-primary'>0</p>
                                    <p class="m-0">3-4 yoshli guruh tarbiyalanuvchilari</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 pb-1">
                            <div class="bg-light shadow rounded mb-4" style={{ padding: '30px' }}>
                                <div class="pl-4">
                                    <p id='r4342' style={{ fontSize: "70px" }} className='fw-bold text-primary'>0</p>
                                    <p class="m-0">4-7 yoshli guruh tarbiyalanuvchilari</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 pb-1">
                            <div class="bg-light shadow rounded mb-4" style={{ padding: '30px' }}>
                                <div class="pl-4">
                                    <p id='r618' style={{ fontSize: "70px" }} className='fw-bold text-primary'>0</p>
                                    <p class="m-0">Qisqa muddatli guruh tarbiyalanuvchilari</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to='/daily' className='btn btn-success mt-3 mb-5 px-5'>Batafsil</Link>

                </div>

            </div>
            <div class="container-fluid pt-5 faoliyatimiz pb-4" id='about-us'>
                <div class="container pb-3">
                    <div className='text-center text-white'>
                        <h1 className='mb-3'>Faoliyatimiz</h1>
                        <p>Oziq-ovqat mahsulotlarini yetkazaish va ovqatlantirishni tashkil etish</p>
                    </div>

                    <div class="row mt-5 d-flex" style={{ height: 'max-content' }}>
                        <div class="col-lg-3 col-md-6 p-2" style={{}}>
                            <Link to='./autsorsing' className='text-dark'>
                                <div class="d-flex rounded mb-4 p-3" style={{ padding: '0px', backgroundColor: "rgb(255, 255, 255, 0.8)", height: '100%' }}>
                                    <div className=''>
                                        <GiCookingPot className="mt-2 font-weight-normal text-white round-icon" size={55} style={{ padding: '9px' }} />
                                        {/* <img src={require('./images/pngtree-cooking-and-kitchen-icon-png-image_719732-removebg-preview.png') } width='55' className='mt-2 p-1 font-weight-normal text-white round-icon' /> */}
                                    </div>
                                    <div className="ps-3">
                                        <h4 className=''>Autsorsing</h4>
                                        <p class="m-0 text-right">Umumiy ovqatlanish oshxonalarini ijaraga olgan holda Tadbirkorlar tomonidan ovqatlantirishni tashkil etish</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div class="col-lg-3 col-md-6 p-2">
                            <Link to='./kombinat' className='text-dark'>

                                <div class="d-flex rounded mb-4 p-3" style={{ padding: '0px', backgroundColor: "rgb(255, 255, 255, 0.8)", height: '100%' }}>
                                    <div className=''>
                                        <GiFoodTruck className="mt-2 font-weight-normal text-white round-icon" size={55} style={{ padding: '10px' }} />
                                    </div>
                                    <div className="ps-3">
                                        <h4 className=''>Kombinat usulida ovqatlantirish</h4>
                                        <p class="m-0 text-right"> Umumiy ovqatlanish ob'yektlari oshxonalari uchun sifatli va xavfsiz tayyor va yarim tayyor oziq-ovqat mahsulotlarini ishlab chiqish va yetkazish</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div class="col-lg-3 col-md-6 p-2">
                            <Link to='./keytering' className='text-dark'>
                                <div class="d-flex rounded mb-4 p-3" style={{ padding: '0px', backgroundColor: "rgb(255, 255, 255, 0.8)", height: '100%' }}>
                                    <div className=''>
                                        <GiCampCookingPot className="mt-2 font-weight-normal text-white round-icon" size={55} style={{ padding: '10px' }} />
                                    </div>
                                    <div className="ps-3">
                                        <h4 className=''>Keytiring usuli</h4>
                                        <p class="m-0 text-right">Umumiy ovqatlanish ob'yektlariga sifatli va xavfsiz tayyor issiq taomlarni etkazish</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div class="col-lg-3 col-md-6 p-2">
                            <div class="d-flex rounded mb-4 p-3" style={{ padding: '0px', backgroundColor: "rgb(255, 255, 255, 0.8)", height: '100%' }}>
                                <div className=''>
                                    <MdOutlineLocalShipping className="mt-2 font-weight-normal text-white round-icon" size={55} style={{ padding: '10px' }} />
                                </div>
                                <div className="ps-3">
                                    <h4 className=''>Ta'minot</h4>
                                    <p class="m-0 text-right">Umumiy ovqatlanish ob'yektlari omborxonalariga Tadbirkorlar tomonidan sifatli oziq-ovqat mahsulotlarini yetkazish</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 p-2">
                            <div class="d-flex rounded mb-4 p-3" style={{ padding: '0px', backgroundColor: "rgb(255, 255, 255, 0.8)", height: '100%' }}>
                                <div className=''>
                                    <TbMilk className="mt-2 font-weight-normal text-white round-icon" size={55} style={{ padding: '10px' }} />
                                </div>
                                <div className="ps-3">
                                    <h4 className=''>Ishlab chiqarish</h4>
                                    <p class="m-0 text-right">Umumiy ovqatlanish ob'yektlari uchun Tadbirkorlar tomonidan oziq-ovqat mahsulotlarini qayta ishlash va ishlab chiqarishini tashkil etish</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 p-2">
                            <div class="d-flex rounded mb-4 p-3" style={{ padding: '0px', backgroundColor: "rgb(255, 255, 255, 0.8)", height: '100%' }}>
                                <div className=''>
                                    <CgSmartHomeRefrigerator className="mt-2 font-weight-normal text-white round-icon" size={55} style={{ padding: '10px' }} />
                                </div>
                                <div className="ps-3">
                                    <h4 className=''>Mahsulotlarni saqlash</h4>
                                    <p class="m-0 text-right"> Oziq-ovqat mahsulotlarini SanPin talab va me'yorlariga muvofiq sifatli saqlashni tashkil etish</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 p-2">
                            <div class="d-flex rounded mb-4 p-3" style={{ padding: '0px', backgroundColor: "rgb(255, 255, 255, 0.8)", height: '100%' }}>
                                <div className=''>
                                    <MdFoodBank className="mt-2 font-weight-normal text-white round-icon" size={55} style={{ padding: '10px' }} />
                                </div>
                                <div className="ps-3">
                                    <h4 className=''>Texnologiya</h4>
                                    <p class="m-0 text-right">SanPin talab va me'yorlariga muvofiq istemolchilarning yoshi va fiziologik xususiyatlariga muvofiq taomnoma va ovqatlarni tayyorlash texnologiyalarini ishlab chiqish</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 p-2">
                            <div class="d-flex rounded mb-4 p-3" style={{ padding: '0px', backgroundColor: "rgb(255, 255, 255, 0.8)", height: '100%' }}>
                                <div className=''>
                                    <FaShippingFast className="mt-2 font-weight-normal text-white round-icon" size={55} style={{ padding: '10px' }} />
                                </div>
                                <div className="ps-3">
                                    <h4 className=''>Logistika</h4>
                                    <p class="m-0 text-right"> Oziq-ovqat mahsulotlarini SanPin talab va me'yorlariga muvofiq maxsus transportlarda ovqatlanish obyektlariga sifatli va xafsiz yetkazish</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid pt-5 hujjatlar">
                <div class="container pb-3 text-white">
                    <h1>Me'yoriy hujjatlar</h1>
                    <div className='row'>
                        <div class="col-lg-12 col-md-6 pb-1" style={{}}>
                            <div class="d-flex rounded mb-4 shadow" style={{ padding: '30px', backgroundColor: "rgb(255, 255, 255, 0.0)" }}>
                                <div className=''>
                                    <BsCheckLg className="me-3 mt-2 p-2 font-weight-normal text-white round-icon bg-success" size={65} />
                                </div>
                                <div className="ps-3">
                                    <p class="m-0 text-right">О‘zbekiston Respublikasi Vazirlar Mahkamasining
                                        2019 yil 25 iyulda “Davlat maktabgacha ta’lim tashkilotlarida sog‘lom ovqatlantirish tizimini yanada takomillashtirish tо‘g‘risida”gi 626-sonli qarori&nbsp;&nbsp;
                                        <a href='files/626 25.07.2019.doc' download className=' text-decoration-underline'>
                                            <small>yuklash</small>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-6 pb-1" style={{}}>
                            <div class="d-flex rounded mb-4 shadow" style={{ padding: '30px', backgroundColor: "rgb(255, 255, 255, 0.0)" }}>
                                <div className=''>
                                    <BsCheckLg className="me-3 mt-2 p-2 font-weight-normal text-white round-icon bg-success" size={65} />
                                </div>
                                <div className="ps-3">
                                    <p class="m-0 text-right">О‘zbekiston Respublikasi Vazirlar Mahkamasining 2021 yil 30 iyun kunida “Davlat maktabgacha ta’lim tashkilotlarida sog‘lom ovqatlantirish tizimini takomillashtirishning qо‘shimcha chora-tadbirlari tо‘g‘risida”gi 407-sonli qarori
                                        <a href='files/407 30.06.2021.doc' download className=' text-decoration-underline'>
                                            <small>yuklash</small>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {
                            showMore &&
                            <>

                                <div class="col-lg-12 col-md-6 pb-1" style={{}}>
                                    <div class="d-flex rounded mb-4 shadow" style={{ padding: '30px', backgroundColor: "rgb(255, 255, 255, 0.0)" }}>
                                        <div className=''>
                                            <BsCheckLg className="me-3 mt-2 p-2 font-weight-normal text-white round-icon bg-success" size={65} />
                                        </div>
                                        <div className="ps-3">
                                            <p class="m-0 text-right">О‘zbekiston Respublikasi Bosh Davlat vrachining 2021 yil 17 iyulda “O‘zbekiston Respublikasi maktabgacha ta’lim tashkilotlarida tarbiyalanayotgan bolalarni xavfsiz va sifatli ovqatlanishini tashkil etilishiga oid gigiyenik talablar tо‘g‘risida”gi 0016-21-sonli qarori
                                                <a href='files/0016-21 17.07.2021.doc' download className=' text-decoration-underline'>
                                                    <small>yuklash</small>
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-6 pb-1" style={{}}>
                                    <div class="d-flex rounded mb-4 shadow" style={{ padding: '30px', backgroundColor: "rgb(255, 255, 255, 0.0)" }}>
                                        <div className=''>
                                            <BsCheckLg className="me-3 mt-2 p-2 font-weight-normal text-white round-icon bg-success" size={65} />
                                        </div>
                                        <div className="ps-3">
                                            <p class="m-0 text-right">O‘zbekiston Respublikasi Ichki ishlar vazirligining tegishli bo‘linmalarida ovqatlanishni tashkil etish bo‘yicha autsorsing xizmatlari ko‘rsatish tartibi to‘g‘risidagi nizomni tasdiqlash haqida
                                                <a href='files/16 10.01.2020.doc' download className=' text-decoration-underline'>
                                                    <small>yuklash</small>
                                                </a></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-6 pb-1" style={{}}>
                                    <div class="d-flex rounded mb-4 shadow" style={{ padding: '30px', backgroundColor: "rgb(255, 255, 255, 0.0)" }}>
                                        <div className=''>
                                            <BsCheckLg className="me-3 mt-2 p-2 font-weight-normal text-white round-icon bg-success" size={65} />
                                        </div>
                                        <div className="ps-3">
                                            <p class="m-0 text-right">O‘zbekiston Respublikasi Sog‘liqni saqlash vazirligi tuzilmasidagi tashkilotlarda autsorsing xizmatlari ko‘rsatish tartibi to‘g‘risidagi nizomni tasdiqlash haqida &nbsp;
                                                <a href='files/323 17.04.2019.doc' download className=' text-decoration-underline'>
                                                    <small>yuklash</small>
                                                </a></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-6 pb-1" style={{}}>
                                    <div class="d-flex rounded mb-4 shadow" style={{ padding: '30px', backgroundColor: "rgb(255, 255, 255, 0.0)" }}>
                                        <div className=''>
                                            <BsCheckLg className="me-3 mt-2 p-2 font-weight-normal text-white round-icon bg-success" size={65} />
                                        </div>
                                        <div className="ps-3">
                                            <p class="m-0 text-right">O‘zbekiston Respublikasi Milliy gvardiyasining tegishli bo‘linmalarida shaxsiy tarkibning ovqatlanishini tashkil etish bo‘yicha autsorsing xizmatlari ko‘rsatish tartibi to‘g‘risidagi nizomni tasdiqlash haqida<a href='files/626 25.07.2019.doc' download className=' text-decoration-underline'>
                                                <small>yuklash</small>
                                            </a></p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }

                    </div>
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-success mx-auto pe-4 py-0' onClick={() => setshowMore(!showMore)}>{
                            showMore ? <><RiArrowDropUpLine size={40} className='me-1' />Kamroq</> : <><RiArrowDropDownLine size={40} className='me-1' />Ko'proq</>
                        }</button>
                    </div>

                </div>
            </div>

            <div class="container-fluid pt-5 mb-5">
                <div class="container pb-3 text-center mb-5" id='xodimm'>
                    <h1 className='mb-3'>Xodimlar</h1>
                    <p>Umumiy ovqatlanish ob'yektlari oshxonalari va korxonada faoliyat yuritayotganlar</p>
                    <div class="row mt-5">
                        <div class="col-lg-3 col-md-6 pb-1">
                            <div class="bg-light shadow rounded mb-4 text-center" style={{ padding: '30px' }}>
                                <p id='x10' style={{ fontSize: "70px" }} className='fw-bold text-primary text-center'>10</p>
                                <p class="m-0">Boshqaruv</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 pb-1">
                            <div class="bg-light shadow rounded mb-4 text-center" style={{ padding: '30px' }}>
                                <p id='x6' style={{ fontSize: "70px" }} className='fw-bold text-primary text-center'>6</p>
                                <p class="m-0">Haydovchi</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 pb-1">
                            <div class="bg-light shadow rounded mb-4 text-center" style={{ padding: '30px' }}>
                                <p id='x60' style={{ fontSize: "70px" }} className='fw-bold text-primary text-center'>60</p>
                                <p class="m-0">Oshpaz</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 pb-1">
                            <div class="bg-light shadow rounded mb-4 text-center" style={{ padding: '30px' }}>
                                <p id='x15' style={{ fontSize: "70px" }} className='fw-bold text-primary text-center'>15</p>
                                <p class="m-0">Oshxona ishchisi</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <hr className='container' />

            <News/>

            <Xodimlar />

            <div class="container-fluid pt-5 mt-5 mb-5">
                <div class="container pb-3 text-center">
                    <h1>Hamkorlarimiz</h1>
                    <p>Oziq-ovqat mahsulotlarni yetishtirish va yetkazib berish faoliyatida</p>
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
                            <div class="mb-4" style={{ padding: '40px', paddingTop: '30px' }}>
                                <img src={require('./images/photo_2020-10-31_16-43-03-removebg-preview.png')} style={{ width: '100%' }} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="mb-4" style={{ padding: '30px' }}>
                                <img src={icon16} style={{ width: '100%' }} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="mb-4" style={{ padding: '30px' }}>
                                <img src={icon17} style={{ width: '100%' }} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="mb-4" style={{ padding: '30px' }}>
                                <img src={icon18} style={{ width: '100%' }} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="mb-4" style={{ padding: '50px', paddingTop: '30px' }}>
                                <img src={icon19} style={{ width: '100%' }} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="mb-4" style={{ padding: '30px' }}>
                                <img src={icon20} style={{ width: '100%' }} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="mb-4" style={{ padding: '30px', paddingTop: '10px' }}>
                                <img src={icon21} style={{ width: '100%' }} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="mb-4" style={{ padding: '30px', paddingTop: '50px' }}>
                                <img src={require('./images/shedroe-leto-logo-removebg-preview.png')} style={{ width: '100%' }} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="mb-4" style={{ padding: '30px', paddingTop: '50px' }}>
                                <img src={require('./images/download-removebg-preview1.png')} style={{ width: '100%' }} />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

            </div>

            <div class="container-fluid pt-5" id='contact'>
                <div class="container">
                    <div class="text-center pb-2">
                        {/* <p class="section-title px-5"><span class="px-2">Get In Touch</span></p> */}
                        <h1 class="mb-4">Har qanday savol bo'yicha biz bilan bog'laning</h1>
                    </div>
                    <div class="row">
                        <div class="col-lg-7 mb-5">
                            <div class="contact-form">
                                <div id="success"></div>
                                <form action='mailto:governes_business@gmail.com' id="contactForm" novalidate="novalidate">
                                    <div class="control-group">
                                        <input type="text" name='name' class="form-control" id="name" placeholder="Ism familiya" required="required" data-validation-required-message="Please enter your name" />
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div class="control-group">
                                        <input type="email" name='mail' class="form-control" id="email" placeholder="Elektron pochta" required="required" data-validation-required-message="Please enter your email" />
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div class="control-group">
                                        <input type="text" name='subject' class="form-control" id="subject" placeholder="Mavzu nomi" required="required" data-validation-required-message="Please enter a subject" />
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div class="control-group">
                                        <textarea name='comment' class="form-control" rows="6" id="message" placeholder="Xabar" required="required" data-validation-required-message="Please enter your message"></textarea>
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div>
                                        <button class="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Xabarni yuborish</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-5 mb-5">
                            <p></p>
                            <div class="d-flex">
                                <div className='bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mt-1' style={{ width: "45px", height: "45px" }}>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                </div>
                                <div class="ms-3 ">
                                    <h5>Manzil</h5>
                                    <p>Toshkent viloyati Zangiota tumani</p>
                                </div>
                            </div>
                            <div class="d-flex">
                                <div className='bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mt-1' style={{ width: "45px", height: "45px" }}>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                                <div class="ms-3">
                                    <h5>Elektron Pochta</h5>
                                    <p>governes_business@gmail.com</p>
                                </div>
                            </div>
                            <div class="d-flex">
                                <div className='bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mt-1' style={{ width: "45px", height: "45px" }}>
                                    <FontAwesomeIcon icon={faPhoneAlt} />
                                </div>
                                <div class="ms-3">
                                    <h5>Telefon</h5>
                                    <p>+998 99 818 67 72</p>
                                </div>
                            </div>
                            <div class="d-flex">
                                <div className='bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mt-1' style={{ width: "45px", height: "45px" }}>
                                    <FontAwesomeIcon icon={faClock} />
                                </div>
                                <div class="ms-3">
                                    <h5>Ish vaqtlari</h5>
                                    <strong>Dushanba - Shanba:</strong>
                                    <p class="m-0">09:00 AM - 05:00 PM </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#" class="btn btn-success p-3 back-to-top"><i class="fa fa-angle-double-up"></i></a>
        </div >

    )
}

export default Home 