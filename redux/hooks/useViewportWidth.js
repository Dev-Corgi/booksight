"use client"

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setViewportWidth as setScale } from '../scaleSlice';

function useScale() {
  const dispatch = useDispatch();
  const scale = useSelector((state) => state.scale.scale);
  const originWidth = process.env.ORIGIN_WIDTH;

  useEffect(() => {
    const handleResize = () => {
      dispatch(setScale(window.innerWidth/originWidth));
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial width

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);

  return scale;
}

export default useScale;
