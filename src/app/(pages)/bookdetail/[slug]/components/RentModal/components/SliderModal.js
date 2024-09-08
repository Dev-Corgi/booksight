import ReactDOM from "react-dom";
import CloseIcon from "@svg/CloseIcon.svg";

export default function SliderModal({ isOpen, requestClose }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed flex items-center justify-center inset-0 w-full h-screen bg-black bg-opacity-80">
      <div className="relative flex flex-col items-center w-[542px] h-[580px] bg-background rounded-[15px]">
        <div className="absolute right-[19px] top-[19px] w-[13px] h-[13px]">
          <CloseIcon onClick={requestClose}></CloseIcon>
        </div>

        <p className="mt-[87px] font-NotoSansKRMedium text-[22px] text-black">
          도서관 탐색 범위
        </p>

        <div className="flex flex-row justify-center h-[109px] -mt-[11px]">
          <p className="font-NotoSansKRSemiBold text-[75px] text-black">12</p>
          <p className="mt-[52px] font-NotoSansKRSemiBold text-[30px] text-black">
            km
          </p>
        </div>

        <div className="relative flex flex-row items-center mt-[41px] w-[487px] h-[26px]">
          <div className="w-full h-[9px] bg-textColor-secondary rounded-full">
            <div className="w-[220px] h-full bg-primary rounded-full"></div>
          </div>

          <div className="absolute left-[206px] w-[26px] h-[26px] rounded-full bg-white border-[2px] border-primary"></div>
        </div>

        <p className="mt-[72px] font-NotoSansKRMedium text-[23px] text-black w-[456px]">
          주변 탐색 범위를 설정해 주세요
        </p>

        <p className="mt-[10px] font-NotoSansKRRegular text-[17px] text-textColor-secondary w-[456px]">
          {
            "주변 도서관 탐색 범위를 설정해 주세요, 최대 15km까지\n설정 가능합니다."
          }
        </p>

        <div className="w-full h-[1px] bg-textColor-secondary mt-[27px]"></div>

        <div className="mt-[21px] flex flex-row w-[486px] justify-between">
            <div
              className="flex justify-center items-center w-[165px] h-[58px] bg-black rounded-[18px]"
            //   onClick={}
            >
                <p className="w-full font-NotoSansKRSemiBold text-[19px] text-white text-center align-middle">
                  초기화
                </p>
            </div>

          <div
            className="flex justify-center items-center w-[165px] h-[58px] bg-primary rounded-[18px]"
            // onClick={modalData[currentIndex].primaryButtonAction}
          >
            <p className="w-full font-NotoSansKRSemiBold text-[19px] text-white text-center align-middle">
              설정
            </p>
          </div>
        </div>
      </div>
    </div>,
    typeof window !== "undefined" ? document.getElementById("rentModal") : null
  );
}
