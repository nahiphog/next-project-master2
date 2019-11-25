import React from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function LearnListPage(props) {
  return (
    <>
      <div>
        <input type="text" placeholder="search" id="learnListPageSearchBar" />
      </div>
      <div>
        <img src="#" />
        <div>
            {}
          <p>Title: Lorem Ipsum</p>
          <p>Author: Ryan.G</p>
          <p>Skills Categories: Computer science</p>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">Controlled</Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Box>
        </div>
      </div>
    </>
  );
}
