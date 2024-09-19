
import Profile from "./components/Profile";
import DiscriptionSection from "./components/DiscriptionSection";
import CommentSection from "./components/CommentSection";
import TimelineSection from "./components/TimelineSection";
// import aladinAuthorSearchHandler from "@handler/aladinAuthorBooksSearchHandler";
// import authorCrawlerHandler from "@handler/authorCrawlerHander";
import AuthorBooksSearchAPI from "root/api/authorBooksSearchAPI";
import authorCrawlerAPI from "root/api/authorCrawlerAPI";
import AuthorList from "./components/AuthorList";

export default function AuthorDetailPage({ params, searchParams }) {
  const authorCode = params.authorCode;
  const authorName = searchParams.authorName; // 쿼리 파라미터에서 authorName 가져오기

  const books = AuthorBooksSearchAPI(authorName, authorCode)
  const authorDisc = authorCrawlerAPI(
    `https://www.aladin.co.kr/author/wauthor_overview.aspx?AuthorSearch=@${authorCode}&amp;partner=openAPI`
  )

  return (
    <div className="flex overflow-y-scroll scroll no-scrollbar overflow-x-clip">
      <div className="flex flex-col mt-[96px] lg:mt-[9.38vw] w-full h-min bg-discriptionPanel text-black">
        <div className="flex flex-col flex-grow ml-[43px] lg:ml-[4.2vw] -mt-[56px] lg:-mt-[5.47vw]">
          <Profile
            books={books}
            authorName={authorName}
            authorCode={authorCode}
          ></Profile>

          <div className="flex flex-col w-full mt-[20px] lg:mt-[1.95vw] gap-[40px] lg:gap-[3.91vw]">
            <div className="flex flex-row  gap-[38px] lg:gap-[3.71vw] h-[454px] lg:h-[44.34vw]">
              <div className="flex flex-col flex-grow gap-[40px] lg:gap-[3.91vw]">
                <DiscriptionSection
                  authorDisc={authorDisc}
                ></DiscriptionSection>

                <CommentSection></CommentSection>
              </div>

              <TimelineSection books={books}></TimelineSection>
            </div>

             <AuthorList books={books}></AuthorList>
          </div>
        </div>
      </div>
    </div>
  );
}






