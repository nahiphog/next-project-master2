/* Import package components */
import React from "react";
import {
  Box,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  makeStyles,
  Typography
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import Rating from "@material-ui/lab/Rating";

/* CSS Styles */
const ContainerStyles = {
  width: "100%"
};

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function ProfilePage() {
  const classes = useStyles();
  const learnRating = 4;
  const teachRating = 4;
  return (
    <>
      <div style={ContainerStyles}>
        <Card>
          <CardMedia
            className={classes.media}
            image="http://nextagram-lee.s3.amazonaws.com/ironman.jpg"
            title="Name"
          />
          <CardHeader style={{ textAlign: "center" }} title="Name" />
          <CardContent>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              component="p"
              align="center"
            >
              <strong>Learning Rating</strong>
            </Typography>
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Rating name="read-only" value={learnRating} readOnly />
            </Box>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              component="p"
              align="center"
            >
              <strong>Teaching Rating</strong>
            </Typography>
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Rating name="read-only" value={teachRating} readOnly />
            </Box>
          </CardContent>
          <CardContent>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              component="p"
              align="justify"
            >
              <strong>Email</strong>
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              align="justify"
            >
              Email
            </Typography>
          </CardContent>
          <CardContent>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              component="p"
              align="justify"
            >
              <strong>Skills</strong>
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              align="justify"
            >
              Skills
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
