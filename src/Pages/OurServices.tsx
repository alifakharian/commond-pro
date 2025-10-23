import React from "react";
import { ServiceStep, OurWorkSteps } from "../components/Services";
import { servicesSteps } from "../data/servicesSteps";
import { ourWorkSteps } from "../data/ourWorkSteps";
import PhotoAndtitle from "../components/PhotoAndtitle";
import { image2 } from "../assets/images/contactus";

const OurServices: React.FC = () => {

  return (
    <>
      <div className="lg:py-[80px] py-[26px] max-w-[1232px] mx-auto">
        <PhotoAndtitle img={image2} title="خدمات ما" text="خدمــات مهندســی ساختمانــی ســــاختبوم"/>
        <div className="grid xl:gap-[80px] gap-[20px]">
          {servicesSteps.map((step, index) => (
            <ServiceStep
              key={index}
              image={step.image}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>

      <div className="hidden md:block">
        <h3 className="text-[48px] font-extrabold text-[#B85C38] text-center mb-[60px]">مراحل کار ما</h3>
        <div className="bg-[#FFF9F5]">
          <div className="py-[80px] md:px-4 xl:px-0 mb-[60px] max-w-[1232px] mx-auto md:grid md:grid-cols-3 gap-6">
            {ourWorkSteps.map((step, index) => {
              const bgClass =
                index === 2 ? 'bg-transparent' : index === 1 ? 'bg-[#B85C38]' : 'bg-white';
              const borderClass =
                index === 2 ? 'border-none' : 'border-2 border-[#4252CF1A]';
              const colorText = index === 1 ? 'text-[#FAFAFA]' : 'text-[#B85C38]';
              const colorDescription = index === 1 ? 'text-[#FAFAFA]' : 'text-[#05000B]';
               const textAlignClass = index === 4 || index === 5 ? 'text-center' : 'text-right';

              return (
                <OurWorkSteps
                  key={index}
                  image={index === 2 ? undefined : step.image}
                  title={step.title}
                  description={step.description}
                  className={`p-6 rounded-[10px] text-center ${bgClass} ${borderClass}`}
                  colorText={colorText}
                  colorDescription={colorDescription}
                  textAlignClass={textAlignClass}
                />
              );
            })}
          </div>
        </div>
      </div>

    </>
  );
};

export default OurServices;
