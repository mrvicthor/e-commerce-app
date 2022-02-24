import { useEffect, useState } from "react";
import breakpoints from "../utils/breakpoints";

const useBreakPoint = () => {
  const [breakpoint, setBreakPoint] = useState("");
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    if (0 < windowSize.width && windowSize.width < 1038) {
      setBreakPoint(breakpoints[0]);
    }
    if (1038 < windowSize.width && windowSize.width < 1440) {
      setBreakPoint(breakpoints[1038]);
    }

    if (windowSize.width >= 1440) {
      setBreakPoint(breakpoints[1440]);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize.width]);
  return breakpoint;
};

export default useBreakPoint;
