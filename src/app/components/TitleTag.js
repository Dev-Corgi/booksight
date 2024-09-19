
export default function TitleTag({title,height =34,font = "NotoSansKRSemiBold"}){

   const originHeight = 34;
   const scale = height/originHeight;

    return(
    <div className="flex flex-col w-min h-[22px] lg:h-[2.15vw]"
    style={{
        scale : scale
    }}>
    <div className="absolute w-full h-[6px] lg:h-[0.59vw] bottom-0 bg-primary -z-10"></div>
    <p className={`font-${font} whitespace-nowrap text-[16px] lg:text-[1.56vw] tracking-[-2px] pr-[4px] lg:pr-[0.39vw]`}>
      {title}
    </p>
  </div>
    )
}