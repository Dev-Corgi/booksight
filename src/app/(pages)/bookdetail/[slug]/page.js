import DiscriptionSection from "./components/DiscriptionSection/DiscriptionSection_Server";
import ReviewSection from "./components/Review/ReviewSection_Server";
import AuthorSection_Server from "./components/AuthorSection/AuthorSection_Server";
import RecommendList from "./components/RecommendList/RecommendList";
import AuthorList from "./components/AuthorList/AuthorList";
import BookSection from "./components/BookSection/BookSection_Server";

import aladinISBNSearchAPI from "root/api/aladinISBNSearchAPI";

export default function BookDetailPage({ params }) {
  const isbn13 = params.slug;

  const book = aladinISBNSearchAPI(isbn13, [
    "reviewList",
    "fulldescription",
    "authors",
    "ratingInfo",
  ]);

  return (
    <div className="w-full flex flex-col overflow-y-scroll scroll no-scrollbar overflow-x-clip">
      <div className="w-full flex items-center">
        <BookSection book={book}></BookSection>
      </div>
      <div className="flex flex-col ml-[86px] lg:ml-[8.4vw] flex-grow -mt-[15px] lg:-mt-[1.46vw] gap-y-[50px] lg:gap-y-[4.88vw]">
        <DiscriptionSection book={book}></DiscriptionSection>
        <ReviewSection book={book}></ReviewSection>
        <AuthorSection_Server book={book}></AuthorSection_Server>
        <RecommendList book={book}></RecommendList>
        <AuthorList book={book}></AuthorList>
      </div>
    </div>
  );
}
