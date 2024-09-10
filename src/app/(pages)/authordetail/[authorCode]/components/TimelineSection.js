"use client"
import TitleTag from "@/app/components/TitleTag";
import TimelineComponent from "./TimelineComponent";

export default function TimelineSection({books}) {
  return (
    <div className = "relative flex flex-col w-[394px] h-full  shrink-0">
    <TitleTag title = {"타임 라인"}></TitleTag>
    <div className = "flex flex-col ml-[28px] mt-[31px] overflow-y-scroll scroll no-scrollbar">
      {books.sort((a, b) => new Date(a.pubDate) - new Date(b.pubDate)).map((book,index) => {
        return <TimelineComponent book={book} key = {index}></TimelineComponent>
      })
      }
    </div>
    <div className = "absolute left-[43.75px] top-[95px] w-[0.5px] h-[555px] bg-primary -z-10"></div>
  </div>
  );
}
