export default function SubLayout({ pathName }) {
  const titles = {
    "/librarysearch": "도서관 탐색",
    "/mypage": "마이 페이지",
    "/searchresult": "검색 결과",
  };

  return (
    <div className="flex flex-col items-center w-full h-min mt-[35px] lg:mt-[3.42vw]">
      <div className="relative flex">
        <p className="font-KopubWorldBold whitespace-nowrap z-10 text-[27px] lg:text-[2.64vw] pr-[8px] lg:pr-[0.78vw]">
          {titles[pathName]}
        </p>
        <div className="absolute w-full h-[10px] lg:h-[0.98vw] mt-[23px] lg:mt-[2.25vw] bg-primary z-0"></div>
      </div>

      <div className="w-full mt-[30px] lg:mt-[2.93vw]"></div>
    </div>
  );
}
