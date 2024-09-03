import { motion } from "framer-motion";

const Shimmer = ({ isLoading, children }) => {
  return (
    <>
      {isLoading ? (
        <motion.div
          initial={{ backgroundPositionX: "100%" }}
          animate={{ backgroundPositionX: "0%" }}
          transition={{
            duration: 1,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex w-min h-min bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:300%] bg-[position-x:100%]"
        >
          <div className="flex w-min h-min invisible">{children}</div>
        </motion.div>
      ) : (
        children
      )}
    </>
  );
};

export default Shimmer;
