"use client";

import { useSearchParams } from "next/navigation";
import Booklist from "@/app/components/Booklist";

export default function SearchResultPage() {
  const searchParams = useSearchParams();
  const searchWord = searchParams.get("SearchWord") || "default";


  return (
    <div className="flex flex-col items-center">
        <Booklist className="flex flex-wrap w-[80.56vw] st:w-[1160px] h-hull gap-x-[28.98px] gap-y-[25.99px] overflow-clip" width={169.02} keyword={searchWord}></Booklist>
    </div>
  );
}
