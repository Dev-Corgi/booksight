import ReviewStars from "@/app/components/ReviewStars";
import Book from "@/app/components/Book";
import shelfImg from "@png/shelf.png";
import Image from "next/image";
import InfoIcon from "@svg/InfoIcon.svg"
import PurchaseButton from "./PurchaseButton";
import RentButton from "./RentButton";
export default function BookSection({ book }) {


  const score = Math.ceil(book.customerReviewRank / 2);

  return (
    <>
    <div className="relative w-full flex flex-col items-center h-[705px]">
      <div className="absolute w-[1958.56px] h-[152px] left-[56px] top-[553px]">
        <Image src={shelfImg} alt="shelf" fill sizes={1}></Image>
      </div>
      <div className="flex flex-row w-min h-min">
        <div className="flex flex-col w-min h-min">
          <p className="mt-[51px] text-[19px] font-NotoSansKRMedium text-textColor-secondary">
            {book.author}
          </p>
          <p className="mt-[6px] text-[63px] w-[374px] font-KopubWorldBold text-textColor-primary h-[120px] leading-[65px] text-ellipsis">
            {book.title}
          </p>
          <div className="flex flex-row gap-[7px] mt-[4px]">
            {book.categoryName.split('>').map((tag, index) => {
              return (
                <div
                  key={index}
                  className="flex px-[9.6px] py-[5px] rounded-full outline outline-[1.5px] outline-primary"
                >
                  <p className="text-[14px] font-NotoSansKRSemiBold text-primary">
                    {tag}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="flex flex-row w-min h-min mt-[20px]">
            <div className="w-[111px] h-[20.94px]">
              <ReviewStars width={111} score={score}></ReviewStars>
            </div>
            <p className="ml-[10px] text-black text-[14px] font-NotoSansKRMedium -mt-[1px]">{`${score}.0/5.0`}</p>
          </div>

          <div className="flex flex-row w-min h-min mt-[20px] gap-[14px]">
            <RentButton book = {book}></RentButton>
            <PurchaseButton book = {book}></PurchaseButton>
          </div>

          <div className = "flex flex-row gap-[6px] mt-[24px]">
            <div className = "relative w-[20px] h-[20px]">
              <InfoIcon className = " text-primary"></InfoIcon>
            </div>
            <p className = "font-NotoSansKRMedium text-[15px] text-primary">도서 DB 제공 : 알라딘 인터넷서점(www.aladin.co.kr)</p>
          </div>
        </div>
        <Book
          className="ml-[200px] w-[392.37px] h-[589.83px]"
          book={book}
          shadowType="shadow"
        ></Book>
      </div>
    </div>
    </>
  );
}
