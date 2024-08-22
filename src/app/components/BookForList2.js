import Book2 from "./Book2";
import ReviewStars2 from "./ReviewStars2";

export default function BookForList2({book,width}){

    const originWidth = 125.2;
    const scale = width / originWidth;
    
    //스코어 다듬기
    const score = Math.ceil(book.customerReviewRank / 2);

    return(
        <div className = {"flex flex-col w-min h-min origin-top-left"}
        style={{
            scale: `${scale}`
          }}>
        <Book2 className = "w-[125.2px] h-[181.51px]" book = {book}></Book2>
        <ReviewStars2 width = {67.85} score = {score} className = "mt-[15.09px]"></ReviewStars2>
        <p className = "font-KopubWorldBold text-black w-[125.2px] text-[13px] mt-[3.85px] truncate">{book.title}</p>
        <p className = "font-NotoSansKRMedium text-textColor-secondary text-[10px] -mt-[1px]">{book.author}</p>
        </div>
    );
}