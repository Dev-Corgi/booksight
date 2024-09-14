import Image from "next/image";
import ReviewFrameImg from "@png/reviewSection.png";
import ReviewContents from "./ReviewComponent_Client";

export default async function ReviewComponent_Server({book,index }) {

  return (
      <div className="relative w-[544.96px] h-[250.99px] overflow-visible">
        <div className="absolute w-[611.37px] h-[331.06px] left-0 top-0">
            <Image
              src={ReviewFrameImg}
              alt="reviewFrame"
              fill
              sizes={1}
              className="object-cover"
            ></Image>
        </div>

        <ReviewContents book={book} index={index}></ReviewContents>
      </div>
  );
}
