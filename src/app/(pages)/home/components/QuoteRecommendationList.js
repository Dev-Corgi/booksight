import TitleTag from "@/app/components/TitleTag";
import QuoteRecommendationComponent from "./QuoteRecommendationComponent";

export default function QuoteRecommendationList() {

  return (
        <div className={`w-full h-min`}>
          <TitleTag title="오늘의 문장"></TitleTag>
          <div className="flex flex-row gap-[30px] ml-[28px] mt-[14px]">
            {Array.from({length : 6}).map((author, index) => {
              return (
                   <QuoteRecommendationComponent key = {index}></QuoteRecommendationComponent>
              );
            })}
          </div>
        </div>
  );
}
