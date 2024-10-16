import React, { useState, useEffect } from "react";

function ClickCounter() {
  const [clickCount, setClickCount] = useState(0);

  const increment = () => setClickCount((prev) => prev + 1);
  //   console.log({ clickCount });
  useEffect(() => {
    document.addEventListener("mousedown", increment);
    return () => {
      document.removeEventListener("mousedown", increment);
    };
  });

  return <h3>Page Clicks: {clickCount}</h3>;
}

export default ClickCounter;
