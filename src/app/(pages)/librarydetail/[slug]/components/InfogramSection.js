import PlaceIcon from "@svg/PlaceIcon.svg";
import CallIcon from "@svg/CallIcon.svg";
import ExportIcon from "@svg/ExportIcon.svg";
import ClockIcon from "@svg/ClockIcon.svg";
import { OprerationTime,Location,Tel,HomePageLink } from "./Infos";
export default function InfogramSection({ libraryInfo }) {

  return (
    <>
      <div className="flex flex-row gap-[2.37px] mt-[21px]">
          <div className="relative w-[23px] h-[23px]">
            <ClockIcon></ClockIcon>
          </div>
          <OprerationTime libraryInfo={libraryInfo}></OprerationTime>
      </div>
      <div className="flex flex-row gap-[18px] mt-[6px] whitespace-nowrap">
          <div className="flex flex-row gap-[2.37px]">
            <div className="relative w-[23px] h-[23px]">
              <PlaceIcon></PlaceIcon>
            </div>
           <Location libraryInfo={libraryInfo}></Location>
          </div>

          <div className="flex flex-row gap-[2.37px]">
            <div className="relative w-[23px] h-[23px]">
              <CallIcon></CallIcon>
            </div>
           <Tel libraryInfo={libraryInfo}></Tel>
          </div>

          <div className="flex flex-row gap-[2.37px]">
            <div className="relative w-[23px] h-[23px]">
              <ExportIcon></ExportIcon>
            </div>
            <HomePageLink libraryInfo={libraryInfo}></HomePageLink>
          </div>
      </div>
    </>
  );
}
