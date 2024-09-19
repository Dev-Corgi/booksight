import TitleTag from "@/app/components/TitleTag";
import shadow2Img from "@png/shadow2.png";
import Image from "next/image";
import Shimmer from "@/app/components/Simmer";
import AuthorSection_Client from "./AuthorSection_Client";

export default function AuthorSection_Server({ book }) {
  return (
    <div className={` flex flex-col`}>
      <TitleTag title="저자 소개"></TitleTag>
      <div className="flex flex-row mt-[10px] lg:mt-[0.98vw]">
      <div className="relative ml-[20px] lg:ml-[1.95vw] w-[832px] lg:w-[81.25vw]">
          <div className="absolute -right-[55px] lg:-right-[5.37vw] top-0 -z-[10]">
            <div className="relative w-[445px] lg:w-[43.46vw] h-[241px] lg:h-[23.54vw]">
              <Image src={shadow2Img} alt="shadow" fill sizes={1}></Image>
            </div>
          </div>
          <AuthorSection_Client book={book}></AuthorSection_Client>
        </div>
      </div>
    </div>
  );
}
