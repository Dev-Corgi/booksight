import ClockIcon from "@svg/ClockIcon.svg"

export default function CategoryComponent(){
    return(
       <div className = "w-[138px] h-[61px] rounded-[18px] bg-black overflow-hidden">
          <div className = "ml-[22px] mt-[19px] flex flex-row gap-[4px]">
            <div className = "relative w-[26px] h-[26px]">
               <ClockIcon className = "text-white"></ClockIcon>
            </div>
            <p className = "mt-[3px] font-NotoSansKRMedium text-[12px] text-white">Trending</p>
          </div>
       </div>        
    )
}