import TitleTag from "@/app/components/TitleTag";
import Shimmer from "@/app/components/Simmer";
import Discription from "./Discription";
export default function DiscriptionSection({ authorDisc }) {
  return (
    <div className={"flex flex-col"}>
      <TitleTag title="저자 소개"></TitleTag>
      <div className="flex flex-row mt-[10px] lg:mt-[0.98vw]">
        <div className="relative ml-[20px] lg:ml-[1.95vw]">
                <Discription authorDisc = {authorDisc}></Discription>
        </div>
      </div>
    </div>
  );
}
