import TitleTag from "@/app/components/TitleTag";
import ReviewComponent from "./ReviewComponent";

export default function ReviewSection({ className, book }) {


  return (
      <div className={`${className} flex flex-col`}>
        <TitleTag title="독자 서평"></TitleTag>

        <div className="flex flex-col items-start ml-[28px] mt-[14px] w-auto h-min">
          <div className="grid grid-rows-2 grid-flow-col gap-[80.08px] w-full overflow-clip">
            {Array.from({length : 5}).map((_, index) => {
              return (
                <ReviewComponent
                key={index}
                book={book}
                index = {index}
                ></ReviewComponent>
              );
            })}
          </div>
        </div>
      </div>
  );
}
