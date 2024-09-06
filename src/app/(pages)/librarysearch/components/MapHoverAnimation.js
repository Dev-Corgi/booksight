// components/MapHoverAnimation.js
import { motion } from 'framer-motion';
import React from "react";
const MapHoverAnimation = ({ children }) => {
  // Check if the child is a path
  const isPath = (element) => element.type === 'path';
  // Check if the child is a group
  const isGroup = (element) => element.type === 'g';

  return (
    <svg xmlns="http://www.w3.org/2000/svg">
      {React.Children.map(children, (child) => {
        if (isPath(child)) {
          return (
            <motion.path
              {...child.props}
              initial={{ fill: '#000000' }}
              whileHover={{ fill: '#DAAA64' }} // Hover fill color change
              transition={{ duration: 0.3 }}
            />
          );
        } else if (isGroup(child)) {
          return (
            <motion.g
              {...child.props}
              initial={{ fill: '#000000' }}
              whileHover={{ fill: '#DAAA64' }} // Hover fill color change
              transition={{ duration: 0.3 }}
            >
              {child.props.children}
            </motion.g>
          );
        }
        return child;
      })}
    </svg>
  );
};

export default MapHoverAnimation;
