import libraryPictureData from "@data/libraryPictureData.json"

import LibraryImage1 from "@png/libraryImages/Library_1.jpg";
import LibraryImage2 from "@png/libraryImages/Library_2.jpg";
import LibraryImage3 from "@png/libraryImages/Library_3.jpg";
import LibraryImage4 from "@png/libraryImages/Library_4.jpg";
import LibraryImage5 from "@png/libraryImages/Library_5.jpg";
import LibraryImage6 from "@png/libraryImages/Library_6.jpg";
import LibraryImage7 from "@png/libraryImages/Library_7.jpg";
import LibraryImage8 from "@png/libraryImages/Library_8.jpg";
import LibraryImage9 from "@png/libraryImages/Library_9.jpg";
import LibraryImage10 from "@png/libraryImages/Library_10.jpg";

export default async function getLibraryPictureHandler(libCode) {

  const localImages = [
    LibraryImage1,
    LibraryImage2,
    LibraryImage3,
    LibraryImage4,
    LibraryImage5,
    LibraryImage6,
    LibraryImage7,
    LibraryImage8,
    LibraryImage9,
    LibraryImage10,
    // 추가 이미지 경로
];

  //   async function fetchGetLibraryPicture(libCode) {

  //       const response = await fetch(`/api/getLibraryPicture?libCode=${libCode}`);
  //       const data = await response.json();
  //       return data;
  //     };

  // const getLibraryInfoResult = await fetchGetLibraryPicture(libCode);
  // return getLibraryInfoResult.response.libs[0].lib;

  function getRandomImage(){

    // 랜덤으로 이미지 선택
    const randomImage = localImages[Math.floor(Math.random() * localImages.length)];
    return randomImage;
  }
  console.log(libraryPictureData[libCode]);
  const pictureURL = libraryPictureData[libCode] == undefined? getRandomImage() :libraryPictureData[libCode].startsWith('https://maps.google.com') ? getRandomImage(): libraryPictureData[libCode]

  return pictureURL;




}
