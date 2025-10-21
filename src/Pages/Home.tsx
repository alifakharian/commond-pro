import RectangleProjects from "../Components/RectangleProjects";
import RectangleServices from "../Components/RectangleSevices";
import FAQSection from "../Components/QuastionBox";







// Images of Projects Part
const images: string[] = ["./Images/projects-part-desk-9.png", "./Images/projects-part-desk-9(2).png", "./Images/projects-part-desk-9(3).png"];

const Home = () => {
    return (
        <section>

            {/* About Us Part */}
            <div className="aboutUs-part">
                <h3 className="text-[#B85C38] font-bold text-[40px] leading-[160%] text-center mt-16 mb-16">دربــاره مــا</h3>
                <div className="flex items-start justify-center gap-[150px] h-[450px]">
                    <div className="aboutUs-part-text flex flex-col gap-[38px] w-[523px] h-[280px] items-start ">
                        <div className="flex flex-col gap-2 text-[#362826]">
                            <p className="font-bold text-[20px] leading-[200%] text-start">مجموعه ما، در قلب یک شرکت ساختمانی بزرگتر، نقش محوری را ایفا می‌کند. ما بیش از یک واحد فنی، یک مرکز نوآوری و راه‌حل‌های هوشمند هستیم</p>
                            <p className="font-bold text-[20px] leading-[200%] text-start">
                                با تکیه بر تیمی مجرب و دانش به‌روز، در تلاشیم تا با ارائه خدمات مهندسی در بالاترین سطح، تجربه‌ای موفق و بی‌نظیر را برای کارفرمایان خود رقم بزنیم. رویکرد ما بر پایه کار تیمی پویا، نوآوری جسورانه و تعهد بی‌قید و شرط به کیفیت است</p>
                        </div>
                        <button className="w-40 h-12 text-[#B85C38] text-[22px] rounded-[8px] border-[3px] border-[#B85C38]">
                            <a href="/commond-pro/aboutUs" className="font-medium flex justify-center ">درباره ما ←</a>
                        </button>
                    </div>
                    <div className="aboutUs-part-image relative inline-block">
                        <img src="./Images/aboutUs-part-desk-9.png" alt="projects-image" className="relative z-10 w-[506px] h-[400px] object-cover rounded-b-[40px] rounded-tr-[40px]" />
                        <span className="absolute inset-0 right-[416px] top-[27px] w-[32%] h-[55%] border-[6px] z-0 border-[#B85C38]"></span>
                    </div>
                </div>
            </div>

            {/* Servieces Part */}
            <div className="services-part">
                <h3 className="text-[#B85C38] font-bold text-[40px] leading-[160%] text-center mt-16 mb-16">خــدمات مــا</h3>
                <div className="grid grid-cols-2 gap-7">
                    <RectangleServices img="./Images/serivieces-part-desk-9(4).jpg" title=" اجرا و نظارت" description="اجرای پروژه طبق زمان‌بندی با استفاده از متریال نوین و سیستم‌های پیشرفته ساخت و ساز و...." />
                    <RectangleServices img="./Images/serivieces-part-desk-9.jpg" title="طراحی و مدل سازی" description="طراحی‌های معماری که روح به فضا می‌بخشند، همراه با دکوراسیون داخلی و نماهای خلاقانه و متمایز و..." />
                    <RectangleServices img="./Images/serivieces-part-desk-9(3).jpg" title="مشاوره و برنامه ریزی" description="بررسی دقیق نیازها و اهداف پروژه و ارائه بهترین راهکارهای اقتصادی و بهینه." />
                    <RectangleServices img="./Images/serivieces-part-desk-9(2).jpg" title="مدل‌سازی سیستم‌ها" description="مدل‌سازی دقیق و شبیه‌سازی واقع‌گرایانه پروژه پیش از شروع اجرا." />
                    <button className="w-40 h-12 text-[#B85C38] text-[22px] rounded-[8px] border-[3px] border-[#B85C38] mr-[46px]">
                        <a href="/commond-pro/servieces" className="font-medium flex justify-center ">خدمات ما ←</a>
                    </button>
                </div>
            </div>

            {/* Benefit Part */}
            <div className="benefit-part">
                <h3 className="text-[#B85C38] font-bold text-[40px] leading-[160%] text-center mt-16 mb-16">مــزیــت مــا</h3>

                <div className="benefits-items flex items-center justify-center gap-10">

                    <div className="benefits-items-child flex flex-col items-center justify-center gap-3.5 row-span-2 w-[276px] h-[506px] border-[#2D2523] border-[3px] rounded-b-[40px] rounded-tr-[40px] p-4">
                        <h3 className="text-[#B85C38] text-[22px] font-semibold">شفافیت و همکاری یکپارچه</h3>
                        <p className="text-[20px] font-normal text-[#000000]">با ارائه قراردادهای دقیق
                            وگزارش‌های دوره‌ای، هیچ هزینه پنهانی در کار نیست و شما همیشه در جریان جزئیات پروژه خواهید بود. همچنین، همکاری یکپارچه ما با سایر بخش‌های شرکت، از جمله فروشگاه مصالح و ری‌دیزاین، تضمین می‌کند که تمام نیازهای شما به بهترین نحو پوشش داده شود و پروژه بدون وقفه پیش برود.</p>
                    </div>

                    <div className="flex flex-col gap-[13px]">

                        <div className="wraper-benefits flex gap-[18px]">
                            <div className="benefits-items-child flex flex-col items-center gap-1 w-[466px] h-[245px] border-[3px] border-[#B85C38] rounded-[40px]">
                                <img src="./Images/family_home.png" alt="home" className="w-[48px] h-[48px]" />
                                <h3 className="text-[#B85C38] text-[22px] font-semibold">خلق فضاهای اختصاصی برای کودکان</h3>
                                <p className="text-[22px] font-normal text-[#000000] text-center w-[456px] h-[140px] ">
                                    ما با رعایت کامل اصول روانشناسی و ایمنی، اتاق‌هایی را طراحی می‌کنیم که رشد، خلاقیت و آرامش کودکان را تضمین می‌کنند و محیطی مناسب برای بازی و یادگیری فراهم می‌آورند.
                                </p>
                            </div>
                            <div className="benefits-items-child flex flex-col items-center gap-1 w-[466px] h-[245px] border-[3px] border-[#B85C38] rounded-[40px]">
                                <img src="./Images/acute.png" alt="acute" className="w-[48px] h-[48px]" />
                                <h3 className="text-[#B85C38] text-[22px] font-semibold">شفافیت کامل در هزینه و زمان‌بندی:</h3>
                                <p className="text-[22px] font-normal text-[#000000] text-center w-[456px] h-[140px] ">
                                    پروژه‌های ما مجهز به سیستم‌های هوشمند ایمنی و آتش‌نشانی پیشرفته هستند تا فضایی امن وکارآمد
                                    ایجاد کنند. این تکنولوژی‌ها باعث افزایش بهره‌وری و کاهش هزینه‌ها می‌شوند.
                                </p>
                            </div>
                        </div>

                        <div className="benefits-items-child flex flex-col items-center gap-3.5 w-[946px] h-[248px] border-[3px] border-[#2D2523] rounded-b-[40px] rounded-tr-[40px] col-span-2 p-4">
                            <img src="./Images/draw.png" alt="draw" className="w-[49px] h-[49px] " />
                            <h3 className="text-[#B85C38] text-[22px] font-semibold">نوآوری و هوش مصنوعی در طراحی</h3>
                            <p className="text-[22px] font-normal text-[#000000]">
                                با بهره‌گیری از ابزارهای هوش مصنوعی، دکوراسیون داخلی پروژه‌ها به شکل کاملاً شخصی‌و منحصربه‌فرد طراحی می‌شود. این فناوری به ما امکان می‌دهد پالت‌های رنگی، چیدمان مبلمان و سبک‌های دکوراسیون را دقیقاً مطابق با سلیقه و نیاز شما بهینه کنیم و فضایی الهام‌بخش خلق کنیم.
                            </p>
                        </div>

                    </div>
                </div>

            </div>


            {/* Projects Part */}
            <div className="projects-part">

                <h3 className="text-[#B85C38] font-bold text-[40px] leading-[160%] text-center mt-16 mb-16">پــروژه هــا</h3>

                <div className="flex flex-col gap-[60px]">
                    {
                        images.map((item, index) => {
                            return (

                                <RectangleProjects index={index} item={item} key={index}/>
                            )
                        })
                    }
                </div>

            </div>


            {/* Contact Us Part */}
            <div className="contactUs-part">
                <h3 className="text-[#B85C38] font-bold text-[40px] leading-[160%] text-center mt-16 mb-16">ارتباط با ما</h3>
                <div className="flex items-end bg-[#E0C09736]">

                    <div className="flex justify-center items-center">
                        <img src="./Images/contact-part-desk-9(1).png" className="contactUs-image w-full h-full object-cover relative -top-[38px] right-[289px] " />
                        <img src="./Images/contact-part-desk-9.png" className="contactUs-image-2 w-full h-full object-cover relative -top-[206px] right-[224px]" />
                        <img src="./Images/Group 1321314660.png" alt="description" className="contactUs-image-3 w-[933px] relative -right-[25px] " />
                    </div>
                    
                    <p className="contactUs-text font-bold text-[16px] text-[#362826] none">برای مشاوره و پشتیبانی فقط یک کلیک با ما فاصله دارید.</p>

                    <button className="border border-[#B85C38] text-[#B85C38] px-6 py-2 rounded-md hover:bg-[#B85C38] hover:text-white cursor-pointer w-[178px] my-[43px] mx-[62px] font-bold">
                        <a href="/commond-pro/contactUs">
                            ارتباط با ما ← 
                        </a>
                    </button>

                </div>

            </div>


            {/* Question Part */}
            <div className="question-part">
                <h3 className="text-[#B85C38] font-bold text-[40px] leading-[160%] text-center mt-16">سوالــات متــداول</h3>
                <FAQSection />
            </div>

        </section>
    )
}





export default Home;