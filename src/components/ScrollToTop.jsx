import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// A component that scrolls to the top of the page
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to (x: 0, y: 0)
  }, [pathname]); // runs when path is changed

  return null;
};

export default ScrollToTop;
