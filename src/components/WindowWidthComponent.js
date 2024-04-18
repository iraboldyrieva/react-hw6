import React, { useEffect, useState } from "react";

function UseWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
}

export default function WindowWidthComponent() {
  const width = UseWindowWidth();

  return (
    <div>
      <h1>WindowWidthComponent</h1>
      <h3>Width window: {width}px</h3>
    </div>
  );
}
