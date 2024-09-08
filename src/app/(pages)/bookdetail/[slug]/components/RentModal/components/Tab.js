"use client";
export default function Tab(){
return(
<div className="w-min h-min">
<div className="flex flex-row gap-[37px] font-KopubWorldBold text-textColor-primary text-[23px] whitespace-nowrap">
  <p>주변 도서관 조회 결과</p>
</div>
<div className="relative mt-[1px] w-[230px] h-[3px]">
  <div className="absolute w-full h-full bg-black opacity-10"></div>
  <div className="absolute w-[102px] h-full bg-primary"></div>
</div>
</div>
)
}