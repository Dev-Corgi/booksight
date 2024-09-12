// import React,{useState,useEffect} from "react"
import { Suspense } from "react";
import Center from "./components/Center";
// import CategoryList from "./components/CategoryListLegacy";
import BooklistSection from "@/app/components/BooklistSection";
// import aladinListSearchHandler from "@handler/aladinListSearchHandler";
// import naruKeywordSearchHandler from "@handler/naruKeywordHandler";
import AuthorRecommendationList from "./components/AuthorRecommendationList";
import QuoteRecommendationList from "./components/QuoteRecommendationList";
// import CategoryList from "./components/CategoryList";

import bestSellerList from "root/RealData/Bestseller.json"
import itemNewSpecialList from "root/RealData/ItemNewSpecial.json"
import deductionList from "root/RealData/deductionList.json"
import romanceList from "root/RealData/romanceList.json"

export default function HomePage() {

  // const [bestSellerList, setbestSellerList] = useState(Array.from({length:10}))
  // const [itemNewSpecialList, setitemNewSpecialList] = useState(Array.from({length:10}))
  // const [deductionList, setdeductionList] = useState(Array.from({length:10}))
  // const [romanceList, setromanceList] = useState(Array.from({length:10}))

  // const [isLoading, setisLoading] = useState(true)
  // const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  // useEffect(() => {
  // async function fetchLists(){
  //   setbestSellerList(await aladinListSearchHandler("Bestseller",1));
  //   setitemNewSpecialList(await aladinListSearchHandler("ItemNewSpecial",1));
  //   setdeductionList(await aladinListSearchHandler("ItemEditorChoice",50926));
  //   setromanceList(await aladinListSearchHandler("ItemEditorChoice",51250));
  //   setisLoading(false);
  // }

  // fetchLists();
  // }, [])

  // useEffect(() => {
    

  //   if (!isLoading) {
  //     const images = document.querySelectorAll('img:not([loading="lazy"])'); // Select <img> elements that are not lazy-loaded
  //     let loadedImagesCount = 0;
  
  //     const checkAllImagesLoaded = () => {
  //       loadedImagesCount++;
  //       if (loadedImagesCount === images.length) {
  //         setAllImagesLoaded(true); // Set state to true when all images are loaded
  //       }
  //     };
  
  //     if (images.length === 0) {
  //       // If there are no images to load immediately, consider all loaded
  //       setAllImagesLoaded(true);
  //     } else {
  //       images.forEach((img) => {
  //         if (img.complete) {
  //           // If the image is already cached or loaded
  //           checkAllImagesLoaded();
  //         } else {
  //           img.addEventListener('load', checkAllImagesLoaded); // Attach load event listener
  //         }
  //       });
  //     }

  
  //     return () => {
  //       images.forEach((img) => img.removeEventListener('load', checkAllImagesLoaded));
  //     };
  //   }

  // }, [isLoading]);


  return (
    <div className="w-full h-full flex flex-col  items-center overflow-x-clip overflow-y-scroll scroll no-scrollbar">
      <Center className="mt-[6.46vw] st:mt-[93px]"></Center>
      <div className = "flex flex-col w-full ml-[6.39vw] mt-[3.19vw] st:ml-[108px] st:mt-[46px] gap-[60px]">
      <BooklistSection title="베스트 셀러" books={bestSellerList}></BooklistSection>
      <BooklistSection title="주목할 신간 도서" books={itemNewSpecialList}></BooklistSection>
      <AuthorRecommendationList></AuthorRecommendationList>
      <BooklistSection title="범인은 누구?  추리 소설" books={deductionList}></BooklistSection>
      <BooklistSection title="내 마음이 짜릿해!  로맨스 소설" books={romanceList}></BooklistSection>
      <QuoteRecommendationList></QuoteRecommendationList>
      </div>
    </div>
  );
}
