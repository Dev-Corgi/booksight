import React,{useEffect,uesState} from "react";
import commentaryData from "@data/commentaryData.json";
import TitleTag from "@/app/components/TitleTag";
import Commentary from "./Commentary";

export default function CommentaryList() {

  return (
        <div className={`w-full h-min`}>
          <TitleTag title="베스트 셀러"></TitleTag>
          <div className="flex flex-row gap-[30px] ml-[28px] mt-[14px]">
            {commentaryData.map((comment, index) => {
              return (
                   <Commentary comment={comment} key = {index}/>
              );
            })}
          </div>
        </div>
  );
}
