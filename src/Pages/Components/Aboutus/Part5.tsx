import img3 from "../../images/Aboutus/3.jpg";
import img4 from "../../images/Aboutus/4.png";
import img5 from "../../images/Aboutus/5.png";
import img6 from "../../images/Aboutus/6.png";
import img7 from "../../images/Aboutus/7.png";
import img8 from "../../images/Aboutus/8.png";

function Part5() {
  return (
    <div className="my-[35px]">
      <h1 className="text-center my-3 text-orange-700 text-[45px] font-extrabold">
        تیم ما
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-5  gap-[100px] place-items-center mx-5 lg:mx-[80px]">
        <img src={img5} className="size-[290px] rounded-xl" />
        <img src={img4} className="size-[290px] rounded-xl" />
        <img src={img3} className="size-[290px] rounded-xl" />
        <img src={img8} className="size-[290px] rounded-xl" />
        <img src={img7} className="size-[290px] rounded-xl" />
        <img src={img6} className="size-[290px] rounded-xl" />
      </div>
    </div>
  );
}

export default Part5;
