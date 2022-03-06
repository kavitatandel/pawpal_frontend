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
import DogAvatar from "../../assets/images/avatars/dog-av-grad.png";
import HumanAvatar from "../../assets/images/avatars/human-av-grad.png";
import MKAvatar from "components/MKAvatar";

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
  dogInfo
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

  useEffect(() => { });

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
              // position="relative"
              // width="500px"
              // display="flex"
              // flexDirection="column"
              // borderRadius="xl"
              // bgColor="white"
              // shadow="xl"
              position="relative"
              width="80%"
              maxWidth="730px"
              height="auto"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              borderRadius="2rem"
              bgColor="white"
              shadow="xl"
              p={3}
              my={2}
            >
              {/* Pink Box at top */}
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                width="60%"
                mx="3rem"
                mt="-2.5rem"
                pt="0.75rem"
                pr="1rem" pl="1rem"
                pb="0.75rem"
                textAlign="center"
              >
                {/* Request Status Heading */}
                <MKTypography variant="h3" fontWeight="regular" color="white">
                  Playdate Request
                </MKTypography>
              </MKBox>
              <MKBox pt="1rem" pl="3rem" pr="3rem" pb="0rem">
                <form onSubmit={handleSubmit}>
                  <Grid container>
                    <Grid item xs={12} md={6}>
                      <MKBox
                        className="Avatar"
                        sx={{
                          display: "flex",
                          justifyContent: { xs: "flex-end" },
                          alignItems: "center",
                          mb: "0.5rem", //commented by kavita
                        }}
                      >
                        <MKAvatar
                          zIndex={2}
                          src={`${dogInfo.profile_photo}`}
                          alt={`${dogInfo.name} {selectedDogRequest.DogLovers.last_name}`}
                          shadow="xl"
                          // sx={{ width: "10rem", height: "10rem" }} //commented by kavita
                          sx={{ width: "6rem", height: "6rem" }}
                          style={{
                            border: "0.3rem solid #ff9a85",
                            background:
                              "linear-gradient(145deg, #FFFFFF, #C1C3C6)",
                            borderRadius: "100%",
                            boxShadow:
                              "14.11px 14.11px 24px #D9DADE, -14.11px -14.11px 24px #FFFFFF",
                          }}
                        >
                          <img
                            src={DogAvatar}
                            alt="avatar"
                            style={{ width: "100%", height: "100%" }}
                          />
                        </MKAvatar>
                      </MKBox>
                    </Grid>
                    <Grid

                      item
                      xs={12}
                      md={6}
                      display="flex"
                      sx={{ justifyContent: { xs: "flex-start" } }}
                    >
                      <MKBox
                        display="flex"
                        flexDirection="column"
                        alignItems="flexStart"
                        justifyContent="center"
                        mb="0.5rem" ml="1rem"
                      >
                        <MKTypography
                          // variant="h2" //commented by kavita
                          variant="h4"
                          fontWeight="regular"
                          color="dark"

                        >
                          {dogInfo.name}
                        </MKTypography>

                        <MKTypography
                          // variant="h3" //commented by kavita
                          variant="h6"
                          fontWeight="regular"
                          color="dark"
                        >
                          {dogInfo.breed}
                        </MKTypography>
                      </MKBox>
                    </Grid>

                    <Grid item xs={12}>
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
                            // style={{ color: "#ff9a85" }}
                            //format="DD/MM/YYYY"
                            // renderInput={(params) => <TextField {...params} />}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                sx={{
                                  svg: { color: "#ff9a85" }
                                }}
                              />
                            )}
                          />

                        </LocalizationProvider>
                      </MKBox>
                    </Grid>
                    <Grid item xs={12}>
                      <MKBox
                        display="flex"
                        alginItems="center"
                        justifyContent="flex-start"

                      // pl={2} pr={}
                      >
                        <MKBox pl={2} mr={1}
                          width="45%"
                        >

                          <LocalizationProvider
                            dateAdapter={AdapterDateFns}
                          // locale={localeMap[locale]}
                          >

                            <TimePicker

                              //ampm={false}
                              //format="HH:mm:ss"

                              label="Start Time"
                              value={startTime}
                              onChange={setStartTime}
                              //renderInput={(params) => <TextField {...params} />}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  sx={{
                                    svg: { color: "#ff9a85" },
                                    // width: "100%"
                                  }}
                                />
                              )}
                            // InputProps={{ readOnly: true }}
                            // onChangeRaw={(e) => e.preventDefault()}
                            />
                          </LocalizationProvider>
                        </MKBox>
                        <MKBox pr={0} pl={0} width="50%">
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <TimePicker
                              //format="HH:mm:ss"
                              label="End Time"
                              value={endTime}
                              onChange={setEndTime}
                              //renderInput={(params) => <TextField {...params} />}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  sx={{
                                    svg: { color: "#ff9a85" }
                                  }}
                                />
                              )}
                            />
                          </LocalizationProvider>
                        </MKBox>
                      </MKBox>
                    </Grid>
                    <Grid item xs={12}>
                      <MKBox
                        display="flex"
                        alginItems="center"
                        justifyContent="flex-start"
                        p={2}
                      // sx={{ p: "2rem, 1rem, 1rem, 1rem" }}
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
                    </Grid>
                    <Grid item xs={12}>
                      <MKBox
                        display="flex"
                        alginItems="center"
                        justifyContent="flex-start"
                        pt={0} pl={2} pb={2} pr={2}
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
                    </Grid>
                    <Grid item xs={12}>
                      <MKBox display="flex" justifyContent="center" p={1.5}>
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
                    </Grid>
                  </Grid>
                </form>
              </MKBox>
            </MKBox>
          </Slide>
        </Modal>
      </Container>
    </MKBox >
  );
}

export default DogRequestModal;
