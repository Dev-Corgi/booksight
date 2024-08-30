"use client"
import React,{useEffect,useState} from "react";
import BookSection from "./components/BookSection";
import DescriptionSection from "./components/DescriptionSection";
import ReviewSection from "./components/ReviewSection";
import BooklistSection from "@/app/components/BooklistSection";
import aladinISBNSearchHandler from "root/Handler/aladinISBNSearchHandler";
import aladinKeywordSearchHandler from "@handler/aladinKeywordSearchHandler";
import readersSearchHandler from "@handler/readersSearchHandler";
export default function BookDetailPage({ params }) {
  const isbn13 = params.slug;
  const [book, setbook] = useState(undefined)
  const [authorList, setauthorList] = useState(null)
  const [recommentList, setrecommentList] = useState(null)
  const [isLoading,setIsLoading] = useState(true);


  useEffect(() => {
    async function fetchAladinISBNSearchHandler(){
    setbook(await aladinISBNSearchHandler(isbn13));
    }
    fetchAladinISBNSearchHandler();
  }, [])

  useEffect(() => {
    if (book !== undefined) {
    async function fetchRecommendations(){
      setauthorList(await aladinKeywordSearchHandler(book.author,"Author"));
      setrecommentList(await readersSearchHandler(isbn13))
    }
    fetchRecommendations();
  }
  }, [book])

    

  return (
    <div className="w-full mt-[111px] flex flex-col items-center justify-center">
      <BookSection book={book}></BookSection>
      <div className="flex flex-col w-[85vw] -mt-[5px] gap-y-[62px]">
        <DescriptionSection book = {book}></DescriptionSection>
        <ReviewSection></ReviewSection>
        <BooklistSection title = "작가의 다른책" books={authorList}></BooklistSection>
        <BooklistSection title = "이런책은 어떠세요?" books={recommentList}></BooklistSection>
      </div>
    </div>
  );
}
