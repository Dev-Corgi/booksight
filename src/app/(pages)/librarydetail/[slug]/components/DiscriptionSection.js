import ConnectedIcon from "@svg/ConnectedIcon.svg";

export default function DiscriptionSection({libraryInfo}){
    return(
        <div className="flex flex-row h-[100px] mt-[40px]">
        <div className="w-[6px] h-full bg-black"></div>

        <p className="font-NotoSansKRMedium text-[13.69px] ml-[13.49px] w-[278.05px] text-pretty">{`시민과 함께 성장하고 소통하는 열린공간!\n${libraryInfo == undefined ? "부천 상동 시립 도서관": libraryInfo.libInfo.libName}은 지식정보의 보고로서 권역별 주제 전문도서관, 생활 속의 시민 밀착형 작은도서관 사업으로 다양한 지식정보서비스를 제공하고 있습니다.`}</p>

        <div className="flex flex-row justify-center w-[168.52px] h-[46.34px] ml-[47.18px] mt-[23.09px] rounded-full bg-black gap-[3px]">
          <div className="relative w-[22px] h-[22px] mt-[11px]">
            <ConnectedIcon className = " text-white"></ConnectedIcon>
          </div>
          <p
            className="font-NotoSansKRMedium text-[15px] text-white mt-[10.9px]"
            href={libraryInfo == undefined ? "www.example.com" : libraryInfo.libInfo.homepage}
          >
            알아보기
          </p>
        </div>
      </div>
    );
}