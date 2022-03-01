import * as React from 'react';
import { useState, useContext, useEffect } from "react";
import axios from 'axios';
import { UserContext } from "../../context/UserContext";
import { UpdatePlayDateRequest } from "../../logic/PlayDateFunctions";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";

//for radio button
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";


// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";

//for date picker
import TextField from '@mui/material/TextField';

function DogApproveRejectModal({
    show, setShow, toggleModal,
    // dogLoverId, setDogLoverId, 
    selectedDogRequest, setSelectedDogRequest }) {
    const [user, setUser] = useContext(UserContext);
    const [message, setMessage] = useState('');
    const [action, setAction] = useState('Approved');


    //for radio group
    const handleChange = (event) => {
        setAction(event.target.value);
    };

    console.log(selectedDogRequest);

    const handleCancel = () => {
        //clear states
        setAction('Approved')
        setMessage('')
        toggleModal();
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let ownerMessage;
        let ownerReason;

        if (action === 'Approved') {
            ownerMessage = message;
            ownerReason = '';
        }
        else {
            ownerMessage = '';
            ownerReason = message;
        }

        const playDateRequest = {
            requestid: selectedDogRequest._id,
            requestStatus: action,
            owner_message: ownerMessage,
            owner_reason: ownerReason,
        };

        UpdatePlayDateRequest(playDateRequest).then(res => console.log(res))
            .catch(err => console.log(err));

        //clear states
        setAction('Approved')
        setMessage('')

        toggleModal();
    };

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
                            width="40%"
                            display="flex"
                            flexDirection="column"
                            borderRadius="xl"
                            bgColor="white"
                            shadow="xl"
                        >

                            <MKBox p={2}>
                                <form onSubmit={handleSubmit}>
                                    <MKBox pt={1} pb={2}>
                                        <MKBox
                                            display="flex"
                                            alginItems="center"
                                            justifyContent="center"

                                        >
                                            <MKTypography variant="h5">Approve / Reject Request</MKTypography>

                                        </MKBox>
                                    </MKBox>
                                    <MKBox
                                        display="flex"
                                        alginItems="center"
                                        justifyContent="flex-start"
                                        pb={1}

                                    >
                                        <MKTypography pr={1} style={{ fontWeight: "200" }}>
                                            Playdate Requester:
                                        </MKTypography>
                                        <MKTypography>

                                            {selectedDogRequest.DogLovers.first_name} {selectedDogRequest.DogLovers.last_name}
                                        </MKTypography>
                                    </MKBox>
                                    <MKBox
                                        display="flex"
                                        alginItems="center"
                                        justifyContent="flex-start"
                                        pb={1}

                                    >
                                        <MKBox>
                                            <MKTypography pr={1}>
                                                Playdate Requester Address:
                                            </MKTypography>
                                            <MKTypography>
                                                {selectedDogRequest.DogLovers.street}  {selectedDogRequest.DogLovers.zip_code},  {selectedDogRequest.DogLovers.city},  {selectedDogRequest.DogLovers.country}
                                            </MKTypography>
                                        </MKBox>

                                    </MKBox>
                                    <MKBox display="flex"
                                        alginItems="center"
                                        justifyContent="space-around"
                                        pb={1}>
                                        <MKBox>
                                            <MKTypography>
                                                Start Date:
                                            </MKTypography>
                                            <MKTypography>
                                                {new Date(selectedDogRequest.start_date).toLocaleDateString()}
                                            </MKTypography>
                                        </MKBox>
                                        {/* </MKBox>
                                    <MKBox display="flex"
                                        alginItems="center"
                                        justifyContent="space-around"
                                        pb={1} width="100%"> */}
                                        <MKBox pr={1}>
                                            <MKTypography>
                                                Start Time:
                                            </MKTypography>
                                            <MKTypography>
                                                {selectedDogRequest.start_time}

                                            </MKTypography>
                                        </MKBox>
                                        <MKBox>
                                            <MKTypography>
                                                End Time:
                                            </MKTypography>
                                            <MKTypography>
                                                {selectedDogRequest.end_time}
                                            </MKTypography>
                                        </MKBox>
                                    </MKBox>
                                    <MKBox
                                        display="flex"
                                        alginItems="center"
                                        justifyContent="flex-start"
                                        pb={1}

                                    >
                                        <MKTypography
                                            sx={{ fontWeight: 'light' }}
                                            pr={1}>
                                            Meeting Location:
                                        </MKTypography>
                                        <MKTypography>
                                            {selectedDogRequest.meeting_location}

                                        </MKTypography>
                                    </MKBox>
                                    <MKBox
                                        display="flex"
                                        alginItems="center"
                                        justifyContent="flex-start"
                                        pb={1}
                                        sx={{ fontWeight: 'light' }}
                                    >
                                        <MKTypography
                                            pr={1}
                                            sx={{ fontWeight: 'light' }}>
                                            Requester Message:
                                        </MKTypography>
                                        <MKTypography>
                                            {selectedDogRequest.dl_message === '' ? 'No message from requester.' : selectedDogRequest.dl_message}


                                        </MKTypography>
                                    </MKBox>
                                    <MKBox
                                        mt={1}
                                        justifyContent="flex-start"
                                        display="flex"
                                        mb={1}
                                        ml={0.5}
                                        textAlign="left"
                                        width="100%"
                                    >
                                        <FormControl>
                                            <FormLabel
                                                style={{ fontSize: "0.70em", color: "Gray" }}
                                                size="small"
                                            >
                                                Approve / Reject Request
                                            </FormLabel>
                                            <RadioGroup
                                                name="controlled-radio-buttons-group"
                                                //value={user.user_type}
                                                value={action}
                                                onChange={handleChange}
                                                size="small"
                                                row
                                            >
                                                <FormControlLabel
                                                    value="Approved"
                                                    control={
                                                        <Radio
                                                            size="small"
                                                            style={{ fontSize: "0.70em" }}
                                                        />
                                                    }
                                                    label="Approve"
                                                />
                                                <FormControlLabel
                                                    value="Rejected"
                                                    control={
                                                        <Radio
                                                            size="small"
                                                            style={{ fontSize: "0.70em" }}
                                                        />
                                                    }
                                                    label="Reject"
                                                />
                                            </RadioGroup>
                                        </FormControl>
                                    </MKBox>

                                    <MKBox
                                        display="flex"
                                        alginItems="center"
                                        justifyContent="space-around"
                                        pb={1}
                                    >
                                        <MKInput
                                            multiline
                                            rows={6}
                                            label="Approve/Reject Message from Dog Owner"
                                            fullWidth
                                            type="text"
                                            name="message"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            placeholder="Message here...."
                                            rows={4} />

                                    </MKBox>
                                    <MKBox
                                        display="flex"
                                        justifyContent="space-between"
                                        p={1.5}
                                    >
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
                                            }} type="submit"
                                        >
                                            Save
                                        </MKButton>
                                    </MKBox>
                                </form>
                            </MKBox>

                        </MKBox>
                    </Slide >
                </Modal >
            </Container >
        </MKBox >
    );
}

export default DogApproveRejectModal;