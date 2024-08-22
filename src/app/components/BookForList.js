import Book2 from "./Book2";
import ReviewStars from "./ReviewStars";

export default function BookForList({book,width}){

    const originWidth = 125.2;
    const scale = width / originWidth; 

    return(
        <div className = {"flex flex-col w-min h-min origin-top-left"}
        style={{
            scale: `${scale}`
          }}>
        <Book2 className = "w-[8.69vw] h-[12.6vw] st:w-[125.2px] st:h-[181.51px]" book= {book}></Book2>
        <ReviewStars width = {67.85} score = {book.score} className = "mt-[1.05vw] st:mt-[15.09px]"></ReviewStars>
        <p className = "font-KopubWorldBold text-black w-[125.2px] w- text-[0.9vw] mt-[0.27vw] st:text-[13px] st:mt-[3.85px] truncate">{book.title}</p>
        <p className = "font-NotoSansKRMedium text-textColor-secondary text-[0.69vw] -mt-[0.07vw] st:text-[10px] st:-mt-[1px]">{book.author}</p>
        </div>
    );
}