import { useState, useEffect } from "react";

function getWindowInfo() {
  const { innerWidth: width } = window;
  return { width };
}

export default function useWindowInfo() {
  const [windowInfo, setWindowInfo] = useState(getWindowInfo());

  useEffect(() => {
    function handleWindowInfo() {
      setWindowInfo(getWindowInfo());
    }

    window.addEventListener("resize", handleWindowInfo);
  }, []);
  return windowInfo;
}

function getScreenWidth() {
  const { width } = window.screen;
  return { width };
}

export function useScreenWidth() {
  const [screenWidth, setScreenWidth] = useState(getScreenWidth());
  return screenWidth;
}
