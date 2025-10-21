


type propRectangle = {
    img : string,
    description : string,
    title : string
}


const RectangleServices = ({img , description , title} : propRectangle) => {
    return (
        <div className="rectangleServices-container flex items-start justify-evenly">
            <img src={img} alt={title} className="w-[188px] h-[126px] rounded-b-[40px] rounded-tl-[40px] object-cover"/>
            <div className="rectangleServices-text flex flex-col items-start gap-3.5 w-[404px] h-[126px]">
                <h3 className="text-[26px] font-bold text-[#B85C38]">{title}</h3>
                <p className="text-[20px] font-bold text-[#362826] text-start">{description}</p>
            </div>
        </div>
    )
};




export default RectangleServices;