// HeroSection.tsx
import arrow from "../assets/images/Arrow 2.png"
type PhotoAndtitleProps = {
    img: string;
    title: string;
    text: string;
};
const PhotoAndtitle: React.FC<PhotoAndtitleProps> = ({ img, title, text }) => {
    return (
        <div className="relative md:h-[422px] h-[148px] mx-3 bg-cover bg-center bg-no-repeat mb-8 rounded-[40px] rounded-tr-none" style={{
            backgroundImage: `linear-gradient(to bottom, #36282600, #362826), url(${img})`
        }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
                <div className="text-right w-full md:max-w-2xl max-w-md">
                    <h1 className="text-[16px] text-[#FAFAFA] md:text-[48px] md:text-[#FF7838] font-[800] mb-3 text-right">{title}</h1>
                    <p className="text-[16px] text-[#FAFAFA] md:text-[36px] font-[500]">{text}</p>
                </div>
            </div>
            <button className="absolute bottom-6 left-10 md:w-[70px] w-[20px] md:h-[70px] h-[20px] cursor-pointer rounded-full text-[#FAFAFA] md:border-4 border-1 border-[#FAFAFA] text-2xl transition">
               <img src={arrow} className="md:w-[26px] w-[6px] mx-auto"/>
            </button>
        </div>
    );
};

export default PhotoAndtitle;
