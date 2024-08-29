"use client";
import { useRouter } from "next/navigation";
import Book from "@components/Book";
import ReviewStars from "./ReviewStars";
export default function Booklist({
  className,
  width = 125.2,
  books
}) {
  const router = useRouter();
  const originWidth = 125.2;
  const scale = width / originWidth;
  

  // 스코어 다듬기
  function getScore(score) {
    return Math.ceil(score / 2);
  }

  const handleClick = (isbn13) => {
    router.push(`/bookdetail/${isbn13}`);
  };


  return (
          <div className={`${className}`}>
            {books.map((book, index) => {
              return (
                <div className = "aspect-[1/2]" key = {index}
                style={{
                  width : width
                }}>
                <div
                  className={"flex flex-col w-min h-min origin-top-left"}
                  style={{
                    scale: `${scale}`,
                  }}
                  key={index}
                  onClick={() => handleClick(book.isbn13)}
                >
                  <Book className="w-[125.2px] h-[181.51px]" book={book} shadowType="circle"></Book>
                  <ReviewStars
                    width={67.85}
                    score={getScore(book.customerReviewRank)}
                    className="mt-[15.09px]"
                  ></ReviewStars>
                  <p className="font-KopubWorldBold text-black w-[125.2px] text-[13px] mt-[3.85px] truncate">
                    {book.title}
                  </p>
                  <p className="font-NotoSansKRMedium text-textColor-secondary text-[10px] -mt-[1px]">
                    {book.author}
                  </p>
                </div>
                </div>
              );
            })}
          </div>
  );
}
