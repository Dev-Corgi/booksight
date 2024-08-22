export default function TitleTag({title}){
    return(
    <div className="flex flex-col w-min h-min">
    <p className="font-NotoSansKRSemiBold whitespace-nowrap z-10 text-[22px] tracking-[-2px] pr-[7px]">
      {title}
    </p>
    <div className="w-full h-[8px] -mt-[13px] bg-primary z-0"></div>
  </div>
    )
}