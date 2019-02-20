import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import classnames from "classnames";
import "./header.css";
import Portrait from "./portrait";

const SHRINK_THRESHOLD = 70;

const handleScrollShrink = setShrinkHeader => () =>
  window.scrollY > SHRINK_THRESHOLD
    ? setShrinkHeader(true)
    : setShrinkHeader(false);

const Header = ({ siteTitle }) => {
  const [shrinkHeader, setShrinkHeader] = useState(false);
  const onScroll = handleScrollShrink(setShrinkHeader);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <header className={classnames("header", shrinkHeader && "shrink")}>
      <div className="avatar">
        <Portrait
          className={classnames("portrait", shrinkHeader && "shrink")}
        />
        <div className={classnames("title", shrinkHeader && "shrink")}>
          {siteTitle}
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
