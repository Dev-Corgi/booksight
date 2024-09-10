import React,{useEffect,useState} from "react";
import Book from "@/app/components/Book";
import aladinISBNSearchHandler from "root/Handler/aladinISBNSearchHandler";
import Shimmer from "@/app/components/Simmer";

export default function Commentary({comment}) {

    const [isLoading, setIsLoading] = useState(true);
    const [book, setbook] = useState(undefined);

    useEffect(() => {
      async function fetchBook() {
        setbook(await aladinISBNSearchHandler(comment.isbn13,["authors","ratingInfo"]));
        setIsLoading(false);
      }
  
      fetchBook();
    }, []);

    


  return (
                <Shimmer isLoading={isLoading}>
                <div
                  className="relative w-[228.63px] h-[209px] rounded-[23.09px] overflow-clip"
                  style={{
                    backgroundColor: comment.bgColor,
                  }}
                >
                  <p className="font-NotoSansKRSemiBold text-[19.63px] text-black -tracking-[2px] w-[135px] leading-[24.2px] ml-[20.78px] mt-[18.48px]">
                    {comment.comment}
                  </p>
                  <p className="font-NotoSansKRMedium text-[15px] text-textColor-secondary -tracking-[2px] leading-[19px] ml-[20.78px] mt-[4.12px]">
                    {comment.title}
                  </p>
                  <Book
                    className="w-[134.27px] h-[194.66px] ml-[109.16px] -rotate-[14.62deg] origin-center"
                    book={book}
                  ></Book>
                </div>
                </Shimmer>
  );
}
