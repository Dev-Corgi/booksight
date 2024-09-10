"use client";

import Profile from "./components/Profile";
import React, { useEffect, useState } from "react";
import DiscriptionSection from "./components/DiscriptionSection";
import CommentSection from "./components/CommentSection";
import TimelineSection from "./components/TimelineSection";
import BooklistSection from "@/app/components/BooklistSection";
import aladinAuthorSearchHandler from "@handler/aladinAuthorBooksSearchHandler";
import { useSearchParams } from "next/navigation";

export default function AuthorDetailPage({ params }) {
  const searchParams = useSearchParams();
  const authorCode = params.authorCode;
  const authorName = searchParams.get("authorName"); // 다른 쿼리 파라미터

  const [books, setBooks] = useState(Array.from({ length: 10 }));

  useEffect(() => {
    if (authorName != undefined && authorCode != undefined) {
      async function fetchAuthorData() {
        setBooks(await aladinAuthorSearchHandler(authorName, authorCode));
      }

      fetchAuthorData();
    }
  }, [authorName, authorCode]);

  return (
    <div className="flex overflow-y-scroll scroll no-scrollbar overflow-x-clip">
      <div className="flex flex-col mt-[179px] w-full h-min bg-discriptionPanel text-black">
        <div className="flex flex-col flex-grow ml-[60px] -mt-[79px]">
          <Profile
            books={books}
            authorName={authorName}
            authorCode={authorCode}
          ></Profile>

          <div className="flex flex-col w-full mt-[28px] gap-[60px]">
            <div className="flex flex-row  gap-[54px] h-[639px]">
              <div className="flex flex-col flex-grow gap-[60px]">
                <DiscriptionSection
                  authorCode={authorCode}
                ></DiscriptionSection>

                <CommentSection></CommentSection>
              </div>

              <TimelineSection books={books}></TimelineSection>
            </div>

            <BooklistSection
              title="작가의 다른책"
              books={books}
            ></BooklistSection>
          </div>
        </div>
      </div>
    </div>
  );
}






