import bookData from "root/Data/bookData.json"
import BookForList from "./BookForList";
export default function Booklist(props) {
  return (
    <div className={`${props.className} w-full h-min`}>

      <div className="flex flex-col w-min h-min">
        <p className="font-KopubWorldBold whitespace-nowrap z-10 text-[1.53vw] tracking-[-0.14vw] pr-[0.49vw] st:text-[22px] st:tracking-[-2px] st:pr-[7px]">
          베스트 셀러
        </p>
        <div className="w-full h-[0.56vw] -mt-[0.97vw] st:h-[8px] st:-mt-[14px] bg-primary z-0"></div>
      </div>

      <div className = "flex flex-row w-min h-min ml-[1.94vw] mt-[0.97vw] gap-[3.13vw] st:ml-[28px] st:mt-[14px] st:gap-[45px]">
        {bookData.map((book,index)=>{
            return(
             <BookForList width = {125.2} book = {book} key = {index}></BookForList>
            );
        })}
      </div>
    </div>
  );
}
