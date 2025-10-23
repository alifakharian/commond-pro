import React from 'react';
import { email, Instagram, phon, Telegram, Frame } from "../assets/images/contactus"

const socialLinks = [
    {
        name: 'صفحه اینستاگرام:',
        icon: Instagram,
        url: 'Sakhtebom',
    },
    {
        name: 'تلگرام:',
        icon: Telegram,
        url: 'sakhtbom-ir',
    },
    {
        name: 'شماره های تماس:',
        icon: phon,
        url: '09935353457',
    },
    {
        name: 'ایمیل:',
        icon: email,
        url: 'sakhtebom@gmail.com',
    },
];

const ContactUs: React.FC = () => {
    return (
        <div className="lg:py-[64px] py-[20px] max-w-[1232px] mx-auto">
            <div className="grid-cols-2 grid md:grid-cols-4 gap-6 max-w-5xl mx-auto px-4">
                {socialLinks.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center gap-2 text-center" >
                        <div className='bg-white p-[8px] rounded-[64px] md:w-[64px] md:h-[64px] w-[38px] h-[38px] flex items-center justify-center' style={{ boxShadow: '0 4px 12px #00000024' }}> <img src={item.icon} alt={item.name} className="md:w-[32px] w-[20px] md:h-[32px] h-[20px]" /></div>

                        <div>
                            <h3 className="text-[#2D2523] lg:text-[20px] text-[12px] md:text-[16px] font-[400] mb-2">{item.name}</h3>
                            <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#2D2523] font-[400] lg:text-[20px] text-[12px] md:text-[16px] break-words"
                            >
                                {item.url}
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mx-auto px-4 md:mt-14 mt-8">
                {/* دو ستون اصلی */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    {/* ستون راست: تصویر و متن */}
                    <div className="md:col-span-5 lg:col-span-6 md:mr-4 lg:mr-0 flex flex-col items-center gap-12 text-center">
                        <div className="relative flex justify-center md:justify-end">
                            <img
                                src={Frame}
                                alt="تماس"
                                className="md:w-[370px] w-[277px] md:h-[370px] h-[214px] object-contain rounded-[40px] rounded-tr-none"
                            />

                            {/* مربع روی عکس */}
                            <div className="absolute md:top-[20px] top-[10px] custom-position border-1 border-[#362826] rounded-[40px] rounded-tr-none w-full md:max-w-[360px] max-w-[230px] shadow-[#00000040] h-[215px] md:h-[390px] rounded-[40px] rounded-tr-none object-cover"

                            />

                        </div>
                        <div className='lg:px-0'>
                            <p className='text-[#B85C38] font-bold lg:text-[22px] md:text-[18px] text-[16px] text-right'>چرا با ما تماس بگیرید؟</p>
                            <p className="text-[#2D2523] font-[500] lg:text-[22px] md:text-[18px] text-[16px] lg:w-[460px] md:w-[360px] text-right leading-[160%] tracking-[3%]">
                                دریافت مشاوره رایگان و تخصصی برای پروژه شما
                                ارزیابی دقیق پروژه و برآورد هزینه و زمان‌بندی
                                بهره‌مندی از تخصص و تجربه تیم حرفه‌ای ما
                                آغاز مسیر موفقیت پروژه با یک گفتگوی ساده
                                همین حالا با ما تماس بگیرید و اولین قدم را به سوی تحقق رویاهای خود بردارید!
                            </p>
                        </div>

                    </div>
                    {/* ستون چپ: فرم */}
                    <form className="md:col-span-6 bg-[#F7F3F1] md:h-[656px]  border-[#5D3D2E] rounded-[40px] border-1 p-6 space-y-8">
                        <p className="text-[#2D2523] md:font-[600] font-[700] lg:text-[20px] md:text-[13px] text-[12px] text-center whitespace-nowrap">اگر سوال یا نظر و انتقادی دارید با ما در میان بگذارید!<br />مااینجاییم تا پاسخ شما رو  در سریع ترین زمان ممکن بدهیم </p>

                        <input
                            type="text"
                            placeholder="نام"
                            className=" w-full bg-[#F1EAE7] px-4 py-3 focus:outline-none md:text-[20px] text-[12px] placeholder-[#2D2523]"
                        />
                        <input
                            type="text"
                            placeholder="نام خانوادگی"
                            className="w-full bg-[#F1EAE7] px-4 py-3 focus:outline-none md:text-[20px] text-[12px] placeholder-[#2D2523]"
                        />


                        <input
                            type="email"
                            placeholder="آدرس ایمیل"
                            className="w-full bg-[#F1EAE7] px-4 py-3 focus:outline-none md:text-[20px] text-[12px] placeholder-[#2D2523]"
                        />

                        <textarea
                            placeholder="متن"
                            rows={4}
                            className="rounded-[40px] rounded-tr-none focus:outline-none md:text-[20px] text-[12px] placeholder-[#2D2523] w-full bg-[#F1EAE7] px-4 py-3"
                        />

                        <div className="flex gap-4 md:mr-6  w-full">
                            <button
                                type="submit"
                                className="bg-[#B85C38] hidden md:block text-white px-[48px] py-[8px] rounded-[8px] cursor-pointer"
                            >
                                ثبت‌ نام
                            </button>
                            <button
                                type="button"
                                className="bg-[#fff] text-[#B85C38] mx-auto md:mx-1 border-3 border-[#B85C38] px-[48px] py-[8px] rounded-[8px] cursor-pointer"
                            >
                                مشاوره
                            </button>
                        </div>
                    </form>
                </div>

                {/* بخش زیر ستون‌ها */}
                <div className="mt-12 text-center bg-[#F1EAE7] rounded-[40px] rounded-tr-none md:pb-8 pb-3">
                    <p className="md:text-[20px] text-[12px] md:font-[600] text-[#000000] text-right md:pt-14 pt-4 px-2 md:px-14 leading-[198%]">
                        ما همیشه آماده شنیدن صدای شما هستیم. برای شروع یک پروژه جدید، دریافت مشاوره تخصصی یا پاسخ به هرگونه سوال، می‌توانید از راه‌های زیر با ما در تماس باشید<br />.
                        تیم ما مشتاقانه منتظر همکاری با شماست و در هر مرحله از پروژه همراه شما خواهد بود. ارتباط با ما، دریچه‌ای به سوی یک همکاری شفاف، هوشمندانه و نتیجه‌بخش است.
                    </p>
                    <button className="bg-[#B85C38] text-white px-[48px] py-[8px] mt-4 rounded-[8px] cursor-pointer">
                        تماس با ما
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
