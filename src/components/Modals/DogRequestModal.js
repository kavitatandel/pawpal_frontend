import * as React from "react";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import { addPlayDateRequest } from "../../logic/PlayDateFunctions";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";

//for date picker
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
//////// deLocale to force conversion of date to DD-MM-YYY
import deLocale from "date-fns/locale/de";
//import MobileDatePicker from '@mui/lab/MobileDatePicker';
//import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import TimePicker from "@mui/lab/TimePicker";

//import { addPlayDateRequest } from ""

// //date localization
// import deLocale from 'date-fns/locale/de';

const localeMap = {
  de: deLocale,
};

const maskMap = {
  de: "__.__.____",
};

function DogRequestModal({
  show,
  setShow,
  toggleModal,
  // dogLoverId, setDogLoverId,
  dogId,
  setDogId,
}) {
  //for localization
  const [locale, setLocale] = useState("de");
  const [user, setUser] = useContext(UserContext);
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  const selectLocale = (newLocale) => {
    setLocale(newLocale);
  };

  useEffect(() => {});

  const handleCancel = () => {
    toggleModal();
    //clear all the states
    setStartDate(new Date());
    setStartTime(new Date());
    setEndTime(new Date());
    setLocation("");
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(startDate.toDateString())
    //console.log(startTime.toTimeString())
    //console.log(endTime.toTimeString())
    //console.log(dogId);

    const playDayRequest = {
      dog_id: dogId,
      dog_lover_id: user._id,
      start_date: startDate.toISOString(),
      // JS DATE OBJECT: Fri Mar 04 2022 21:20:56 GMT+0100 (Central European Standard Time)
      // ISO STRING FORMAT (BSON Date format): 2022-02-26T23:00:00.000Z
      start_time: startTime.toLocaleTimeString(), //insert in AM/PM format :"10:00:34 AM"
      //end_time: endTime.toTimeString(), // 24 hour format :"11:01:34 GMT+0100 (Central European Standard Time)"
      end_time: endTime.toLocaleTimeString(),
      meeting_location: location,
      dl_message: message,
    };

    addPlayDateRequest(playDayRequest)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    toggleModal();
    //clear all the states
    setStartDate(new Date());
    setStartTime(new Date());
    setEndTime(new Date());
    setLocation("");
    setMessage("");
  };

  console.log(startDate);

  return (
    <MKBox component="section" py={6}>
      <Container>
        <Modal
          open={show}
          onClose={toggleModal}
          sx={{ display: "grid", placeItems: "center" }}
        >
          <Slide direction="down" in={show} timeout={500}>
            <MKBox
              position="relative"
              width="500px"
              display="flex"
              flexDirection="column"
              borderRadius="xl"
              bgColor="white"
              shadow="xl"
            >
              <MKBox
                display="flex"
                alginItems="center"
                justifyContent="center"
                p={2}
              >
                <MKTypography variant="h5">Play Date Request</MKTypography>
              </MKBox>
              <MKBox p={2}>
                <form onSubmit={handleSubmit}>
                  <MKBox
                    display="flex"
                    alginItems="center"
                    justifyContent="space-between"
                    p={2}
                    width="50%"
                  >
                    {/* <LocalizationProvider dateAdapter={AdapterDateFns}
                locale={localeMap[locale]}
            > */}

                    <LocalizationProvider
                      dateAdapter={AdapterDateFns}
                      locale={localeMap[locale]}
                    >
                      <DatePicker
                        views={["day"]}
                        mask={maskMap[locale]}
                        label="Play Date"
                        // openTo="year"
                        //views={['day', 'month', 'year']}
                        minDate={new Date()}
                        value={startDate}
                        onChange={(newValue) => {
                          setStartDate(newValue);
                        }}
                        //format="DD/MM/YYYY"
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </MKBox>
                  <MKBox
                    display="flex"
                    alginItems="center"
                    justifyContent="space-between"
                    p={2}
                  >
                    <MKBox mr={2}>
                      <LocalizationProvider
                        dateAdapter={AdapterDateFns}
                        locale={localeMap[locale]}
                      >
                        <TimePicker
                          //ampm={false}
                          //format="HH:mm:ss"
                          label="Start Time"
                          value={startTime}
                          onChange={setStartTime}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                    </MKBox>
                    <MKBox>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <TimePicker
                          //format="HH:mm:ss"
                          label="End Time"
                          value={endTime}
                          onChange={setEndTime}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                    </MKBox>
                  </MKBox>
                  <MKBox
                    display="flex"
                    alginItems="center"
                    justifyContent="flex-start"
                    p={2}
                  >
                    <MKInput
                      label="Meeting Location"
                      fullWidth
                      type="text"
                      name="location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Enter meeting location"
                      required
                    />
                  </MKBox>
                  <MKBox
                    display="flex"
                    alginItems="center"
                    justifyContent="flex-start"
                    p={2}
                  >
                    <MKInput
                      multiline
                      rows={6}
                      label="Message"
                      fullWidth
                      type="text"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Message here...."
                      rows={4}
                    />
                  </MKBox>
                  <MKBox display="flex" justifyContent="space-between" p={1.5}>
                    <MKButton
                      size="small"
                      variant="gradient"
                      color="info"
                      style={{
                        marginLeft: "1.5rem",
                        width: "8rem",
                        minWidth: "120px",
                      }}
                      // onClick={toggleModal}
                      onClick={handleCancel}
                    >
                      Close
                    </MKButton>
                    <MKButton
                      size="small"
                      type="submit"
                      variant="gradient"
                      color="info"
                      style={{
                        marginLeft: "1.5rem",
                        width: "8rem",
                        minWidth: "120px",
                      }}
                      type="submit"
                    >
                      Send Request
                    </MKButton>
                  </MKBox>
                </form>
              </MKBox>
            </MKBox>
          </Slide>
        </Modal>
      </Container>
    </MKBox>
  );
}

export default DogRequestModal;
