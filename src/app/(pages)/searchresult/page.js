"use client";

import  React,{useEffect,useState} from "react";
import BookForList2 from "@/app/components/BookForList2";
// import BookData from "root/Data/bookData.json";
import { useSearchParams } from "next/navigation";
import aladinKeywordSearchHandler from "@handler/aladinKeywordSearchHandler";

export default function SearchResultPage() {
  const searchParams = useSearchParams();
  const searchWord = searchParams.get("SearchWord") || "default";

  const [books, setbooks] = useState(null);
  const [isFetching, setisFetching] = useState(true);

  useEffect(() => {
    async function fetchKeywordSearch() {
      const result = await aladinKeywordSearchHandler(searchWord);
      setbooks(result);
      setisFetching(false);
    }

    fetchKeywordSearch();
  }, []);

  return (
    <>
      {!isFetching && (
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap w-[80.56vw] st:w-[1160px] h-hull gap-x-[28.98px] gap-y-[25.99px] overflow-clip">
            {books.map((book, index) => {
              return (
                <div className="w-[169.02px] h-[333.07px]">
                  <BookForList2
                    book={book}
                    key={index}
                    width={169.02}
                  ></BookForList2>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
