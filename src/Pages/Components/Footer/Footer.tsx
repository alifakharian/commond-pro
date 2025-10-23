import { Link } from "react-router-dom";
import { FaInstagram, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import type { Inavitem } from "../Navbar/Navbar";

function Footer() {
  const navItem: Inavitem[] = [
    { item: "خانه", link: "/" },
    { item: "درباره ما", link: "/Aboutus" },
    { item: "خدمات", link: "/serves" },
    { item: "پروژه ها", link: "/project" },
    { item: "تماس با ما", link: "/call" },
  ];

  return (
    <div className="bg-[#dbb658] py-6 px-3 text-gray-700">
      {/* بخش بالا */}
      <div className="flex flex-col md:flex-row-reverse justify-between  items-center md:items-start gap-5 mb-5">
        <div className="text-2xl font-bold">لوگو</div>

        <ul className="flex flex-wrap justify-center md:justify-center gap-3 md:gap-5 text-sm md:text-base">
          {navItem.map((elem) => (
            <li key={elem.link}>
              <Link to={elem.link} className="hover:text-[#463b1d] transition">
                {elem.item}
              </Link>
            </li>
          ))}
        </ul>
        <span></span>
      </div>

      {/* توضیح */}
      <p className="text-center text-[13px] md:text-sm font-thin mb-3">
        ایمیل خود را وارد کنید تا از جدیدترین اخبار ما مطلع شوید
      </p>

      {/* فرم ایمیل - همیشه وسط صفحه */}
      <div className="flex justify-center items-center mb-8">
        <div className="relative w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
          <input
            type="email"
            placeholder="ایمیل شما..."
            className="w-full h-10 md:h-12 text-sm font-semibold text-center rounded-lg border-2 focus:outline-none"
            autoComplete="off"
          />
          <button
            type="submit"
            className="absolute bg-zinc-700 w-[80px] md:w-[100px] left-1 top-1/2 -translate-y-1/2 text-white text-sm md:text-base p-1 rounded hover:bg-zinc-800 transition"
          >
            ثبت
          </button>
        </div>
      </div>

      {/* ایمیل، شماره تماس و شبکه‌های اجتماعی */}
      <div className="relative flex flex-col md:flex-row justify-between items-center mt-6 gap-4 text-center md:text-right">
        {/* شماره تماس سمت راست بالا */}
        <div className="md:absolute md:bottom-[40px] md:left-0 flex flex-row-reverse items-center gap-2 md:mr-3 mb-2 md:mb-0">
          <FaPhone className="text-[#463b1d] text-lg" />
          <p className="text-[16px]">09935353457</p>
        </div>

        {/* ایمیل */}
        <div className="flex flex-row-reverse items-center gap-5 md:mr-[120px]">
          <MdEmail className="text-[#463b1d] text-lg" />
          <p className="text-[16px]">sakhtebom</p>
        </div>

        {/* شبکه‌های اجتماعی */}
        <div className="flex text-[#463b1d] text-2xl gap-3 justify-center">
          <FaInstagram className="hover:text-pink-600 transition" />
          <FaTelegramPlane className="hover:text-sky-600 transition" />
          <MdEmail className="hover:text-yellow-700 transition" />
        </div>
      </div>

      <hr className="my-4 border-gray-400" />

      {/* کپی‌رایت */}
      <div className="text-center text-sm md:text-base">
        تمامی محتوا متعلق به سایت ساخت بوم می‌باشد
      </div>
    </div>
  );
}

export default Footer;
