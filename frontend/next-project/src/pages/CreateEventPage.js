/* Import package components */
import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { Button, ButtonGroup } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { route } from "../global";

/* Import app components */
import DialogPage from "../components/DialogPage";

export default function CreateEventPage({ parentRouteTo }) {
  const [routeOption, setRouteOption] = useState(route.close);
  const [dialogOpen, setDialogOpen] = useState(false);
  const routeTo = option => {
    if (option === route.close) {
      setDialogOpen(false);
    } else {
      setDialogOpen(true);
    }
    setRouteOption(option);
  };

  /* Date Picker */
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Select Date"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Select Time"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change time"
          }}
        />
        <br />
        <ButtonGroup fullWidth aria-label="full width button group">
          <Button onClick={() => parentRouteTo(route.close)}>Cancel</Button>
          <Button onClick={() => routeTo(route.todo)}>Submit</Button>
        </ButtonGroup>
      </MuiPickersUtilsProvider>
      <DialogPage
        routeTo={routeTo}
        routeOption={routeOption}
        dialogOpen={dialogOpen}
      />
    </>
  );
}
