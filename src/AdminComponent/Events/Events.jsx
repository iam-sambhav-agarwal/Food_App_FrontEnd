import { useState, React } from "react";
import { Box, Button, TextField, Grid2, Modal } from "@mui/material";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useDispatch, useSelector } from "react-redux";
import { createEventAction } from "../../Component/State/Restaurant/Action";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const initialValues = {
  image: "",
  location: "",
  name: "",
  startedAt: null,
  endsAt: null,
};

const Events = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [formValues, setFormValues] = useState(initialValues);
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();
  const { restaurant } = useSelector((store) => store);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createEventAction({
        data: formValues,
        restaurantId: restaurant.usersRestaurant?.id,
        jwt,
      })
    );
    console.log("submit", formValues);

    setFormValues(initialValues);
  };

  const handleFormChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date, dateType) => {
    const formatedDate = dayjs(date).format("MMMM DD, YYYY hh:mm A");
    setFormValues({ ...formValues, [dateType]: formatedDate });
  };
  return (
    <div>
      <div className="p-5">
        <Button onClick={handleOpen} variant="contained">
          Create New Event
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form onSubmit={handleSubmit}>
              <Grid2 container spacing={3}>
                <Grid2 item size={{ xs: 12 }}>
                  <TextField
                    name="image"
                    label="Image URL"
                    variant="outlined"
                    fullWidth
                    value={formValues.image}
                    onChange={handleFormChange}
                  />
                </Grid2>
                <Grid2 item size={{ xs: 12 }}>
                  <TextField
                    name="location"
                    label="Location"
                    variant="outlined"
                    fullWidth
                    value={formValues.location}
                    onChange={handleFormChange}
                  />
                </Grid2>
                <Grid2 item size={{ xs: 12 }}>
                  <TextField
                    name="name"
                    label="Event Name"
                    variant="outlined"
                    fullWidth
                    value={formValues.name}
                    onChange={handleFormChange}
                  />
                </Grid2>

                <Grid2 item size={{ xs: 12 }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                      renderInput={(props) => <TextField {...props} />}
                      label="Start Date and Time"
                      vaue={formValues.startedAt}
                      onChange={(newValue) =>
                        handleDateChange(newValue, "startedAt")
                      }
                      inputFormat="MM/dd/yyyy hh:mm a"
                      className="w-full"
                      sx={{ width: "100%" }}
                    />
                  </LocalizationProvider>
                </Grid2>
                <Grid2 item size={{ xs: 12 }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                      renderInput={(props) => <TextField {...props} />}
                      label="End Date and Time"
                      vaue={formValues.endsAt}
                      onChange={(newValue) =>
                        handleDateChange(newValue, "endsAt")
                      }
                      inputFormat="MM/dd/yyyy hh:mm a"
                      className="w-full"
                      sx={{ width: "100%" }}
                    />
                  </LocalizationProvider>
                </Grid2>
              </Grid2>
              <Box mt={2}>
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </Box>
            </form>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Events;
