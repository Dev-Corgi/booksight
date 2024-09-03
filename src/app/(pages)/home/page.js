"use client"
import React,{useState,useEffect} from "react"
import Center from "./components/Center";
import CategoryList from "./components/CategoryList";
import CommentaryList from "./components/CommentaryList";
import BooklistSection from "@/app/components/BooklistSection";
import aladinListSearchHandler from "@handler/aladinListSearchHandler";
import naruKeywordSearchHandler from "@handler/naruKeywordHandler";
export default function HomePage() {

  const [bestSellerList, setbestSellerList] = useState(null)
  const [itemNewSpecialList, setitemNewSpecialList] = useState(null)
  const [deductionList, setdeductionList] = useState(null)
  const [romanceList, setromanceList] = useState(null)

  useEffect(() => {
  async function fetchLists(){
    setbestSellerList(await aladinListSearchHandler("Bestseller"));
    setitemNewSpecialList(await aladinListSearchHandler("ItemNewSpecial"));
    setdeductionList(await naruKeywordSearchHandler("추리 소설"));
    setromanceList(await naruKeywordSearchHandler("로맨스 소설"));
  }

  fetchLists();
  }, [])


  return (
    <>
    <div className="w-full h-full flex flex-col  items-center overflow-x-clip">
      <Center className="mt-[6.46vw] st:mt-[93px]"></Center>
      <div className = "flex flex-col w-full ml-[6.39vw] mt-[3.19vw] st:ml-[108px] st:mt-[46px] gap-[60px]">
      <BooklistSection title="베스트 셀러" books={bestSellerList}></BooklistSection>
      <BooklistSection title="주목할 신간 도서" books={itemNewSpecialList}></BooklistSection>
      <CategoryList></CategoryList>
      <CommentaryList></CommentaryList>
      {/* <BooklistSection title="범인은 누구?  추리 소설" books={deductionList}></BooklistSection>
      <BooklistSection title="내 마음이 짜릿해!  로맨스 소설" books={romanceList}></BooklistSection> */}
      </div>
    </div>
    </>
  );
}
