import React,{useEffect,uesState} from "react";
import TitleTag from "@/app/components/TitleTag";
import AuthorRecommendComponent from "./AuthorRecommendComponent";

export default function AuthorRecommendationList() {

  return (
        <div className={`w-full h-min`}>
          <TitleTag title="주목할 작가들"></TitleTag>
          <div className="flex flex-row gap-[30px] ml-[28px] mt-[14px]">
            {Array.from({length : 6}).map((author, index) => {
              return (
                   <AuthorRecommendComponent key = {index}></AuthorRecommendComponent>
              );
            })}
          </div>
        </div>
  );
}
