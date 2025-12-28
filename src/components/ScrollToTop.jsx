import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTopOnRoute({ matchPath }) {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === matchPath) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, matchPath]);

  return null;
}

export default ScrollToTopOnRoute;
