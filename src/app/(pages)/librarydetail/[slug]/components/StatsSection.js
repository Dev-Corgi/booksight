"use client";
import Shimmer from "@/app/components/Simmer";

export default function StatsSection({ libraryInfo, isLoading }) {
  function stockHandler() {
    if (libraryInfo != undefined) {
      const bookCount = libraryInfo.libInfo.BookCount;

      if (bookCount >= 1000) {
        return (bookCount / 1000).toFixed(1).replace(/\.0$/, "") + "k";
      }
      return bookCount;
    }
  }

  function weeklyRentHandler() {
    if (libraryInfo != undefined) {
      let loanCount = 0;
      for (const data of libraryInfo.loanByDayofWeek) {
        loanCount += data.result.loan;
      }

      if (loanCount >= 1000) {
        return (loanCount / 1000).toFixed(1).replace(/\.0$/, "") + "k";
      }

      return loanCount;
    }
  }

  function dailyRentHandler() {
    if (libraryInfo != undefined) {
      let loanCount = 0;
      for (const data of libraryInfo.loanByhours) {
        loanCount += data.result.loan;
      }

      if (loanCount >= 1000) {
        return (loanCount / 1000).toFixed(1).replace(/\.0$/, "") + "k";
      }

      return loanCount;
    }
  }

  return (
    <div className="flex flex-row gap-[52.66px] mt-[36.76px]">
      <Shimmer isLoading={isLoading}>
        <div className="flex flex-col gap-[5.5px]">
          <p className="font-MontserratMedium text-[34.76px]">
            {(libraryInfo != undefined ? stockHandler() : 100) + "+"}
          </p>
          <p className="font-NotoSansKRMedium text-[16px]">도서관 소장 자료</p>
        </div>
      </Shimmer>

      <Shimmer isLoading={isLoading}>
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
      </Shimmer>
    </div>
  );
}
