import React, { useEffect, uesState } from "react";
import commentaryData from "@data/commentaryData.json";
import TitleTag from "@/app/components/TitleTag";
import Commentary from "./Commentary";

export default function CommentaryList() {
  return (
    <div className={"flex flex-col"}>
      <TitleTag title="책속 한마디"></TitleTag>
      <div className="flex flex-row mt-[10px] lg:mt-[0.98vw]">
        <div className="flex flex-grow ml-[20px] lg:ml-[1.95vw]">
          {commentaryData.map((comment, index) => {
            return <Commentary comment={comment} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
