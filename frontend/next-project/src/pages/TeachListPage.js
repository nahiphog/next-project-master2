import React from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const parentDiv = {
  display: "flex",
  flexDirection: "row",
  height: "auto",
  boxShadow: "0px 3px 8px #888888",
  margin: "10px 0px"
};

const imgSizing = {
  width: "40vw",
  height: "40vw"
};

const boardContent = {
  textAlign: "left",
  padding: "1vw"
};

const pStyling = {
  margin: "0",
  fontSize: "4vw"
};

export default function TeachListPage(props) {
  const [value, setValue] = React.useState(2);
  return (
    <div>
      <div style={{ width: "100vw" }}>
        <form>
          <input
            type="text"
            placeholder="search"
            style={{
              width: "60%",
              borderRadius: "2px",
              marginTop: "10px",
              height: "3vh",
              padding: "2px"
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "#1589FF",
              border: "none",
              height: "3vh",
              borderRadius: "2px"
            }}
          >
            <span style={{ color: "white" }}>Submit</span>
          </button>
        </form>
      </div>
      <div style={parentDiv} id="cardBox">
        <img
          style={imgSizing}
          src="https://atasouthport.com/wp-content/uploads/2017/04/default-image.jpg"
        />
        <div style={boardContent}>
          <p style={pStyling}>Title: Lorem Ipsum</p>
          <p style={pStyling}>Author: Ryan.G</p>
          <p style={pStyling}>Skills Categories: Computer science</p>
          <Box
            component="fieldset"
            mb={3}
            borderColor="transparent"
            style={{ margin: "0", padding: "0", border:'none' }}
          >
            <Typography
              component="legend"
              style={{ margin: "0", fontSize: "4vw" }}
            >
              Lesson Rating
            </Typography>
            <Rating name="read-only" value={value} readOnly />
          </Box>
        </div>
      </div>
    </div>
  );
}
