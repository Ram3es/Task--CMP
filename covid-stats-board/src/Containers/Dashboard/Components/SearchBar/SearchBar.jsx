import React, { useEffect, useState } from "react";
import { A_FindCountySuccess } from "../../store";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  useEffect(() => {
    dispatch(A_FindCountySuccess({ searchStr: value }));
  }, [value, dispatch]);

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  return (
    <Paper component="form" sx={{ p: "3px 6px", display: "flex", alignItems: "center", width: 300 }}>
      <InputBase
        sx={{ ml: 3, flex: 1 }}
        placeholder="Search ..."
        inputProps={{ "aria-label": "search google maps" }}
        onChange={handleChange}
        value={value}
      />
      <IconButton sx={{ p: "12px" }} disabled aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 1 }} orientation="vertical" />
    </Paper>
  );
};
export default SearchBar;
