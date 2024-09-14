"use client"
import React,{useState,useEffect} from "react";
import TitleTag from "@/app/components/TitleTag";
import TimelineComponent from "./TimelineComponent";

export default function TimelineSection({books}) {
  const [currentBooks, setCurrentBooks] = useState(Array.from({length : 10}))

  useEffect(() => {
      // book이 Promise를 반환하므로, 비동기 함수를 useEffect 내부에서 호출합니다.
      const fetchData = async () => {
        try {
          setCurrentBooks(await books)
        } catch (error) {
          console.error("Error fetching book data:", error);
          // 에러 처리 로직을 추가할 수 있습니다.
        }
      };
  
      fetchData();
    }, [books]);
  return (
    <div className = "relative flex flex-col w-[394px] h-full  shrink-0">
    <TitleTag title = {"타임 라인"}></TitleTag>
    <div className = "flex flex-col ml-[28px] mt-[31px] overflow-y-scroll scroll no-scrollbar">
      {currentBooks.map((book,index) => {
        return <TimelineComponent book={book} key = {index}></TimelineComponent>
      })
      }
    </div>
    <div className = "absolute left-[43.75px] top-[95px] w-[0.5px] h-[555px] bg-primary -z-10"></div>
  </div>
  );
}
