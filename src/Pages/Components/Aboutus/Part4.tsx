import img1 from "../../images/Aboutus/2.jpg";

function Part4() {
  return (
    <>
      <div
        className="grid grid-cols-1 md:grid-cols-[40%_50%] mt-5  gap-[100px] place-items-center mx-5 lg:mx-[80px]"
        dir="rtl"
      >
        <div className=" p-5 flex flex-col justify-center h-full">
          <h1
            className="mb-3 text-orange-700 text-[30px] text-xl font-bold"
            dir="rtl"
          >
            ماموریت ما
          </h1>
          <p className="text-justify text-[14px] leading-[33px]">
            اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن
            های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا
            طرح‌نما (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون معنی است که
            برای امتحان فونت و یا پر کردن فضا در یک طراحی گرافیکی و یا صنعت چاپ
            استفاده میشود. طراحان وب و گرافیک از این متن برای پرکردن صفحه و
            ارائه شکل کلی طرح استفاده می‌کنند. طراحان سایت هنگام طراحی قالب سایت
            معمولا با این موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست
          </p>
        </div>

        <div className="relative">
          <img
            src={img1}
            className="size-[400px] rounded-b-2xl rounded-tr-2xl  img-fluid cursor-pointer"
          />
          <div className="absolute size-[440px]   border-2 rounded-b-3xl rounded-tl-3xl   border-gray-400 top-[-20px] right-[30px]"></div>
        </div>
      </div>
    </>
  );
}

export default Part4;
