import Image from "next/image";
import InputField from "./components/InputField";
// import GoogleLogo from "@svg/GoogleLogo.svg";
// import AppleLogo from "@svg/AppleLogo.svg";
// import FacebookLogo from "@svg/FacebookLogo.svg";
import BackArrowIcon from "@svg/BackArrowIcon.svg";
import loginPicImg from "@png/loginPic.png";
export default function LoginPage() {
  return (
    <div className="flex flex-row w-full h-full">
      <div className="flex flex-col items-center flex-grow h-full text-textColor-primary">
        <div className="flex flex-row justify-between items-center w-[36.18vw] st:w-[521px] mt-[40px]">
          <p className="font-NotoSansKRBold text-[30px]">BOOKS</p>
          <div className="flex flex-row items-center gap-[6.5px]">
            <div className="relative w-[18px] h-[16px]">
              <BackArrowIcon></BackArrowIcon>
            </div>
            <p className="font-NotoSansKRSemiBold text-[16px]">돌아가기</p>
          </div>
        </div>

        <p className="font-KopubWorldBold text-[60px] mt-[78px]">로그인</p>

        <p className="font-NotoSansKRMedium text-[19px] w-[30.35vw] st:w-[437px] text-center">
          당신 근처의 도서관을 발견하고, 책으로 가득한 하루를 만들어 나가세요
        </p>

        <div className="flex flex-col gap-[15.79px] mt-[54.15px]">
          <InputField className = "w-[32.75vw] h-[60.55px] st:w-[471.55px]" placeHolder={"이메일/전화번호"}></InputField>
          <InputField className = "w-[32.75vw] h-[60.55px] st:w-[471.55px]" placeHolder={"비밀번호"}></InputField>
        </div>

        <p className="font-NotoSansKRMedium text-[17px] mt-[25.06px]">
          비밀번호를 잊어버렸나요?
        </p>

        <div className="w-[32.72vw] h-[60.55px] st:w-[471.22px] rounded-[9.21px] mt-[40.76px] bg-textColor-primary flex justify-center items-center">
          <p className="font-NotoSansKRSemiBold text-[17px] text-white">
            로그인
          </p>
        </div>

        <div className="flex flex-row justify-between gap-[8px] mt-[40.54px]">
          <div className="w-[17px] h-[2px] mt-[14.43px] bg-textColor-primary"></div>
          <p className="font-NotoSansKRMedium text-[17px]">소셜 로그인</p>
          <div className="w-[17px] h-[2px] mt-[14.43px] bg-textColor-primary"></div>
        </div>

        <div className="flex flex-row gap-[5px]">
          <div className="flex flex-row justify-center items-center w-[10.69vw] h-[4.02vw] st:w-[154px] st:h-[57.92px] rounded-[9.21px] border-[1.5px] border-textColor-primary gap-[11.85px] mt-[30.55px]">
            <div className="relative w-[1.65vw] h-[1.65vw] st:w-[23.69px] st:h-[23.69px]">
              {/* <GoogleLogo></GoogleLogo> */}
            </div>
            <p className="font-MontserratSemiBold text-[1.19vw] st:text-[17.11px]">Google</p>
          </div>

          <div className="flex flex-row justify-center items-center w-[10.69vw] h-[4.02vw]  st:w-[154px] st:h-[57.92px] rounded-[9.21px] border-[1.5px] border-textColor-primary gap-[11.85px] mt-[30.55px]">
            <div className="relative w-[1.65vw] h-[1.65vw] st:w-[23.69px] st:h-[23.69px]">
              {/* <AppleLogo></AppleLogo> */}
            </div>
            <p className="font-MontserratSemiBold text-[1.19vw] st:text-[17.11px]">Apple</p>
          </div>

          <div className="flex flex-row justify-center items-center w-[10.69vw] h-[4.02vw] st:w-[154px] st:h-[57.92px] rounded-[9.21px] border-[1.5px] border-textColor-primary gap-[11.85px] mt-[30.55px]">
            <div className="relative w-[1.65vw] h-[1.65vw] st:w-[23.69px] st:h-[23.69px]">
              {/* <FacebookLogo></FacebookLogo> */}
            </div>
            <p className="font-MontserratSemiBold text-[1.19vw] st:text-[17.11px]">Facebook</p>
          </div>
        </div>

        <p className="font-NotoSansKRMedium text-[15.5px] mt-[26.32px]">
          등록한 계정이 없으신가요? 회원가입 하기
        </p>
      </div>
      <div className="w-[51.74vw] h-screen py-[16px] mr-[16px]">
        <Image src={loginPicImg} alt = "loginThumbnailPic" className="w-full h-full object-cover rounded-[40px]"></Image>
      </div>
    </div>
  );
}
