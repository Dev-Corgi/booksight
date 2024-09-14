"use client"
import React,{useState,useEffect} from "react";
import BooklistSection from "@/app/components/BooklistSection";
import aladinKeywordSearchHandler from "@handler/aladinKeywordSearchHandler";
export default function AuthorList({ book }) {
    const [authorList, setAuthorList] = useState(Array.from({length : 10}))

    useEffect(() => {
        // book이 Promise를 반환하므로, 비동기 함수를 useEffect 내부에서 호출합니다.
        const fetchData = async () => {
          try {
            const result = await book;
            setAuthorList(await aladinKeywordSearchHandler(result.author, "Author"))
          } catch (error) {
            console.error("Error fetching book data:", error);
            // 에러 처리 로직을 추가할 수 있습니다.
          }
        };
    
        fetchData();
      }, [book]);


    return (
        <>
            <BooklistSection title="이런 책은 어떠세요?" books={authorList} />
        </>
    );
}
