/* Import package components */
import React, { useState } from "react";
import {
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
  Typography
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3)
  }
}));

export default function RatingInputForm() {
  const classes = useStyles();

  // For rating
  const [rating, setRating] = useState(2);

  // For recommend
  const [recommend, setRecommend] = React.useState("true");
  const handleChange = event => {
    setRecommend(event.target.value);
  };

  return (
    <>
      <Container maxWidth="sm">
        {/* Rating */}
        <Typography component="legend">Rating</Typography>
        <Rating
          name="customized-empty"
          value={rating}
          precision={0.5}
          size="large"
          emptyIcon={<StarBorderIcon fontSize="inherit" />}
        />

        {/* Feedback */}
        <TextField
          id="outlined-full-width"
          label="Feedback"
          style={{ margin: 8 }}
          placeholder="Feedback"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
          variant="outlined"
        />

        {/* Recommend */}
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">
            Would you recommend to your friend?
          </FormLabel>
          <RadioGroup
            aria-label="Recommend"
            name="recommend"
            value={recommend}
            onChange={handleChange}
          >
            <FormControlLabel value="true" control={<Radio />} label="Yes" />
            <FormControlLabel value="false" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </Container>
    </>
  );
}
