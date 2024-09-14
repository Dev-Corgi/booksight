
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

  // const [books, setBooks] = useState(Array.from({ length: 10 }));

  // useEffect(() => {
  //   if (authorName != undefined && authorCode != undefined) {
  //     async function fetchAuthorData() {
  //       setBooks(await aladinAuthorSearchHandler(authorName, authorCode));
  //     }

  //     fetchAuthorData();
  //   }
  // }, [authorName, authorCode]);

  const books = AuthorBooksSearchAPI(authorName, authorCode)
  const authorDisc = authorCrawlerAPI(
    `https://www.aladin.co.kr/author/wauthor_overview.aspx?AuthorSearch=@${authorCode}&amp;partner=openAPI`
  )

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






