import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import classnames from "classnames";
import "./header.css";

const handleScrollShrink = setShrinkHeader => () =>
  window.scrollY > 100 ? setShrinkHeader(true) : setShrinkHeader(false);

const Header = ({ siteTitle }) => {
  const [shrinkHeader, setShrinkHeader] = useState(false);
  const onScroll = handleScrollShrink(setShrinkHeader);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <header className={classnames("header", shrinkHeader && "shrink")}>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
          {siteTitle}
        </Link>
      </h1>
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
