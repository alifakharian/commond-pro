
type propProject = {
    item : string,
    index : number
}


const RectangleProjects = ({item , index} :propProject) => {

    return (
        <div className={`rectangleProjects-container flex items-center justify-evenly ${index % 2 === 0 ? "flex" : "flex-row-reverse"}`}>
            <img src={item} className="w-[610px] h-[431px] rounded-b-[40px] rounded-tr-[40px]" />
            <div className="flex flex-col items-start gap-10 w-[488px] ">
                <h3 className="font-normal text-[#2D2523] text-[44px] leading-9 ">پروژه</h3>
                <p className="font-bold text-[20px] leading-[160%] text-[#2D2523]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص </p>
                <button className="w-[173px] h-[48px] border-[3px] border-[#B85C38] rounded-[8px] flex gap-2.5 items-baseline justify-center">
                    <a href="" className="font-medium text-[22px] text-[#B85C38] ">جزئیات پروژه ←</a>
                </button>
            </div>
        </div>
    )

}


export default RectangleProjects;