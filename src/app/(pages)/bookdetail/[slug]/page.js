"use client"
import React,{useEffect,useState} from "react";
import BookSection from "./components/BookSection";
import DescriptionSection from "./components/DescriptionSection";
import ReviewSection from "./components/ReviewSection";
import BooklistSection from "@/app/components/BooklistSection";
import aladinISBNSearchHandler from "root/Handler/aladinISBNSearchHandler";
import aladinKeywordSearchHandler from "@handler/aladinKeywordSearchHandler";
import aladinListSearchHandler from "@handler/aladinListSearchHandler";
import AuthorSection from "./components/AuthorSection";
import { Provider } from "react-redux";
import store from "@redux/store";
export default function BookDetailPage({ params }) {
  const isbn13 = params.slug;
  const [book, setbook] = useState(undefined)
  const [authorList, setauthorList] = useState(Array.from({length:10}))
  const [recommentList, setrecommentList] = useState(Array.from({length:10}))


  useEffect(() => {
    async function fetchAladinISBNSearchHandler(){
    setbook(await aladinISBNSearchHandler(isbn13,["reviewList","fulldescription","authors","ratingInfo"]));
    }
    fetchAladinISBNSearchHandler();
  }, [])

  useEffect(() => {
    if (book !== undefined) {
    async function fetchRecommendations(){
      setrecommentList(await aladinListSearchHandler("ItemEditorChoice",book.categoryId))
    }
    fetchRecommendations();
  }
  }, [book])

  // localStorage.removeItem('userAddress');

  return (
    <Provider store={store}>
    <div className="w-full flex flex-col items-center justify-start overflow-y-scroll scroll no-scrollbar overflow-x-clip">
      <BookSection book={book}></BookSection>
      <div className="flex flex-col w-[85vw] mt-[110px] gap-y-[62px]">
        <DescriptionSection book = {book}></DescriptionSection>
        <ReviewSection book = {book}></ReviewSection>
        <AuthorSection book = {book} setauthorList={setauthorList}></AuthorSection>
        <BooklistSection title = "작가의 다른책" books={authorList}></BooklistSection>
        <BooklistSection title = "이런책은 어떠세요?" books={recommentList}></BooklistSection>
      </div>
    </div>
    </Provider>
  );
}
