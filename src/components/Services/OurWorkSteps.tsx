import React from "react";

interface OurWorkStepsProps {
  image?: string;  // الان اختیاری کردم چون ممکنه حذف بشه
  title: string;
  description: string;
  className?: string;
  colorText?: string;
  colorDescription?:string
  textAlignClass?:string
}

const OurWorkSteps: React.FC<OurWorkStepsProps> = ({ image, title, description, className,colorText,colorDescription,textAlignClass }) => {
  return (
    <div className={className}>
      {/* آیکون از عکس */}
      {image && (
        <div className="mb-4 flex justify-center">
          <img
            src={image}
            alt="آیکون"
            className="lg:h-[46px] h-[36px] lg:w-[59px] w-[49px] object-contain"
          />
        </div>
      )}

      {/* عنوان */}
      <h2 className={`lg:text-[26px] text-[20px] font-semibold mb-4 ${colorText}`}>{title}</h2>

      {/* متن */}
      <p className={`${colorDescription} font-medium lg:text-[20px] text-[14px] ${textAlignClass} leading-[160%] opacity-[80%]`}>{description}</p>
    </div>
  );
};


export default OurWorkSteps;
