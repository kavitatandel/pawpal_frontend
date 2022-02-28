import axios from 'axios';

//insert dog request
export const addPlayDateRequest = (playDayRequest) => {

    return axios
        .post("http://localhost:5000/addPlayDateRequest", {
            dog_id: playDayRequest.dog_id,
            dog_lover_id: playDayRequest.dog_lover_id,
            start_date: playDayRequest.start_date,
            start_time: playDayRequest.start_time,
            end_time: playDayRequest.end_time,
            meeting_location: playDayRequest.meeting_location,
            dl_message: playDayRequest.dl_message,
        })
        .then((res) => console.log("Request has been sent."))
        .catch((err) => console.log(err));
};

//insert dog request
export const GetPlayDateRequestsForOwner = (owner_id) => {
    console.log("inside play date reqeust owner id")
    console.log(owner_id);
    return axios
        .get("http://localhost:5000/GetPlayDateRequestsForOwner", {
            owner_id: owner_id,
        })
        .then((res) => {
            return res.data
        })
        .catch((err) => console.log(err));
};

