import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    
    const timeoutId = setTimeout(() => {
      document.body.style.scrollBehavior = "smooth";
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
