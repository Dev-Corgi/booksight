"use client";
export default function Tab(){
return(
<div className="w-min h-min">
<div className="flex flex-row font-KopubWorldBold text-textColor-primary text-[16px] lg:text-[1.56vw] whitespace-nowrap">
  <p>주변 도서관 조회 결과</p>
</div>
<div className="relative mt-[1px] lg:mt-[1px] w-[164px] lg:w-[16.02vw] h-[2px] lg:h-[0.2vw]">
  <div className="absolute w-full h-full bg-black opacity-10"></div>
  <div className="absolute w-[87px] lg:w-[8.5vw] h-full bg-primary"></div>
</div>
</div>
)
}