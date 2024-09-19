import TitleTag from "@/app/components/TitleTag";
import ReviewComponent from "./ReviewComponent";

export default function ReviewSection({ className, book }) {
  return (
    <div className={`${className} flex flex-col`}>
      <TitleTag title="독자 서평"></TitleTag>

      <div className="flex flex-row mt-[10px] lg:mt-[0.98vw]">
        <div className="relative ml-[20px] lg:ml-[1.95vw]">
            <div className="grid grid-rows-2 grid-flow-col gap-[58px] lg:gap-[5.66vw] w-full overflow-visible">
              {Array.from({ length: 4 }).map((_, index) => {
                return (
                  <ReviewComponent
                    key={index}
                    book={book}
                    index={index}
                  ></ReviewComponent>
                );
              })}
            </div>
        </div>
      </div>
    </div>
  );
}
