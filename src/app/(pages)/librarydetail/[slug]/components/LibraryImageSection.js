import Image from "next/image";
export default function LibraryImageSection({libraryInfo}){
    return(
        <div className="w-[51.74vw] h-screen py-[16px] mr-[16px]">
        <Image
          src={libraryInfo.picture}
          alt="libraryPic"
          width={1200}
          height={1200}
          className="w-full h-full object-cover rounded-[40px]"
        ></Image>
      </div>
    );
}