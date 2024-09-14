import Book from "@components/Book";
import ReviewStars from "./ReviewStars";
import Shimmer from "./Simmer";
import getScore from "root/utils/getScore";
import { ClientRouterWrapper } from "root/utils/useClientRouter";

export default function Booklist({ className, width = 125.2, books }) {
  const originWidth = 125.2;
  const scale = width / originWidth;

  return (
    <div className={`${className}`}>
      {books.slice(0, 10).map((book, index) => {
        return (
          <div
            className="aspect-[1/2]"
            key={index}
            style={{
              width: width,
            }}
          >
            <div
              className={"flex flex-col w-min h-min origin-top-left"}
              style={{
                scale: `${scale}`,
              }}
            >
              <Shimmer isLoading={!book} className={"w-min h-min"}>
                <ClientRouterWrapper url={book == undefined ?  undefined :`/bookdetail/${book.isbn13}`}>
                <Book
                  className="w-[125.2px] h-[181.51px]"
                  book={book}
                  shadowType="circle"
                ></Book>
                </ClientRouterWrapper>
              </Shimmer>
              <Shimmer isLoading={!book} className={"w-min h-min"}>
                <ReviewStars
                  width={67.85}
                  score={book == undefined ? 5 : getScore(book)}
                  className="mt-[15.09px]"
                ></ReviewStars>
              </Shimmer>
              <Shimmer isLoading={!book} className={"w-min h-min"}>
                <p className="font-KopubWorldBold text-black w-[125.2px] text-[13px] mt-[3.85px] truncate">
                  {book == undefined ? "title" : book.title}
                </p>
              </Shimmer>
              <Shimmer isLoading={!book} className={"w-min h-min"}>
                <p className="font-NotoSansKRMedium text-textColor-secondary text-[10px] -mt-[1px] truncate">
                  {book == undefined ? "author" : book.authorName}
                </p>
              </Shimmer>
            </div>
          </div>
        );
      })}
    </div>
  );
}
