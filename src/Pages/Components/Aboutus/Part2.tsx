function Part2() {
  return (
    <div
      className="flex pl-[50px] gap-3vw flex-row-reverse flex-nowrap justify-between items-center border-2  border-gray-700 mx-5 my-2 p-3
    rounded-b-3xl rounded-tl-3xl
    "
    >
      {/* بخش سمت راست */}
      <div className="flex flex-row-reverse bg-red- ml-3  flex-nowrap items-center gap-[4vw] sm:gap-[3vw] md:gap-[10vw]">
        <div
          className="flex flex-col font-black text-sm sm:text-base md:text-lg"
          dir="rtl"
        >
          <p>جوایز</p>
          <p>صنعتی</p>
        </div>
        <div className="flex flex-row-reverse items-baseline text-orange-700 font-black text-xl sm:text-2xl md:text-3xl">
          <p>150</p>
          <p className="mt-[2px]">+</p>
        </div>
        <div
          className="flex flex-col font-black text-sm sm:text-base md:text-lg"
          dir="rtl"
        >
          <p>رضایت</p>
          <p>مشتری</p>
        </div>
        <div className="flex flex-row-reverse items-baseline text-orange-700 font-black text-xl sm:text-2xl md:text-3xl">
          <p>150</p>
          <p className="mt-[2px]">+</p>
        </div>
      </div>

      {/* جداکننده و بخش سمت چپ */}
      <div className="flex flex-row-reverse flex-nowrap bg-blue-4 items-center gap-[3vw] sm:gap-[2vw] md:gap-[4vw]">
        <div className="w-[1px] h-[50px] bg-gray-800"></div>
        <div
          className="flex flex-col font-black text-sm sm:text-base md:text-lg"
          dir="rtl"
        >
          <p>پروژه</p>
          <p>تکمیل</p>
        </div>
        <div className="flex flex-row-reverse items-baseline text-orange-700 font-black text-xl sm:text-2xl md:text-3xl">
          <p>200</p>
          <p className="mt-[2px]">+</p>
        </div>
      </div>
    </div>
  );
}

export default Part2;
