import BackArrowIcon from "@svg/BackArrowIcon.svg"
export default function Header(){
    return(
        <div className="flex flex-row justify-between items-center w-full mt-[40px]">
        <p className="font-NotoSansKRBold text-[30px]">BOOKS</p>
        <div className="flex flex-row items-center gap-[6.5px]">
          <div className="relative w-[18px] h-[16px]">
            <BackArrowIcon></BackArrowIcon>
          </div>
          <p className="font-NotoSansKRSemiBold text-[16px]">
            돌아가기
          </p>
        </div>
      </div>
    );
}