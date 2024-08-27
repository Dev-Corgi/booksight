import Image from "next/image";
import logoImg from "@png/logo.png";
import LoadingIconFront from "@svg/LoadingIconFront.svg";
import LoadingIconBack from "@svg/LoadingIconBack.svg";
export default function LoadingPage() {
  const prize =
    "당신 근처의 도서관을 발견하고, 책으로 가득한\n하루를 만들어 나가세요";
  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <div className="flex flex-col items-center mt-[10px]">
        <div className="relative w-[406px] h-[70px]">
          <Image src={logoImg} alt="logoImg" fill sizes={1}></Image>
        </div>
        <p className="font-NotoSansKRSemiBold text-[40px] text-textColor-primary mt-[25px]">
          우리의 도서관
        </p>
        <p className="font-NotoSansKRMedium text-[20px] text-textColor-secondary text-center mt-[11px] whitespace-pre-wrap">
          {prize}
        </p>
        <div className="relative w-[35px] h-[35px] mt-[21.5px]">
          <LoadingIconBack className = "absolute"></LoadingIconBack>
          <LoadingIconFront className = "absolute"></LoadingIconFront>
        </div>
      </div>
    </div>
  );
}
