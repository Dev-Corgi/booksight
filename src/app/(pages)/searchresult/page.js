"use client";

import React, { useEffect, useState } from "react";
import BookForList2 from "@/app/components/BookForList2";
import { useSearchParams } from "next/navigation";
import aladinKeywordSearchHandler from "@handler/aladinKeywordSearchHandler";

export default function SearchResultPage() {
  const searchParams = useSearchParams();
  const searchWord = searchParams.get("SearchWord") || "default";

  const [books, setBooks] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    async function fetchKeywordSearch() {
      try {
        const result = await aladinKeywordSearchHandler(searchWord);
        setBooks(result);
      } catch (error) {
        console.error("Failed to fetch books", error);
      } finally {
        setIsFetching(false);
      }
    }

    fetchKeywordSearch();
  }, [searchWord]);

  return (
    <div className="flex flex-col items-center">
      {isFetching ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-wrap w-[80.56vw] st:w-[1160px] h-hull gap-x-[28.98px] gap-y-[25.99px] overflow-clip">
          {books.map((book, index) => (
            <div className="w-[169.02px] h-[333.07px]" key={index}>
              <BookForList2 book={book} width={169.02} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
