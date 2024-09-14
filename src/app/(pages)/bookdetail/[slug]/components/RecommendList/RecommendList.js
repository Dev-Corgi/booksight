"use client"
import React,{useState,useEffect} from "react";
import BooklistSection from "@/app/components/BooklistSection";
import aladinListSearchHandler from "@handler/aladinListSearchHandler";

export default function RecommendList({ book }) {
    const [recommendList, setrecommendList] = useState(Array.from({length : 10}))

    useEffect(() => {
        // book이 Promise를 반환하므로, 비동기 함수를 useEffect 내부에서 호출합니다.
        const fetchData = async () => {
          try {
            const result = await book;
            setrecommendList(await aladinListSearchHandler("ItemEditorChoice", result.categoryId))
          } catch (error) {
            console.error("Error fetching book data:", error);
            // 에러 처리 로직을 추가할 수 있습니다.
          }
        };
    
        fetchData();
      }, [book]);


    return (
        <>
            <BooklistSection title="이런 책은 어떠세요?" books={recommendList} />
        </>
    );
}
