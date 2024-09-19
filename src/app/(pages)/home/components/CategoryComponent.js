import ClockIcon from "@svg/ClockIcon.svg"

export default function CategoryComponent(){
    return(
       <div className = "w-[98px] lg:w-[9.57vw] h-[43px] lg:h-[4.2vw] rounded-[13px] lg:rounded-[1.27vw] bg-black overflow-hidden">
          <div className = "ml-[16px] lg:ml-[1.56vw] mt-[13px] lg:mt-[1.27vw] flex flex-row gap-[3px] lg:gap-[0.29vw]">
            <div className = "relative w-[18px] lg:w-[1.76vw] h-[18px] lg:h-[1.76vw]">
               <ClockIcon className = "text-white"></ClockIcon>
            </div>
            <p className = "mt-[2px] lg:mt-[0.2vw] font-NotoSansKRMedium text-[9px] lg:text-[0.88vw] text-white">Trending</p>
          </div>
       </div>        
    )
}