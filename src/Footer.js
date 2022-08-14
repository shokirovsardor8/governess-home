import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa'
import { MdCall, MdEmail, MdLocationPin } from 'react-icons/md'
import { RiArrowDropRightLine } from 'react-icons/ri'

function Footer() {
    return (
        <div>
            <div class="container-fluid bg-secondary text-white mt-5 py-5 px-sm-3 px-md-5 text-start text-md-start">
                <div class="row pt-5">
                    <div class="col-lg-3 col-md-6 mb-5">
                        <a href="#" class="navbar-brand font-weight-bold text-primary m-0 mb-4 p-0" style={{ fontSize: "40px", lineHeight: "40px" }}>
                            <span class="text-primary">Governess <br/> business</span>
                        </a>
                        <div className=''>
                            <p className='col-9 col-md-12 mt-3'>Korxonaning bugungi kunda Nurafshon shaxar va Bо‘stonliq tumani maktabgacha ta’lim bо‘limi tasarrufidagi 30 ta DMTT da autsorsing usulida ovqatlantirishni tashkil etib, 4852 nafar maktabgacha ta’lim tarbiyalanuvchilarini sifatli va xavfsiz ovqatlantirib kelmoqda.</p>

                        </div>
                        <div class="d-flex justify-content-start mt-4">
                            <a class="btn btn-success text-center"
                                style={{ }} href="https://t.me/+_q5m-fXWJtdjMjU6" target={'_blank'}><FaTelegramPlane className='me-2'/>Telegram kanalga ulanish</a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-5 text-start">
                        <h3 class="text-primary mb-4">Aloqa ma`lumotlari</h3>
                        <div class="d-flex">
                            <h2 className='text-primary'><MdLocationPin/></h2>
                            <div class="ps-3">
                                <h5 class="text-white">Manzil</h5>
                                <p>Toshkent viloyati Zangiota tumani</p>
                            </div>
                        </div>
                        <div class="d-flex">
                        <h2 className='text-primary'><MdEmail/></h2>
                            <div class="ps-3">
                                <h5 class="text-white">Email</h5>
                                <p>governes_business@gmail.com</p>
                            </div>
                        </div>
                        <div class="d-flex">
                        <h2 className='text-primary'><MdCall/></h2>
                            <div class="ps-3">
                                <h5 class="text-white">Telefon</h5>
                                <p>+998 99 818 67 72</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-5">
                        <h3 class="text-primary mb-4">Tez havolalar</h3>

                        <div class="d-flex flex-column justify-content-start">
                            <a class="text-white mb-2" href="#home"><RiArrowDropRightLine size={30} />Bosh sahifa</a>
                            <a class="text-white mb-2" href="#about-us"><RiArrowDropRightLine size={30} />Biz haqimizda</a>
                            <a class="text-white mb-2" href="#employee"><RiArrowDropRightLine size={30} />Bizning xodimlar</a>
                            <a class="text-white" href="#contact"><RiArrowDropRightLine size={30} />Aloqa</a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-5">
                        <h3 class="text-primary mb-4">Murojaat uchun</h3>
                        <form action="" className='col-md-12'>
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
                        <a class="text-primary font-weight-bold" target={'_blank'} href="https://yengilyechim.uz">Yengil Yechim</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer