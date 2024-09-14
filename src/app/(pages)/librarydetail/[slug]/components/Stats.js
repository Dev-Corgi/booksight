"use client"
import React,{useState,useEffect} from "react";
import Shimmer from "@/app/components/Simmer";

export  function StockStat({libraryInfo}) {
    const [isLoading, setisLoading] = useState(true);
    const [currentLibraryInfo, setcurrentLibraryInfo] = useState(undefined);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          setcurrentLibraryInfo(await libraryInfo);
          setisLoading(false);
        } catch (error) {
          console.error("Error fetching book data:", error);
          // 에러 처리 로직을 추가할 수 있습니다.
        }
      };
  
      fetchData();
    }, [libraryInfo]);
    
  function stockHandler() {
    if (currentLibraryInfo != undefined) {
      const bookCount = currentLibraryInfo.BookCount;

      if (bookCount >= 1000) {
        return (bookCount / 1000).toFixed(1).replace(/\.0$/, "") + "k";
      }
      return bookCount;
    }
  }
  return (
    <Shimmer isLoading={isLoading} className="w-min h-min">
      <p className="font-MontserratMedium text-[34.76px]">
        {(currentLibraryInfo != undefined ? stockHandler() : 100) + "+"}
      </p>
    </Shimmer>
  );
}

// export default function WeeklyRentStat({libraryInfo}) {
//     const [isLoading, setisLoading] = useState(true);
  
//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           await libraryInfo;
//           setisLoading(false);
//         } catch (error) {
//           console.error("Error fetching book data:", error);
//           // 에러 처리 로직을 추가할 수 있습니다.
//         }
//       };
  
//       fetchData();
//     }, [libraryInfo]);
  
//     function weeklyRentHandler() {
//         if (libraryInfo != undefined) {
//           let loanCount = 0;
//           for (const data of libraryInfo.loanByDayofWeek) {
//             loanCount += data.result.loan;
//           }
    
//           if (loanCount >= 1000) {
//             return (loanCount / 1000).toFixed(1).replace(/\.0$/, "") + "k";
//           }
    
//           return loanCount;
//         }
//       }
//     return (
//       <Shimmer isLoading={isLoading} className="w-min h-min">
//           <p className="font-MontserratMedium text-[34.76px]">
//             {(libraryInfo != undefined ? weeklyRentHandler() : 100) + "+"}
//           </p>
//       </Shimmer>
//     );
//   }

//   export default function DailyRentStat({libraryInfo}) {
//     const [isLoading, setisLoading] = useState(true);
  
//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           await libraryInfo;
//           setisLoading(false);
//         } catch (error) {
//           console.error("Error fetching book data:", error);
//           // 에러 처리 로직을 추가할 수 있습니다.
//         }
//       };
  
//       fetchData();
//     }, [libraryInfo]);
  
//     function dailyRentHandler() {
//         if (libraryInfo != undefined) {
//           let loanCount = 0;
//           for (const data of libraryInfo.loanByhours) {
//             loanCount += data.result.loan;
//           }
    
//           if (loanCount >= 1000) {
//             return (loanCount / 1000).toFixed(1).replace(/\.0$/, "") + "k";
//           }
    
//           return loanCount;
//         }
//       }
//     return (
//       <Shimmer isLoading={isLoading} className="w-min h-min">
//           <p className="font-MontserratMedium text-[34.76px]">
//             {(libraryInfo != undefined ? dailyRentHandler() : 100) + "+"}
//           </p>
//       </Shimmer>
//     );
//   }
