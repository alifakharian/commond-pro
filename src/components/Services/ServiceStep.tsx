import React from "react";

interface ServiceStepProps {
    image: string;
    title: string;
    description: string;
}

const ServiceStep: React.FC<ServiceStepProps> = ({ image, title, description }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white md:gap-[64px] gap-2 px-3 lg:px-4">
            {/* بخش متن */}
            <div className="w-full max-w-[519px] h-auto md:h-[365px] lg:mt-[30px] mx-auto">
                <h3 className="lg:text-[36px] md:text-[26px] text-[16px] font-extrabold text-[#B85C38] mb-2">{title}</h3>
                <p className="text-[#362826] lg:text-[22px] md:text-[18px] text-[12px] md:font-[600] font-[500] text-right leading-[34px]">{description}</p>
            </div>

            {/* بخش عکس */}
            <div className="relative flex justify-center md:justify-end">
                <img
                    src={image}
                    alt={title}
                    className="md:w-[613px] w-[361px] md:h-[536px] h-[137px] object-contain rounded-[40px] rounded-tr-none"
                />

                {/* مربع روی عکس */}
                <div
                    className="absolute xl:top-[30px] lg:top-[70px] border-1 border-[#362826] rounded-[40px] rounded-tr-none hidden lg:block md:w-[95%] lg:h-[67%] xl:h-[80%] w-[90vw] h-auto"
                    style={{
                        left: '64px',
                        right: '-32px',
                    }}
                />

            </div>
        </div>
    );
};

export default ServiceStep;
