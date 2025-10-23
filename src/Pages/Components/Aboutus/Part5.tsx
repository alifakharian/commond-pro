import img2 from "../../images/Aboutus/2.jpg";

function Part5() {
  return (
    <div className="my-[35px]">
      <h1 className="text-center my-3 text-orange-700 text-[45px] font-extrabold">
        تیم ما
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-5  gap-[100px] place-items-center mx-5 lg:mx-[80px]">
        <img src={img2} className="size-[350px] rounded-xl" />
        <img src={img2} className="size-[350px] rounded-xl" />
        <img src={img2} className="size-[350px] rounded-xl" />
        <img src={img2} className="size-[350px] rounded-xl" />
        <img src={img2} className="size-[350px] rounded-xl" />
        <img src={img2} className="size-[350px] rounded-xl" />
      </div>
    </div>
  );
}

export default Part5;
