export default function Tab(){

return(
<div className="w-min h-min">
<div className="flex flex-row gap-[37px] font-KopubWorldBold text-textColor-primary text-[23px] whitespace-nowrap">
  <p>주변 도서관</p>
  <p>전체 도서관</p>
  <p>택배 대출</p>
</div>
<div className="relative mt-[1px] w-[408px] h-[3px]">
  <div className="absolute w-full h-full bg-black opacity-10"></div>
  <div className="absolute w-[102px] h-full bg-primary"></div>
</div>
</div>
)
}