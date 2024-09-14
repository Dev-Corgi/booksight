"use client"
import { motion } from "framer-motion";
import React from "react"
import { Suspense } from "react";
const Shimmer = ({className, isLoading, children }) => {

  const isParagraph = React.isValidElement(children) && children.type === "p";
  
  return (
    <Suspense>
      {isLoading ? (
        <motion.div
          initial={{ backgroundPositionX: "100%" }}
          animate={{ backgroundPositionX: "0%" }}
          transition={{
            duration: 1,
            ease: "linear",
            repeat: Infinity,
          }}
          className={`${className} bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:300%] bg-[position-x:100%]`}
        >
          <div className={`flex invisible`}>{children}</div>
        </motion.div>
       ) : (
         children
       )}
    </Suspense>
  );
};

export default Shimmer;
