import React, { useEffect, useState } from "react";
import "./header.css";
import Portrait from "../portrait";
import Fade from "react-reveal/Fade";
import classnames from "classnames";

const SHRINK_THRESHOLD = 600;

const DESCRIPTORS = [
  "Node.js",
  "React",
  "Backend",
  "Frontend",
  "UX Designer",
  "Full Stack Developer"
];

const onScroll = (setShrinkHeader, setWordIndex) => () => {
  const scrolled = window.scrollY;
  if (scrolled < SHRINK_THRESHOLD) {
    setShrinkHeader(false);
  } else if (scrolled >= SHRINK_THRESHOLD) {
    setShrinkHeader(true);
  }
  const wordIndex = Math.floor(scrolled / 200);
  wordIndex < DESCRIPTORS.length && setWordIndex(wordIndex);
};

const Rolladex = ({ words, wordIndex, className }) => (
  <div className={className} style={{ position: "relative" }}>
    {words.map((string, index) => (
      <div style={{ position: "absolute", top: 0, left: 0 }}>
        <Fade top opposite when={wordIndex === index}>
          {string}
        </Fade>
      </div>
    ))}
  </div>
);

const Header = () => {
  const [shrinkHeader, setShrinkHeader] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const handleScroll = onScroll(setShrinkHeader, setWordIndex);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <div className={classnames("longHeader", "headerBasic")}>
        <div
          className={classnames("portraitContainer", shrinkHeader && "shrink")}
        >
          <Fade>
            <Portrait />
          </Fade>
        </div>
        <div className={classnames("titleContainer", shrinkHeader && "shrink")}>
          <Fade>Albert Chu</Fade>
          <Rolladex
            className="rolladex"
            words={DESCRIPTORS}
            wordIndex={wordIndex}
          />
        </div>
      </div>
      <div className={classnames("lockedHeader", "headerBasic")} />
    </>
  );
};

export default Header;