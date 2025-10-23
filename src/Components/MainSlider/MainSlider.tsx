import './MainSlider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const MainSlider = () => {

    type Slides = {
        id: number;
        title: string;
        mainTxt: string
        img: string
        textBtn?: string,
        hrefBtn?: string,
        hrefTitle ?:string
    }

    const slides: Slides[] = [
        { id: 1, title: "خدمــات مهندســی ساختمانــی ســــاختبوم", mainTxt: "یــک اکــوسیستــم کامــل بــــــــرای ســاخت و ســاز", img: "Images/desk-9.jpg", textBtn: "اطلاعات بیشتر ← ", hrefBtn: "/commond-pro", hrefTitle: "/commond-pro"},
        { id: 4, title: "پروژه های ما", mainTxt: "خدمــات مهندســی ساختمانــی ســــاختبوم", img: "Images/contact.jpg",textBtn: "پروژ های ما",hrefBtn:"/commond-pro/OurProjects"  , hrefTitle: "/commond-pro/OurProjects"},
        { id: 2, title: "درباره ما", mainTxt: "خدمــات مهندســی ساختمانــی ســــاختبوم", img: "Images/about.jpg", textBtn: "با ما در ارتباط باشید", hrefBtn:"/commond-pro/Aboutus", hrefTitle:"/commond-pro/Aboutus" },
        { id: 3, title: "تماس با ما", mainTxt: "خدمــات مهندســی ساختمانــی ســــاختبوم", img: "Images/contact.jpg" , hrefTitle: "/commond-pro/contactUs" },
        { id: 5, title: "خدمات ما", mainTxt: "خدمــات مهندســی ساختمانــی ســــاختبوم", img: "Images/desk-8.png" , hrefTitle: "/commond-pro/servieces" }
    ];


    return (
        <div className="swiper_container mt-[50px] mb-[50px]">
            <Swiper
                modules={[Autoplay]}
                navigation={false}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                className="pm-swiper-main relative w-[1242px] h-[422px] rounded-tr-[40px] rounded-b-[40px]"
            >
                {slides.map((img, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="pm-image-wrap w-[100%] h-[100%] bg-no-repeat bg-center bg-cover flex items-center justify-evenly flex-col" style={{ backgroundImage: `url(${img.img})`}}>
                            <div className='absolute inset-0 bg-[#36282678] bg-opacity-60 z-0'></div>
                            <h1 className='text-4xl leading-[160%] w-[611px] h-[58px] text-white font-medium text-start z-10'>
                                <a href={`${img.hrefTitle}`}>
                                    {img.title}
                                </a>
                            </h1>
                            <h4 className='w-[860px] h-[77px] text-white text-5xl leading-[160%] font-extrabold text-center z-10'>{img.mainTxt}</h4>
                            <button className={`w-[166px] h-[48px] bg-[#B85C38] text-[#FFFFFF] text-[20px] leading-[160%] font-medium cursor-pointer z-10 ${img.hrefBtn ? 'block' : 'hidden'} `}>
                                <a href={`${img.hrefBtn}`}>{img.textBtn}</a>
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}




export default MainSlider;