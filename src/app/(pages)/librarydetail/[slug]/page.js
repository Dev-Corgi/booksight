import Header from "./components/Header";
import InfogramSection from "./components/InfogramSection";
import DiscriptionSection from "./components/DiscriptionSection";
import StatsSection from "./components/StatsSection";
import MapSection from "./components/MapSection";
import LibraryImageSection from "./components/LibraryImageSection";
import localLibrarySearchHandler from "@handler/localLibrarySearchHandler";
import getLibraryPictureHandler from "@handler/getLibraryPictureHandler";
import Title from "./components/Title";

export default function LibraryDetailPage({ params }) {
  const libCode = params.slug;

  const libraryInfo = localLibrarySearchHandler(libCode);
  const libPicture = getLibraryPictureHandler(libCode);

  return (
        <div className="flex flex-row w-full h-full overflow-x-clip">
          <div className="flex flex-grow flex-col items-center">
            <div className="flex flex-col items-start w-[36.18vw] st:w-[521px] h-full text-black">
              <Header />
              <Title libraryInfo={libraryInfo}></Title>
              <InfogramSection libraryInfo={libraryInfo}></InfogramSection>
              <DiscriptionSection
                libraryInfo={libraryInfo}
              ></DiscriptionSection>
              <StatsSection libraryInfo={libraryInfo}></StatsSection>
              <MapSection libraryInfo={libraryInfo}></MapSection>
            </div>
          </div>
          <LibraryImageSection libPicture={libPicture}></LibraryImageSection>
        </div>
  );
}
