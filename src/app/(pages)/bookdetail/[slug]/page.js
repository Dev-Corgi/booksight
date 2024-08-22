"use client"
import React,{useEffect,useState} from "react";
import BookSection from "./components/BookSection";
import DescriptionSection from "./components/DescriptionSection";
import ReviewSection from "./components/ReviewSection";
import Booklist2 from "@/app/components/Booklist2";
import aladinISBNSearchHandler from "@handler/aladinISBNSearchHandler";

export default function BookDetailPage({ params }) {
  const isbn13 = params.slug;
  const [book, setbook] = useState(null)
  const [isFetching, setisFetching] = useState(true)

  useEffect(() => {
    async function  fetchBook(){
    const result = await aladinISBNSearchHandler(isbn13);
    setbook(result);
    setisFetching(false);
    }

    

    fetchBook();
  }, [])

  return (
    <>
    {!isFetching && <div className="w-full mt-[111px] flex flex-col items-center justify-center">
      <BookSection book={book}></BookSection>
      <div className="flex flex-col w-[85vw] -mt-[5px] gap-y-[62px]">
        <DescriptionSection disc = {book.description}></DescriptionSection>
        <ReviewSection></ReviewSection>
        <Booklist2></Booklist2>
        <Booklist2></Booklist2>
      </div>
    </div>}
    </>
  );
}
