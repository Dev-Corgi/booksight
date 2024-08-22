"use client"

import React,{useEffect,useState} from "react";
import BookForList2 from "./BookForList2";
import TitleTag from "./TitleTag";
import aladinKeywordSearchHandler from "@handler/aladinKeywordSearchHandler";
export default function Booklist2({ className }) {
  const [books, setbooks] = useState(null);
  const [isFetching, setisFetching] = useState(true);

  useEffect(() => {
    async function fetchKeywordSearch() {
      const result = await aladinKeywordSearchHandler("default");
      setbooks(result);
      setisFetching(false);
    }

    fetchKeywordSearch();
  }, []);

  return (
    <>
      {!isFetching && (
        <div className={`${className} w-full h-min`}>
          <TitleTag title="베스트 셀러"></TitleTag>

          <div className="flex flex-row w-min h-min ml-[28px] mt-[14px] gap-[45px]">
            {books.map((book, index) => {
              return (
                <BookForList2
                  width={125.2}
                  book={book}
                  key={index}
                ></BookForList2>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
