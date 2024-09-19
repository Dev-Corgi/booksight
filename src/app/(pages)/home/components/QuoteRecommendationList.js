import TitleTag from "@/app/components/TitleTag";
import QuoteRecommendationComponent from "./QuoteRecommendationComponent";

export default function QuoteRecommendationList() {
  return (
    <div className="flex flex-col">
      <TitleTag title="오늘의 문장"></TitleTag>
      <div className="flex flex-row mt-[10px] lg:mt-[0.98vw]">
        <div className="flex flex-grow ml-[20px] lg:ml-[1.95vw]">
          <div className="flex flex-row gap-[23px] lg:gap-[2.25vw]">
            {Array.from({ length: 6 }).map((author, index) => {
              return (
                <QuoteRecommendationComponent
                  key={index}
                ></QuoteRecommendationComponent>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
