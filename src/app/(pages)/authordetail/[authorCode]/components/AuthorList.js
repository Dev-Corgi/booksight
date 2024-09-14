"use client"
import React,{useState,useEffect} from "react";
import BooklistSection from "@/app/components/BooklistSection";
export default function AuthorList({ books }) {
    const [authorList, setAuthorList] = useState(Array.from({length : 10}))

    useEffect(() => {
        // book이 Promise를 반환하므로, 비동기 함수를 useEffect 내부에서 호출합니다.
        const fetchData = async () => {
          try {
            setAuthorList(await books)
          } catch (error) {
            console.error("Error fetching book data:", error);
            // 에러 처리 로직을 추가할 수 있습니다.
          }
        };
    
        fetchData();
      }, [books]);


    return (
        <>
            <BooklistSection title="작가의 다른책" books={authorList} />
        </>
    );
}
