import React from 'react'
import logo from './images/logo.png'
import header from './img/header.png'
import about1 from './img/about-1.jpg'
import about2 from './img/about-2.jpg'
import team4 from './img/team-4.jpg'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Carousel } from 'react-bootstrap'
import { GiSpikedFence } from 'react-icons/gi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FaFacebookF, FaTelegramPlane, FaLinkedinIn, FaInstagram, FaTwitter, FaShippingFast, FaWarehouse } from 'react-icons/fa'
import { BiFoodMenu } from 'react-icons/bi'
import { FcIdea } from 'react-icons/fc'
import { TbMilk } from 'react-icons/tb'
import { MdOutlineLocalShipping } from 'react-icons/md'
import { AiFillPhone } from 'react-icons/ai'
import { BsCheckLg } from 'react-icons/bs'
import icon16 from './images/16.svg'
import icon17 from './images/17.svg'
import icon18 from './images/18.svg'
import icon19 from './images/19.svg'
import xodim from './images/fggf.jpg'
import nurafshon from './images/depositphotos_70931673_l-2015.jpg'
function Home() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#" className='me-5'>
                        <img src={logo} height={50} className='mt-0 mb-3' />
                        {/* <span class="text-primary fw-bold ms-2" style={{ fontSize: '35px' }}
                        >Governess Business</span> */}

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#home">Bosh sahifa</Nav.Link>
                            <Nav.Link href="#about-us">Biz haqimizda</Nav.Link>
                            <Nav.Link href="#employee">Bizning xodimlar</Nav.Link>

                            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown> */}
                            <Nav.Link href="#contact">
                                Aloqa
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            {/* <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            /> */}
                            <a href='http://my.governess.uz' className='btn btn-success'>Tizimga kirish</a>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div class="container-fluid  mb-5 home-img px-0 position-relative" id='home'>
                <div className='aaaaa w-100 px-0 px-md-5 text-center'>
                    <div className='centerr row d-flex justify-content-around col-md-12 col-12'>
                        {/* <div className='col-md-3'>
                        </div> */}
                        <div className='col-md-9'>
                            <h4 className='text-white mb-4 mt-5 mt-lg-0 text-uppercase'>Autsorsing usulida ovqatlantirish</h4>
                            <h2 class="display-3 font-weight-bold text-white">Aqlan teran, jismonan sog‘lom, Barkamol – kelajak avlod uchun!</h2>
                            <h4 class="text-white mb-4 mt-lg-0">Ayni damda Toshkent viloyati Nurafshon shahar va Bo‘stonliq tuman maktabgacha ta’lim bo’limi tasarrufidagi 30 ta davlat maktabgacha ta’lim tashkilotlari Autsorsing usulida ovqatlantirish tashkil etilgan.</h4>
                            {/* <h4 class="text-white mb-4">Aqlan teran, jismonan sog‘lom, Barkamol ​– kelajak avlod uchun!</h4> */}
                            <a href="" class="btn btn-success mt-1 py-3 px-5">Batafsil</a>
                        </div>
                        {/* <div className='col-md-3'>
                        </div> */}
                    </div>
                </div>

            </div>

            <div class="container-fluid pt-5">
                <div class="container pb-3 text-center">
                    <h1>Bizning Mijozlar</h1>
                    <p>Davlat maktabgacha ta'lim tashkilotlarida sog'lom ovqatlantirishni tashkil etishda</p>
                    <button className='btn btn-success text-uppercase'>Kanalga qo'shilish</button>
                    <div class="row mt-5">
                        <div class="col-lg-3 col-md-6 pb-1">
                            <div class="bg-light shadow rounded mb-4" style={{ padding: '30px' }}>
                                <div class="pl-4">
                                    <p style={{ fontSize: "70px" }} className='fw-bold text-primary'>44</p>
                                    <p class="m-0">Davlat maktabgacha ta'lim tashkilotlari</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 pb-1">
                            <div class="bg-light shadow rounded mb-4" style={{ padding: '30px' }}>
                                <div class="pl-4">
                                    <p style={{ fontSize: "70px" }} className='fw-bold text-primary'>3512</p>
                                    <p class="m-0">3-4 yoshli guruh tarbiyalanuvchilari</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 pb-1">
                            <div class="bg-light shadow rounded mb-4" style={{ padding: '30px' }}>
                                <div class="pl-4">
                                    <p style={{ fontSize: "70px" }} className='fw-bold text-primary'>4342</p>
                                    <p class="m-0">4-7 yoshli guruh tarbiyalanuvchilari</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 pb-1">
                            <div class="bg-light shadow rounded mb-4" style={{ padding: '30px' }}>
                                <div class="pl-4">
                                    <p style={{ fontSize: "70px" }} className='fw-bold text-primary'>618</p>
                                    <p class="m-0">Qisqa muddatli guruh tarbiyalanuvchilari</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="container-fluid pt-5 faoliyatimiz" id='about-us'>
                <div class="container pb-3">
                    <div className='text-center text-white'>
                        <h1 className='mb-3 text-uppercase'>Faoliyatimiz</h1>
                        <p>Oziq-ovqat mahsulotlarini yetkazaish va ovqatlantirishni tashkil etish</p>
                    </div>

                    <div class="row mt-5">
                        <div class="col-lg-4 col-md-6 pb-1" style={{}}>
                            <div class="d-flex rounded mb-4" style={{ padding: '30px', backgroundColor: "rgb(255, 255, 255, 0.8)" }}>
                                <div className=''>
                                    <FcIdea className="me-3 mt-2 p-3 font-weight-normal text-white round-icon" size={65} />
                                </div>
                                <div className="ps-3">
                                    <h4 className=''>Autsorsing</h4>
                                    <p class="m-0 text-right">Umumiy ovqatlanish ob'yektlarida ovqatlantirishni tashkil etish usuli</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 pb-1">
                            <div class="d-flex rounded mb-4" style={{ padding: '30px', backgroundColor: "rgb(255, 255, 255, 0.8)" }}>
                                <div className=''>
                                    <MdOutlineLocalShipping className="me-3 mt-2 p-3 font-weight-normal text-white round-icon" size={65} />
                                </div>
                                <div className="ps-3">
                                    <h4 className=''>Ta'minot</h4>
                                    <p class="m-0 text-right">Umumiy ovqatlanish ob'yektlari oshxonalariga oziq-ovqat mahsulotlar ta'minotini tashkil etish</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 pb-1">
                            <div class="d-flex rounded mb-4" style={{ padding: '30px', backgroundColor: "rgb(255, 255, 255, 0.8)" }}>
                                <div className=''>
                                    <TbMilk className="me-3 mt-2 p-3 font-weight-normal text-white round-icon" size={65} />
                                </div>
                                <div className="ps-3">
                                    <h4 className=''>Ishlab chiqarish</h4>
                                    <p class="m-0 text-right">Go'sht, sut va sut mahsulotlari ishlab chiqarish hamda yetkazish</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 pb-1">
                            <div class="d-flex rounded mb-4" style={{ padding: '30px', backgroundColor: "rgb(255, 255, 255, 0.8)" }}>
                                <div className=''>
                                    <FaWarehouse className="me-3 mt-2 p-3 font-weight-normal text-white round-icon" size={65} />
                                </div>
                                <div className="ps-3">
                                    <h4 className=''>Mahsulotlarni saqlash</h4>
                                    <p class="m-0 text-right">Sovutgich omborxonasida oziq-ovqat mahsulotlarini saqlash</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 pb-1">
                            <div class="d-flex rounded mb-4" style={{ padding: '30px', backgroundColor: "rgb(255, 255, 255, 0.8)" }}>
                                <div className=''>
                                    <BiFoodMenu className="me-3 mt-2 p-3 font-weight-normal text-white round-icon" size={65} />
                                </div>
                                <div className="ps-3">
                                    <h4 className=''>Texnologiya</h4>
                                    <p class="m-0 text-right">Amaldagi SanPin me'yorlariga muvofiq mavsumiy taomnomalarni tayyorlash</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 pb-1">
                            <div class="d-flex rounded mb-4" style={{ padding: '30px', backgroundColor: "rgb(255, 255, 255, 0.8)" }}>
                                <div className=''>
                                    <FaShippingFast className="me-3 mt-2 p-3 font-weight-normal text-white round-icon" size={65} />
                                </div>
                                <div className="ps-3">
                                    <h4 className=''>Logistika</h4>
                                    <p class="m-0 text-right">Oziq-ovqat va sifati tez buzuluvchi mahsulotlarni maxsus transportlarda tashish</p>
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
                                        2019 yil 25 iyulda “Davlat maktabgacha ta’lim tashkilotlarida sog‘lom ovqatlantirish tizimini yanada takomillashtirish tо‘g‘risida”gi 626-sonli qarori</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-6 pb-1" style={{}}>
                            <div class="d-flex rounded mb-4 shadow" style={{ padding: '30px', backgroundColor: "rgb(255, 255, 255, 0.0)" }}>
                                <div className=''>
                                    <BsCheckLg className="me-3 mt-2 p-2 font-weight-normal text-white round-icon bg-success" size={65} />
                                </div>
                                <div className="ps-3">
                                    <p class="m-0 text-right">О‘zbekiston Respublikasi Vazirlar Mahkamasining
                                        2019 yil 25 iyulda “Davlat maktabgacha ta’lim tashkilotlarida sog‘lom ovqatlantirish tizimini yanada takomillashtirish tо‘g‘risida”gi 626-sonli2021 yil 30 iyun kunida “Davlat maktabgacha ta’lim tashkilotlarida sog‘lom ovqatlantirish tizimini takomillashtirishning qо‘shimcha chora-tadbirlari tо‘g‘risida”gi 407-sonli qarori</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-6 pb-1" style={{}}>
                            <div class="d-flex rounded mb-4 shadow" style={{ padding: '30px', backgroundColor: "rgb(255, 255, 255, 0.0)" }}>
                                <div className=''>
                                    <BsCheckLg className="me-3 mt-2 p-2 font-weight-normal text-white round-icon bg-success" size={65} />
                                </div>
                                <div className="ps-3">
                                    <p class="m-0 text-right">О‘zbekiston Respublikasi Bosh Davlat vrachining 2021 yil 17 iyulda “O‘zbekiston Respublikasi maktabgacha ta’lim tashkilotlarida tarbiyalanayotgan bolalarni xavfsiz va sifatli ovqatlanishini tashkil etilishiga oid gigiyenik talablar tо‘g‘risida”gi 0016-21-sonli qarori</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="container-fluid pt-5">
                <div class="container pb-3 text-center">
                    <h1>Xodimlar</h1>
                    <p>Umumiy ovqatlanish ob'yektlari oshxonalari va korxonada faoliyat yuritayotganlar</p>
                    <div class="row mt-5">
                        <div class="col-lg-3 col-md-6 pb-1">
                            <div class="bg-light shadow rounded mb-4 text-center" style={{ padding: '30px' }}>
                                <p style={{ fontSize: "70px" }} className='fw-bold text-primary text-center'>10</p>
                                <p class="m-0">Boshqaruv</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 pb-1">
                            <div class="bg-light shadow rounded mb-4 text-center" style={{ padding: '30px' }}>
                                <p style={{ fontSize: "70px" }} className='fw-bold text-primary text-center'>6</p>
                                <p class="m-0">Haydovchi</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 pb-1">
                            <div class="bg-light shadow rounded mb-4 text-center" style={{ padding: '30px' }}>
                                <p style={{ fontSize: "70px" }} className='fw-bold text-primary text-center'>60</p>
                                <p class="m-0">Oshpaz</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 pb-1">
                            <div class="bg-light shadow rounded mb-4 text-center" style={{ padding: '30px' }}>
                                <p style={{ fontSize: "70px" }} className='fw-bold text-primary text-center'>15</p>
                                <p class="m-0">Oshxona ishchisi</p>
                            </div>
                        </div>
                    </div>
                    <button className='btn btn-success'>Batafsil</button>
                </div>

            </div>
            <div class="container-fluid pt-5 position-relative" id='employee'>
                <div className='position-absolute bg-success m-0 p-0' style={{ width: '100%', height: '300px', zIndex: '-5', left: '0' }}>
                </div>

                <div class="container">
                    <div class="text-center pb-2">
                        {/* <p class="section-title px-5"><span class="px-2">Bizning xodimlar</span></p> */}
                        <h1 class="mb-4 text-white text-uppercase fw-bold mt-5">Korxona jamoasi</h1>
                    </div>
                    <div class="row mt-5">
                        <div class="col-lg-4 col-md-6 pb-1">
                            <div class="card p-5 py-4 text-center m-0">
                                <img class="card-img-top" src={xodim} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title fw-bold">ANIS XAMIDOV</h5>
                                    <h6 className='text-success fw-bold'>direktor</h6>
                                    <p class="card-text">Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</p>
                                </div>
                                <div class="card-body d-flex justify-content-around">
                                    <FaFacebookF size={25} />
                                    <FaTwitter size={25} />
                                    <FaInstagram size={25} />
                                    <FaLinkedinIn size={25} />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 pb-1">
                            <div class="card p-5 py-4 text-center m-0">
                                <img class="card-img-top" src={xodim} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title fw-bold">ALISHER AKA</h5>
                                    <h6 className='text-success fw-bold'>moliyaviy va iqtisodiy ishlar bo'yicha maslahatchi</h6>
                                    <p class="card-text">Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</p>
                                </div>
                                <div class="card-body d-flex justify-content-around">
                                    <FaFacebookF size={25} />
                                    <FaTwitter size={25} />
                                    <FaInstagram size={25} />
                                    <FaLinkedinIn size={25} />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 pb-1">
                            <div class="card p-5 py-4 text-center m-0">
                                <img class="card-img-top" src={xodim} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title fw-bold">JUMANAZAR KUCHAROV</h5>
                                    <h6 className='text-success fw-bold'>maslahatchi</h6>
                                    <p class="card-text">Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</p>
                                </div>
                                <div class="card-body d-flex justify-content-around">
                                    <FaFacebookF size={25} />
                                    <FaTwitter size={25} />
                                    <FaInstagram size={25} />
                                    <FaLinkedinIn size={25} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="container-fluid pt-5">
                <div class="container pb-3">
                    <h1>DMTT FAOLIYATIDAN</h1>
                    <Carousel>
                        <Carousel.Item>
                            <div className='bg-image bostonliq'>
                            </div>
                            <div className='bg-white p-2 text-left w-100 text-black position-absolute' style={{ bottom: '-30px', zIndex: '1' }}>
                                <h2>Bo'stonliq tumani DMTT</h2>
                                <p className=''>18-DMTT/23.06.2022 yil</p>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='bg-image nurafshon' >
                            </div>
                            <div className='bg-white p-2 text-left w-100 text-black position-absolute' style={{ bottom: '-30px', zIndex: '1' }}>
                                <h2>Nurafshon tuman DMTT</h2>
                                <p className=''>7-DMTT/23.06.2022 yil</p>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>

            <div class="container-fluid pt-5 mt-5">
                <div class="container pb-3">
                    <h1>KORXONA FAOLIYATIDAN</h1>
                    <Carousel>
                        <Carousel.Item>
                            <div className='bg-image ishlab'>
                            </div>
                            <div className='bg-white p-2 text-left w-100 text-black position-absolute' style={{ bottom: '-30px', zIndex: '1' }}>
                                <h2>ISHLAB CHIQARISH JARAYONI</h2>
                                <p className=''>Tayyor va yarim tayyor mahsulotlarni qayta tayyorlash sex faoliyati</p>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='bg-image ovqat-tay' >
                            </div>
                            <div className='bg-white p-2 text-left w-100 text-black position-absolute' style={{ bottom: '-30px', zIndex: '1' }}>
                                <h2>Ovqat tayyorlash laboratoriyasi</h2>
                                <p className=''>Taomlarni tayyorlash laboratoriyasi faoliyatidan</p>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <div class="container-fluid pt-5 mt-5">
                <div class="container pb-3 text-center">
                    <h1>Hamkorlarimiz</h1>
                    <p>Oziq-ovqat mahsulotlarni yetishtirish va yetkazib berish faoliyatida</p>
                    <div class="row mt-5">
                        <div class="col-lg-3 col-6 pb-1" style={{ padding: '40px' }}>
                            <img src={icon16} style={{ width: '100%' }} />
                        </div>
                        <div class="col-lg-3 col-6 pb-1 " style={{ padding: '40px' }}>
                            <img src={icon17} style={{ width: '100%' }} />
                        </div>
                        <div class="col-lg-3 col-6 pb-1" style={{ padding: '40px' }}>
                            <img src={icon18} style={{ width: '100%' }} />
                        </div>
                        <div class="col-lg-3 col-6 pb-1" style={{ padding: '40px' }}>
                            <img src={icon19} style={{ width: '100%' }} />
                        </div>
                    </div>
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
                            <p>Labore sea amet kasd diam justo amet ut vero justo. Ipsum ut et kasd duo sit, ipsum sea et erat est dolore, magna ipsum et magna elitr. Accusam accusam lorem magna, eos et sed eirmod dolor est eirmod eirmod amet.</p>
                            <div class="d-flex">
                                <div className='bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mt-1' style={{ width: "45px", height: "45px" }}>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                </div>
                                <div class="ms-3 ">
                                    <h5>Manzil</h5>
                                    <p>123 Street, New York, USA</p>
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
                                    <p>+012 345 67890</p>
                                </div>
                            </div>
                            <div class="d-flex">
                                <div className='bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mt-1' style={{ width: "45px", height: "45px" }}>
                                    <FontAwesomeIcon icon={faClock} />
                                </div>
                                <div class="ms-3">
                                    <h5>Ish vaqtlari</h5>
                                    <strong>Sunday - Friday:</strong>
                                    <p class="m-0">08:00 AM - 05:00 PM </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid bg-secondary text-white mt-5 py-5 px-sm-3 px-md-5 text-center text-md-start">
                <div class="row pt-5">
                    <div class="col-lg-3 col-md-6 mb-5">
                        <a href="" class="navbar-brand font-weight-bold text-primary m-0 mb-4 p-0" style={{ fontSize: "40px", lineHeight: "40px" }}>
                            <i ></i>
                            <span class="text-primary">Governess <br /> business</span>
                        </a>
                        <div className='d-flex justify-content-center'>
                        <p className='m-3 ms-3 col-9 col-md-12'>Labore dolor amet ipsum ea, erat sit ipsum duo eos. Volup amet ea dolor et magna dolor, elitr rebum duo est sed diam elitr. Stet elitr stet diam duo eos rebum ipsum diam ipsum elitr.</p>
                        </div>
                        <div class="d-flex justify-content-start mt-4">
                            {/* <a class="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                                style={{width: "38px", height: "38px"}} href="#"><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                                style={{width: "38px", height: "38px"}} href="#"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                                style={{width: "38px", height: "38px"}} href="#"><i class="fab fa-linkedin-in"></i></a>
                            <a class="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                                style={{width: "38px", height: "38px"}} href="#"><i class="fab fa-instagram"></i></a> */}
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-5">
                        <h3 class="text-primary mb-4">Aloqa ma`lumotlari</h3>
                        <div class="">
                            <h4 class="fa fa-map-marker-alt text-primary"></h4>
                            <div class="pl-3">
                                <h5 class="text-white">Manzil</h5>
                                <p>Toshkent viloyati Bektemir tumani</p>
                            </div>
                        </div>
                        <div class="">
                            <h4 class="fa fa-envelope text-primary"></h4>
                            <div class="pl-3">
                                <h5 class="text-white">Email</h5>
                                <p>governes_business@gmail.com</p>
                            </div>
                        </div>
                        <div class="">
                            <h4 class="fa fa-phone-alt text-primary"></h4>
                            <div class="pl-3">
                                <h5 class="text-white">Telefon</h5>
                                <p>+998 90 1234567</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-5">
                        <h3 class="text-primary mb-4">Tez havolalar</h3>

                        <div class="d-flex flex-column justify-content-start">
                            <a class="text-white mb-2" href="#home"><i class="fa fa-angle-right mr-2"></i>Bosh sahifa</a>
                            <a class="text-white mb-2" href="#about-us"><i class="fa fa-angle-right mr-2"></i>Biz haqimizda</a>
                            <a class="text-white mb-2" href="#employee"><i class="fa fa-angle-right mr-2"></i>Bizning xodimlar</a>
                            <a class="text-white" href="#contact"><i class="fa fa-angle-right mr-2"></i>Aloqa</a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-5">
                        <h3 class="text-primary mb-4">Murojaat uchun</h3>
                        <form action="" className='col-6 col-md-12 mx-auto'>
                            {/* <div class="form-group"> */}
                            <input type="text" class="form-control border-0 py-3 mb-3" placeholder="Ism Familiya" required />
                            {/* </div> */}
                            {/* <div class="form-group"> */}
                            <input type="email" class="form-control border-0 py-3 mb-3" placeholder="Elektron pochtangiz"
                                required />
                            {/* </div> */}
                            <div>
                                <button class="btn btn-success btn-block border-0 py-3 px-4" type="submit">Submit Now</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="container-fluid pt-5" style={{ borderTop: "1px solid rgba(23, 162, 184, .2)" }} >

                    <p class="m-0 text-center text-white">
                        &copy; <a class="text-primary font-weight-bold" ></a>
                        <a class="text-primary font-weight-bold" href="https://yengilyechim.uz">Yengil Yechim</a>
                    </p>
                </div>
            </div>
            <a href="#" class="btn btn-success p-3 back-to-top"><i class="fa fa-angle-double-up"></i></a>
        </div >

    )
}

export default Home 