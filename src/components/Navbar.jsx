import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      backgroundColor: "#000",
      position: "sticky",
      top: 0,
      justifyContent: "space-between",
      height:"8vh",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img alt="logo" src={logo} height={45} />
    </Link>
    <SearchBar/>
  </Stack>
);

export default Navbar;
