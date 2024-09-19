import Book from "@components/Book";
import ReviewStars from "./ReviewStars";
import Shimmer from "./Simmer";
import getScore from "root/utils/getScore";
import { ClientRouterWrapper } from "root/utils/useClientRouter";

export default function Booklist({
  className,
  width = 125.2,
  books,
  ref = null,
}) {
  const originWidth = 125.2;
  const scale = width / originWidth;

  return (
    <div className={`${className}`} ref={ref}>
      {books.slice(0, 10).map((book, index) => {
        return (
          <div className="flex w-full h-full" key={index}>
            <div
              className={"flex flex-col w-min h-min origin-top-left"}
              style={{
                scale: `${scale}`,
              }}
            >
              <Shimmer isLoading={!book} className={"w-min h-min"}>
                <ClientRouterWrapper
                  url={
                    book == undefined ? undefined : `/bookdetail/${book.isbn13}`
                  }
                >
                  <Book
                    className="w-[89px] lg:w-[8.69vw] h-[129px] lg:h-[12.6vw]"
                    book={book}
                    shadowType="circle"
                  ></Book>
                </ClientRouterWrapper>
              </Shimmer>
              <Shimmer isLoading={!book} className={"w-min h-min"}>
                <ReviewStars
                  width={67.85}
                  score={book == undefined ? 5 : getScore(book)}
                  className="w-[48px] lg:w-[4.69vw] h-[9px] lg:h-[0.88vw] mt-[10px] lg:mt-[0.98vw] gap-[1px] lg:gap-[0.1vw]"
                ></ReviewStars>
              </Shimmer>
              <Shimmer isLoading={!book} className={"w-min h-min"}>
                <p className="font-KopubWorldBold text-black w-[89px] lg:w-[8.69vw] text-[9.5px] lg:text-[0.93vw] mt-[3px] lg:mt-[0.29vw] truncate">
                  {book == undefined ? "title" : book.title}
                </p>
              </Shimmer>
              <Shimmer isLoading={!book} className={"w-min h-min"}>
                <p className="w-[89px] lg:w-[8.69vw] font-NotoSansKRMedium text-textColor-secondary text-[7px] lg:text-[0.68vw] truncate">
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
