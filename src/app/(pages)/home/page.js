// import React,{useState,useEffect} from "react"
"use server"
import { Suspense } from "react";
import Center from "./components/Center";
// import CategoryList from "./components/CategoryListLegacy";
import CategoryList from "./components/CategoryList";
import BooklistSection from "@/app/components/BooklistSection";
// import aladinListSearchHandler from "@handler/aladinListSearchHandler";
// import naruKeywordSearchHandler from "@handler/naruKeywordHandler";
import AuthorRecommendationList from "./components/AuthorRecommendationList";
import QuoteRecommendationList from "./components/QuoteRecommendationList";
// import CategoryList from "./components/CategoryList";

import pool from "root/lib/db";

export default async function HomePage() {

  async function getBestSellerList() {
    const [rows] = await pool.query('SELECT data FROM bestseller_list');
    return rows[0].data;
  }

  async function getNewList() {
    const [rows] = await pool.query('SELECT data FROM new_list');
    return rows[0].data;
  }

  async function getDeductionList() {
    const [rows] = await pool.query('SELECT data FROM deduction_list');
    return rows[0].data;
  }

  async function getRomanceList() {
    const [rows] = await pool.query('SELECT data FROM romance_list');
    return rows[0].data;
  }

const bestSellerList = await getBestSellerList();
const itemNewSpecialList = await getNewList();
const deductionList = await getDeductionList();
const romanceList = await getRomanceList();




  return (
    <div className="w-full h-full flex flex-col  items-center overflow-x-clip overflow-y-scroll scroll no-scrollbar">
      <Center className="mt-[6.46vw] st:mt-[93px]"></Center>
      <div className = "flex flex-col w-full ml-[6.39vw] mt-[3.19vw] st:ml-[108px] st:mt-[46px] gap-[60px]">
      <BooklistSection title="베스트 셀러" books={bestSellerList}></BooklistSection>
      <BooklistSection title="주목할 신간 도서" books={itemNewSpecialList}></BooklistSection>
      <CategoryList></CategoryList>
      <AuthorRecommendationList></AuthorRecommendationList>
      <BooklistSection title="범인은 누구?  추리 소설" books={deductionList}></BooklistSection>
      <BooklistSection title="내 마음이 짜릿해!  로맨스 소설" books={romanceList}></BooklistSection>
      <QuoteRecommendationList></QuoteRecommendationList>
      </div>
    </div>
  );
}
