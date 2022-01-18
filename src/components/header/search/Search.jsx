import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import style from "./Search.module.scss";

const prefix = <SearchOutlined className={style.prefix} />;

const Search = () => (
  <div>
    <Input className={style.searchInput} placeholder="Search" prefix={prefix} />
  </div>
);

export default Search;
