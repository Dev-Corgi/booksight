
export default function TitleTag({title,height =34,font = "NotoSansKRSemiBold"}){

   const originHeight = 34;
   const scale = height/originHeight;

    return(
    <div className="flex flex-col w-min h-min pb-[3px] pt-[24px] origin-top-left"
    style={{
        scale : scale
    }}>
    <div className="w-full h-[8px] bg-primary"></div>
    <p className={`font-${font} whitespace-nowrap text-[22px] tracking-[-2px] pr-[7px] -mt-[30px]`}>
      {title}
    </p>
  </div>
    )
}