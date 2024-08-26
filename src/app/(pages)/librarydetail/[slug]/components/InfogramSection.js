import PlaceIcon from "@svg/PlaceIcon.svg";
import CallIcon from "@svg/CallIcon.svg";
import ExportIcon from "@svg/ExportIcon.svg";
import ClockIcon from "@svg/ClockIcon.svg";
import Link from "next/link";
export default function InfogramSection({ libraryInfo }) {
  return (
    <>
      <div className="flex flex-row gap-[2.37px] mt-[21px]">
        <div className="relative w-[23px] h-[23px]">
          <ClockIcon></ClockIcon>
        </div>
        <p className="font-NotoSansKRMedium text-[15.8px]">
          {libraryInfo.libInfo.operatingTime}
        </p>
      </div>
      <div className="flex flex-row gap-[18px] mt-[6px]">
        <div className="flex flex-row gap-[2.37px]">
          <div className="relative w-[23px] h-[23px]">
            <PlaceIcon></PlaceIcon>
          </div>
          <p className="font-NotoSansKRMedium text-[15.8px]">
            {libraryInfo.libInfo.address}
          </p>
        </div>

        <div className="flex flex-row gap-[2.37px]">
          <div className="relative w-[23px] h-[23px]">
            <CallIcon></CallIcon>
          </div>
          <p className="font-NotoSansKRMedium text-[15.8px]">
            {libraryInfo.libInfo.tel}
          </p>
        </div>

        <div className="flex flex-row gap-[2.37px]">
          <div className="relative w-[23px] h-[23px]">
            <ExportIcon></ExportIcon>
          </div>
          <Link
            className="font-NotoSansKRMedium text-[15.8px]"
            href={libraryInfo.libInfo.homepage}
          >
            홈페이지
          </Link>
        </div>
      </div>
    </>
  );
}
