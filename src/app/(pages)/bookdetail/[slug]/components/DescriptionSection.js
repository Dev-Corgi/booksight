import Image from "next/image";
import MoreIcon from "@svg/MoreIcon.svg"
import shadow2Img from "@png/shadow2.png";
import TitleTag from "@/app/components/TitleTag";
export default function DescriptionSection({ className,disc }) {

  return (
      <div className={`${className} flex flex-col`}>
        <TitleTag title = "책 살펴보기"></TitleTag>
        <div className="relative w-full h-[250.51px]">

          <div className="absolute -right-[68px] top-2 w-[626px] h-[338.98px]">
            <Image src={shadow2Img} alt = "shadow" fill sizes={1}></Image>
          </div>

          <div className="absolute flex flex-col w-auto h-full ml-[28px] mt-[14px] rounded-[15px] bg-discriptionPanel">
            <p className="mt-[17px] mx-[19px] text-[16px] whitespace-pre-wrap font-NotoSansKRRegular h-[184px] overflow-y-scroll align-text-top no-scrollbar text-textColor-primary">
              {
                // "인생 최악의 순간, 최고의 이웃을 만나다!”\n홀로 외로운 시간을 견디고 있을 당신을 위한\n‘성가신 이웃’의 ‘따뜻한 오지랖’\n\n매일 아침 6시 15분 전, 알람도 없이 한 남자가 일어난다. 항상 같은 시간, 같은 양의 커피를 내려 마신다. 커피포트에 남는 커피의 양도 언제나 일정하다. 그러고는 마을 시찰을 나선다. 시설물들이 고장 난 것은 없는지, 아니 정확히 말하자면 누군가 ‘고장 낸’ 것은 없는지 확인하러. 40년 동안 한집에서 살고, 같은 일과를 보내고, 한 세기의 3분의 1을 한 직장에서 일한 59세 남자 오베. 그에게 31세 젊은 관리자들은 말했다. ‘이제 좀 느긋하게 살면 좋지 않겠느냐’고. 이 한 마디와 함께 오베는 자신의 일생을 바친 직장에서 쫓겨난다. 그저 ‘이전 세대’가 되었다는 이유 하나만으로."
                disc
              }
            </p>
            <div className="mt-[12.5px] ml-[19px] gap-[8px] w-min h-min flex flex-row items-center">
              <div className="flex items-center justify-center w-[13px] h-[13px]">
                <div className="relative w-[3.47px] h-[13px] rotate-90">
                  <MoreIcon className = " text-textColor-primary"></MoreIcon>
                </div>
              </div>
              <p className="font-NotoSansKRMedium text-[14px] text-textColor-primary whitespace-nowrap">
                더 알아보기
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}
