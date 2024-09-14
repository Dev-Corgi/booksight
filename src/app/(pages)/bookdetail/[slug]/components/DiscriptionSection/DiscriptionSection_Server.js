import Image from "next/image";
import shadow2Img from "@png/shadow2.png";
import Shimmer from "@/app/components/Simmer";
import { DiscriptionText } from "./DiscriptionSection_Client";
import ContainerWithTitle from "@/app/components/ContainerWithTitle";
export default function DiscriptionSection({ className, book }) {

  return (
    <ContainerWithTitle className={className}>
          <div className="absolute -right-[68px] top-0 -z-[10]">
            <div className="relative w-[626px] h-[338.98px] mt-2">
              <Image src={shadow2Img} alt="shadow" fill sizes={1}></Image>
            </div>
          </div>

          <div className="relative flex flex-col w-full h-full  mt-[14px] rounded-[15px] bg-discriptionPanel">
            <DiscriptionText book = {book}></DiscriptionText>
          </div>
    </ContainerWithTitle>

  );
}
