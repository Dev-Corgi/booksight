import TitleTag from "@/app/components/TitleTag";
import Shimmer from "@/app/components/Simmer";
import Discription from "./Discription";
export default function DiscriptionSection({ authorDisc }) {


  return (
    <div className="flex flex-col w-full">
      <TitleTag title={"저자 소개"}></TitleTag>
      <div className = "flex ml-[28px]">
      <Shimmer isLoading={authorDisc == undefined}>
        <div className=" flex flex-col justify-start items-center w-full h-[218px] mt-[16px] rounded-[15px] bg-background">
          <div className = "flex flex-col justify-start items-start mx-[18px] my-[17px] overflow-y-scroll scroll no-scrollbar">
             <Discription authorDisc={authorDisc}></Discription>
          </div>
        </div>
      </Shimmer>
      </div>
    </div>
  );
}
