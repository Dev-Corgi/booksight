"use client";
import React, { useState, useEffect, useRef } from "react";
import TitleTag from "./TitleTag";
import Booklist from "./Booklist";
import ArrowIcon from "@svg/ArrowIcon.svg";
import { Suspense } from "react";
import { motion } from "framer-motion";

export default function BooklistSection({ title, books }) {
  const parentRef = useRef(null);
  const childRef = useRef(null);
  const [isMouseHover, setIsMouseHover] = useState(false);
  const [isLeftOverflowing, setIsLeftOverflowing] = useState(false);
  const [isRightOverflowing, setIsRightOverflowing] = useState(false);
  const [xPosition, setXPosition] = useState(0); // 애니메이션을 위한 x 위치
  const [rect, setRect] = useState({ width: 0, height: 0, top: 0, left: 0 });
  const [isActive, setisActive] = useState(false);

  const checkOverflow = () => {
    const parentElement = parentRef.current;
    const childElement = childRef.current;
    if (parentElement && childElement) {
      const parentRect = parentElement.getBoundingClientRect();
      const childRect = childElement.getBoundingClientRect();

      // 왼쪽이 부모의 경계를 넘어가는지 체크
      const leftOverflow = childRect.left < parentRect.left;
//a
      // 오른쪽이 부모의 경계를 넘어가는지 체크
      const rightOverflow = childRect.right > parentRect.right;

      setIsLeftOverflowing(leftOverflow);
      setIsRightOverflowing(rightOverflow);
    }
  };

  useEffect(() => {
    // 데이터가 렌더링되면 오버플로우 체크
    checkOverflow();

    // 윈도우 리사이즈 시 체크
    window.addEventListener("resize", checkOverflow);

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, [rect]); // books가 변경될 때마다 체크

  useEffect(() => {
    if (
      !books.some((item) => item === undefined)
    ){
      updateRect();
    setisActive(true);
    }
  }, [books]);

  const handleRightArrowClick = () => {
    const parentElement = parentRef.current;
    const childElement = childRef.current;

    if (parentElement && childElement) {
      const parentRect = parentElement.getBoundingClientRect();
      const childRect = childElement.getBoundingClientRect();

      // x 위치를 부모의 왼쪽 경계에 맞추기 위해 설정
      setXPosition(parentRect.right - childRect.right);
    }
  };

  const handleLeftArrowClick = () => {
    const parentElement = parentRef.current;
    const childElement = childRef.current;

    if (parentElement && childElement) {
      const parentRect = parentElement.getBoundingClientRect();
      const childRect = childElement.getBoundingClientRect();

      // x 위치를 부모의 왼쪽 경계에 맞추기 위해 설정
      setXPosition(0);
    }
  };

  const updateRect = () => {
    const childElement = childRef.current;
    const { width, height, top, left } = childElement.getBoundingClientRect();
    setRect({ width, height, top, left });
  };

  return (
    <div className={"flex flex-col flex-grow h-min overflow-x-clip"}>
      <TitleTag title={title} />
      <div
        className="relative flex flex-row mt-[10px] lg:mt-[0.98vw] ml-[20px] lg:ml-[1.95vw] overflow-x-clip"
        ref={parentRef}
        onMouseEnter={() => {
          setIsMouseHover(true);
        }}
        onMouseLeave={() => {
          setIsMouseHover(false);
        }}
      >
        <motion.div
          animate={{ x: xPosition }}
          transition={{ ease: "easeInOut", duration: 0.3 }}
          onAnimationComplete={() => {
            updateRect();
          }}
        >
          <div className="flex w-min" ref={childRef}>
            <Suspense>
              <Booklist
                className="relative flex flex-row w-min h-min gap-[32px] lg:gap-[3.13vw]"
                books={books}
              />
            </Suspense>
          </div>
        </motion.div>
        {isMouseHover && isRightOverflowing && isActive && (
          <div
            className="absolute -right-[53px] lg:-right-[5.18vw] w-[85px] lg:w-[8.3vw] h-[85px] lg:h-[8.3vw] mt-[22px] lg:mt-[2.15vw]"
            onClick={handleRightArrowClick} // 클릭 시 애니메이션 실행
          >
            <div className="flex flex-row items-center w-full h-full rounded-full bg-primary bg-opacity-80">
              <div className="relative ml-[18px] w-[24px] h-[24px]">
                <ArrowIcon className="text-white" />
              </div>
            </div>
          </div>
        )}
        {isMouseHover && isLeftOverflowing && isActive &&(
          <div
            className="absolute -left-[53px] lg:-left-[5.18vw] w-[85px] lg:w-[8.3vw] h-[85px] lg:h-[8.3vw] mt-[22px] lg:mt-[2.15vw] origin-center rotate-180"
            onClick={handleLeftArrowClick}
          >
            <div className="flex flex-row items-center w-full h-full rounded-full bg-primary bg-opacity-80">
              <div className="relative ml-[18px] w-[24px] h-[24px]">
                <ArrowIcon className="text-white" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
