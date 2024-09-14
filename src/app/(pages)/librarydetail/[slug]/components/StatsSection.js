import { StockStat } from "./Stats";

export default function StatsSection({ libraryInfo}) {

  

  return (
    <div className="flex flex-row gap-[52.66px] mt-[36.76px]">
        <div className="flex flex-col gap-[5.5px]">
          <StockStat libraryInfo = {libraryInfo}></StockStat>
          <p className="font-NotoSansKRMedium text-[16px]">도서관 소장 자료</p>
        </div>

      {/* <Shimmer isLoading={isLoading}>
        <div className="flex flex-col gap-[5.5px]">
          <p className="font-MontserratMedium text-[34.76px]">
            {(libraryInfo != undefined ? weeklyRentHandler() : 100) + "+"}
          </p>
          <p className="font-NotoSansKRMedium text-[16px]">
            도서관 주간 대출량
          </p>
        </div>
      </Shimmer>

      <Shimmer isLoading={isLoading}>
        <div className="flex flex-col gap-[5.5px]">
          <p className="font-MontserratMedium text-[34.76px]">
            {(libraryInfo != undefined ? dailyRentHandler() : 100) + "+"}
          </p>
          <p className="font-NotoSansKRMedium text-[16px]">
            도서관 일간 대출량
          </p>
        </div>
      </Shimmer> */}
    </div>
  );
}
