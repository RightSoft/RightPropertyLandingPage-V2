import { useEffect, useState } from "react";

export default function useOnlyHome() {
  const [isHome, setIsHome] = useState(false);
  useEffect(() => {
    setIsHome(window.location.pathname === "/");
  }, []);
  return isHome;
}
