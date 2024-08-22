import Image from "next/image";
import bookmarkPicImg from "@png/bookmarkPic.png";
import BookData from "root/Data/bookData.json"
import BookForList2 from "@components/BookForList2";
import profileImg from "@png/profile.jpg"

export default function SearchResultPage(props) {
  return (
      <div className="flex flex-row">
        <div className="relative ml-[79px] w-[413.2px] h-[725px] rounded-[45px] bg-white overflow-clip">
          <div className="w-full h-full flex flex-col items-center">

            <div className="relative flex flex-col items-center w-full h-[384.26px]">
              <Image src={bookmarkPicImg} className = "absolute"></Image>
              <div className = "absolute w-[32.22px] h-[32.22px] rounded-full bg-background mt-[15.16px]"></div>
              <div className = "absolute w-[267.25px] h-[267.25px] rounded-full mt-[73.92px] border-primary border-[4.74px] overflow-clip">
                <Image src = {profileImg}></Image>
              </div>
            </div>

            <div className="relative flex flex-col justify-center  items-center w-[413.2px] h-[33px] -mt-[12.26px]">
              <div className="absolute w-full h-[4px] bg-primary flex items-center justify-center"></div>
              <div className="absolute rounded-full bg-primary flex items-center justify-center px-[20px] pt-[6px] pb-[8px]">
              <p className = "font-NotoSansKRMedium text-[15px] text-white">월간 독서량 : 2권</p>
              </div>
            </div>

            <p className = "font-KopubWorldBold text-black text-[47px] mt-[52px]">이명준</p>

            <p className = "font-NotoSansKRMedium text-black text-[25px]">노련한 독서가</p>

            <div className = "flex flex-row items-center mt-[11.34px] font-NotoSansKRMedium text-black text-[15px] gap-[10.42px]">
                <p>영미 소설</p>
                <div className = "w-[4.74px] h-[4.74px] rounded-full bg-primary"></div>
                <p>스릴러</p>
                <div className = "w-[4.74px] h-[4.74px] rounded-full bg-primary"></div>
                <p>코미디</p>
            </div>
          </div>
        </div>

        <div className="ml-[108.8px] w-full h-min flex flex-col">
          <div className="flex flex-row gap-[37px] font-KopubWorldBold text-textColor-primary text-[23px]">
            <p>읽은 책들</p>
            <p>내 서고</p>
            <p>대출 현황</p>
          </div>

          <div className="relative mt-[1px] w-[344px] h-[3px]">
            <div className="absolute w-full h-full bg-black opacity-10"></div>
            <div className="absolute w-[102px] h-full bg-primary"></div>
          </div>

          <div className="flex flex-wrap w-full gap-[26px] mt-[31px] mr-[79px]">
            {BookData.books.map((book, index) => {
              return (
                <div className="w-[146.22px] h-[333.07px]">
                  <BookForList2
                    book={book}
                    key={index}
                    width={146.22}
                  ></BookForList2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
  );
}
