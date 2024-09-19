import TitleTag from "@/app/components/TitleTag";
import AuthorRecommendComponent from "./AuthorRecommendComponent";

export default function AuthorRecommendationList() {
  return (
    <div className={"flex flex-col"}>
      <TitleTag title="주목할 작가들"></TitleTag>
      <div className="flex flex-row mt-[10px] lg:mt-[0.98vw]">
        <div className="flex flex-grow ml-[20px] lg:ml-[1.95vw]">
          <div className="flex flex-row gap-[23px] lg:gap-[2.25vw]">
            {Array.from({ length: 6 }).map((author, index) => {
              return (
                <AuthorRecommendComponent
                  key={index}
                ></AuthorRecommendComponent>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
