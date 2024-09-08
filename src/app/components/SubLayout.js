export default function SubLayout({ pathName }) {
  const titles = {
    "/librarysearch": "도서관 탐색",
    "/mypage": "마이 페이지",
    "/searchresult": "검색 결과",
  };

  return (
    <div className="flex flex-col items-center w-full h-min mt-[47px]">
      <div className="flex flex-col w-min h-min">
        <p className="font-KopubWorldBold whitespace-nowrap z-10 text-[38px] pr-[0.49vw]">
          {titles[pathName]}
        </p>
        <div className="w-full h-[14px] -mt-[24px] bg-primary z-0"></div>
      </div>

      <div className="w-full mt-[50px]"></div>
    </div>
  );
}
