import CategoryComponent from "./CategoryComponent";
import TitleTag from "@/app/components/TitleTag";
export default function CategoryList() {
  return (
    <div className={`w-full h-min`}>
      <TitleTag title="카테고리 목록"></TitleTag>
      <div className="flex flex-row gap-[30px] ml-[28px] mt-[14px]">
        <div className="w-full h-[236px] flex flex-col justify-center overflow-clip rounded-l-[24px] bg-primary">
          <div className="flex flex-col gap-[6px]">
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
  );
}
