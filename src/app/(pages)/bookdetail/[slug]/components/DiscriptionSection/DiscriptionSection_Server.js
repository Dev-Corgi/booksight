import Image from "next/image";
import shadow2Img from "@png/shadow2.png";
import { DiscriptionText } from "./DiscriptionSection_Client";
import TitleTag from "@/app/components/TitleTag";
export default function DiscriptionSection({ className, book }) {
  return (
    <div className={`${className} flex flex-col`}>
      <TitleTag title="책 살펴보기"></TitleTag>
      <div className="flex flex-row mt-[10px] lg:mt-[0.98vw]">
        <div className="relative ml-[20px] lg:ml-[1.95vw] w-[832px] lg:w-[81.25vw] h-[178px] lg:h-[17.38vw]">
          <div className="absolute -right-[55px] lg:-right-[5.37vw] top-0 -z-[10]">
            <div className="relative w-[445px] lg:w-[43.46vw] h-[241px] lg:h-[23.54vw]">
              <Image src={shadow2Img} alt="shadow" fill sizes={1}></Image>
            </div>
          </div>
          <DiscriptionText book={book}></DiscriptionText>
        </div>
      </div>
    </div>
  );
}
