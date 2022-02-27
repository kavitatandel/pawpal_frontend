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

