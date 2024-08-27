import Header from "./components/Header";
import InfogramSection from "./components/InfogramSection";
import getLibraryInfoHandler from "@handler/getLibraryInfoHandler";
import getLibraryPictureHandler from "@handler/getLibraryPictureHandler";
import DiscriptionSection from "./components/DiscriptionSection";
import StatsSection from "./components/StatsSection";
import MapSection from "./components/MapSection";
import LibraryImageSection from "./components/LibraryImageSection";
export default async function LibraryDetailPage({ params }) {
  const libCode = params.slug;

    async function fetchGetLibraryInfo() {
      const [libraryInfoResult, libraryPictureResult] = await Promise.all([
        getLibraryInfoHandler(libCode),
        getLibraryPictureHandler(libCode),
      ]);

      const library = libraryInfoResult;
      library.picture = libraryPictureResult;

      return library;
    }


  const libraryInfo =  await fetchGetLibraryInfo();

  return (
        <div className="flex flex-row w-full h-full">
          <div className="flex flex-grow flex-col items-center">
            <div className="flex flex-col items-start w-[36.18vw] st:w-[521px] h-full text-black">
              <Header />
              <p className="font-NotoSansKRBold text-[73.73px] w-[497px] h-[154px] leading-[76.9px] mt-[45px] text-pretty">
                {libraryInfo.libInfo.libName}
              </p>
              <InfogramSection libraryInfo={libraryInfo}></InfogramSection>
              <DiscriptionSection
                libraryInfo={libraryInfo}
              ></DiscriptionSection>
              <StatsSection libraryInfo={libraryInfo}></StatsSection>
              <MapSection libraryInfo={libraryInfo}></MapSection>
            </div>
          </div>

          <LibraryImageSection libraryInfo={libraryInfo}></LibraryImageSection>
        </div>
  );
}
