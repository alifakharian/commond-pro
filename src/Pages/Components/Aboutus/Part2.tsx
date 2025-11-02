function Part2() {
  return (
    <div
      className="
      flex flex-col sm:flex-row justify-between items-center
      border-2 border-gray-700 mx-3 sm:mx-5 my-6 sm:my-[50px] 
      p-3 sm:p-5 rounded-b-3xl rounded-tl-3xl
      text-center sm:text-right
      "
    >
      {/* بخش سمت راست */}
      <div className="
        flex flex-col sm:flex-row items-center 
        gap-6 sm:gap-[6vw] md:gap-[8vw] 
        mb-4 sm:mb-0
      ">
        {/* جوایز صنعتی */}
        <div className="flex flex-col font-black text-sm sm:text-base md:text-lg" dir="rtl">
          <p>جوایز</p>
          <p>صنعتی</p>
        </div>
        <div className="flex flex-row-reverse items-baseline text-orange-700 font-black text-xl sm:text-2xl md:text-3xl">
          <p>150</p>
          <p className="mt-[2px]">+</p>
        </div>

        {/* رضایت مشتری */}
        <div className="flex flex-col font-black text-sm sm:text-base md:text-lg" dir="rtl">
          <p>رضایت</p>
          <p>مشتری</p>
        </div>
        <div className="flex flex-row-reverse items-baseline text-orange-700 font-black text-xl sm:text-2xl md:text-3xl">
          <p>150</p>
          <p className="mt-[2px]">+</p>
        </div>
      </div>

      {/* جداکننده و بخش سمت چپ */}
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-[3vw]">
        {/* خط جداکننده فقط در حالت desktop */}
        <div className="hidden sm:block w-[1px] h-[50px] bg-gray-800"></div>

        <div className="flex flex-col font-black text-sm sm:text-base md:text-lg" dir="rtl">
          <p>پروژه</p>
          <p>تکمیل</p>
        </div>
        <div className="flex gap-1 flex-row-reverse items-baseline text-orange-700 font-black text-xl sm:text-2xl md:text-3xl">
          <div>200</div>
          <div className="pt-2">+</div>
        </div>
      </div>
    </div>
  );
}

export default Part2;
