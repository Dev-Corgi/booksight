export default function StatsSection({ libraryInfo }) {
    function stockHandler() {
        const bookCount = libraryInfo.libInfo.BookCount;
    
        if (bookCount >= 1000) {
          return (bookCount / 1000).toFixed(1).replace(/\.0$/, "") + "k";
        }
        return bookCount;
      }
    
      function weeklyRentHandler() {
        let loanCount = 0;
        for (const data of libraryInfo.loanByDayofWeek) {
          loanCount += data.result.loan;
        }
    
        if (loanCount >= 1000) {
          return (loanCount / 1000).toFixed(1).replace(/\.0$/, "") + "k";
        }
    
        return loanCount;
      }
    
      function dailyRentHandler() {
        let loanCount = 0;
        for (const data of libraryInfo.loanByhours) {
          loanCount += data.result.loan;
        }
    
        if (loanCount >= 1000) {
          return (loanCount / 1000).toFixed(1).replace(/\.0$/, "") + "k";
        }
    
        return loanCount;
      }
      
  return (
    <div className="flex flex-row gap-[52.66px] mt-[36.76px]">
    <div className="flex flex-col gap-[5.5px]">
      <p className="font-MontserratMedium text-[34.76px]">
        {stockHandler() + "+"}
      </p>
      <p className="font-NotoSansKRMedium text-[16px]">
        도서관 소장 자료
      </p>
    </div>

    <div className="flex flex-col gap-[5.5px]">
      <p className="font-MontserratMedium text-[34.76px]">
        {weeklyRentHandler() + "+"}
      </p>
      <p className="font-NotoSansKRMedium text-[16px]">
        도서관 주간 대출량
      </p>
    </div>

    <div className="flex flex-col gap-[5.5px]">
      <p className="font-MontserratMedium text-[34.76px]">
        {dailyRentHandler() + "+"}
      </p>
      <p className="font-NotoSansKRMedium text-[16px]">
        도서관 일간 대출량
      </p>
    </div>
  </div>
  );
}
