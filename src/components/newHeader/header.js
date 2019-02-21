import React, { useEffect, useState } from "react";
import "./header.css";
import Portrait from "../portrait";
import Fade from "react-reveal/Fade";
import classnames from "classnames";

const onScroll = setShrinkHeader => () => {
  const scrolled = window.scrollY;
  if (scrolled >= 200 && scrolled < 600) {
    console.log("Time to transform", scrolled);
    setShrinkHeader(false);
  } else if (scrolled >= 600) {
    console.log("Time to lock", scrolled);
    setShrinkHeader(true);
  } else {
    console.log("Time to expand and move to center", scrolled);
  }
};

const Header = () => {
  const [shrinkHeader, setShrinkHeader] = useState(false);

  useEffect(() => {
    const handleScroll = onScroll(setShrinkHeader);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  console.log("shrinkHeader", shrinkHeader);
  return (
    <div className={classnames("longHeader")}>
      <div
        className={classnames("portraitContainer", shrinkHeader && "shrink")}
      >
        <Fade>
          <Portrait />
        </Fade>
      </div>
      {/* <div>
        <h1>Albert Chu</h1>
        <h3>Full Stacked</h3>
      </div> */}
    </div>
  );
};

export default Header;
