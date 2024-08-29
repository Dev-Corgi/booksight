"use client";
import React,{useState,useEffect} from "react"
import { useSearchParams } from "next/navigation";
import Booklist from "@/app/components/Booklist";
import aladinKeywordSearchHandler from "@handler/aladinKeywordSearchHandler";

export default function SearchResultPage() {
  const searchParams = useSearchParams();
  const searchWord = searchParams.get("SearchWord") || "default";
  const [searchResult, setsearchResult] = useState(null)
  const [isFetching, setisFetching] = useState(true)

  useEffect(() => {
    async function fetchSearchResult(){
      setsearchResult(await aladinKeywordSearchHandler(searchWord));
      setisFetching(false);
    }

    fetchSearchResult();
  
  }, [])


  return (
    <>
    {!isFetching &&
    <div className="flex flex-col items-center">
        <Booklist className="flex flex-wrap w-[80.56vw] st:w-[1160px] h-hull  gap-x-[28.98px] gap-y-[25.99px] overflow-y-clip" width={169.02} books={searchResult}></Booklist>
    </div>
    }
    </>
  );
}
