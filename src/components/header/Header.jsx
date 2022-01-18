import React from "react";
import Search from "./search/Search";
import style from "./Header.module.scss";

const Header = ({ headerTitle, children }) => (
  <header className={style.header}>
    <h1>{headerTitle}</h1>
    <div className={style.headerContent}>
      {children}
      <Search />
    </div>
  </header>
);

export default Header;
