import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
}));

export default function SearchBar() {
  const classes = useStyles();

  const [searchValue, setSearchValue] = useState("");
  const searchLessons = event => {
    event.preventDefault();
    axios
      .get("http://localhost:5000/api/v1/lessons/search_lessons", {
        params: {
          search_value: searchValue
        }
      })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleChange = event => {
    setSearchValue(event.target.value);
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "0.2px" }}
    >
      <Paper
        onSubmit={e => searchLessons(e)}
        component="form"
        className={classes.root}
        style={{ width: "100vw", border: "1px solid #1589FF" }}
      >
        <InputBase
          value={searchValue}
          onChange={e => handleChange(e)}
          className={classes.input}
          placeholder="Search"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
}
