import CategoryComponent from "./CategoryComponent";
import TitleTag from "@/app/components/TitleTag";
export default function CategoryList() {
  return (
    <div className={"flex flex-col"}>
      <TitleTag title="카테고리 목록"></TitleTag>
      <div className="flex flex-row mt-[10px] lg:mt-[0.98vw]">
        <div className="flex flex-grow ml-[20px] lg:ml-[1.95vw]">
          <div className="w-full h-[168px] lg:h-[16.41vw] flex flex-col justify-center overflow-clip rounded-l-[15px] lg:rounded-l-[1.46vw]  bg-primary">
            <div className="flex flex-col gap-[4px] lg:gap-[0.39vw]">
              <div className="flex flex-row gap-[6px] -ml-[67px]">
                {Array.from({ length: 12 }).map((element, index) => {
                  return <CategoryComponent key={index}></CategoryComponent>;
                })}
              </div>
              <div className="flex flex-row gap-[6px]">
                {Array.from({ length: 12 }).map((element, index) => {
                  return <CategoryComponent key={index}></CategoryComponent>;
                })}
              </div>
              <div className="flex flex-row gap-[6px] -ml-[67px]">
                {Array.from({ length: 12 }).map((element, index) => {
                  return <CategoryComponent key={index}></CategoryComponent>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
