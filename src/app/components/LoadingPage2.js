'use client'
import Image from "next/image";
import logoImg from "@png/logo.png";
import { delay, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
export default function LoadingPage2({ isClosing }) {
  // 90, 312
  // 33 , 255
  //1.4

  const [counterOff, setcounterOff] = useState(false);

  useEffect(() => {
    // 예를 들어, 2초 후에 애니메이션을 시작하도록 설정
    const timer = setTimeout(() => {
      setcounterOff(true);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <motion.div
        className="absolute w-full h-screen bg-primary top-0 mt-[20vh]"
        animate={{ top: setcounterOff && isClosing ? "-120vh" : "0px" }} // 애니메이션할 넓이 설정
        transition={{ duration: 1, ease: "easeInOut" }} // 애니메이션 지속 시간 설정
      ></motion.div>
      <motion.div
        className="relative w-screen h-screen"
        animate={{ top: setcounterOff && isClosing ? "-100vh" : "0px" }} // 애니메이션할 넓이 설정
        transition={{ duration: 1, ease: "easeInOut" }} // 애니메이션 지속 시간 설정
      >
        <div className="absolute flex w-screen h-screen bottom-0 items-center justify-center bg-background z-50">
          <motion.div
            className="flex justify-start items-center w-[90px] h-[94px]"
            initial={{ width: "90px" }} // 초기 넓이 설정
            animate={{ width: "312px" }} // 애니메이션할 넓이 설정
            transition={{ duration: 0.8, ease: "anticipate" }} // 애니메이션 지속 시간 설정
          >
            <div className="flex px-[22.5px] py-[19px] border-textColor-primary border-[6px] rounded-[15px]">
              <motion.div
                className="flex flex-row justify-start items-center w-[33px] h-[44px] overflow-clip"
                initial={{ width: "33px" }} // 초기 넓이 설정
                animate={{ width: "255px" }} // 애니메이션할 넓이 설정
                transition={{ delay: 0.6, duration: 0.8, ease: "anticipate" }} // 애니메이션 지속 시간 설정
              >
                <div className="relative w-[255px] h-[44px]">
                  <Image
                    src={logoImg}
                    fill
                    sizes={1}
                    className="object-cover object-left"
                    priority
                  ></Image>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
