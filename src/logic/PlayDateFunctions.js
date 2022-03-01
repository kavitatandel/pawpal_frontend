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

//get 'Pending' dog request for owner
export const GetPlayDateRequestsForOwner = (owner_id) => {
    console.log("inside get play date request")
    console.log(owner_id)
    return axios
        .get(`http://localhost:5000/GetPlayDateRequestsForOwner/${owner_id}`)
        .then((res) => {
            return res.data
        })
        .catch((err) => console.log(err));
};


//get 'Approved' dog request for owner
export const GetApprovedRequestsForOwner = (owner_id) => {
    console.log("inside get play date request")
    console.log(owner_id)
    return axios
        .get(`http://localhost:5000/GetApprovedRequestsForOwner/${owner_id}`)
        .then((res) => {
            return res.data
        })
        .catch((err) => console.log(err));
};

//insert dog request
export const UpdatePlayDateRequest = (playDateRequest) => {
    return axios
        .post("http://localhost:5000/UpdatePlayDateRequest", {
            requestid: playDateRequest.requestid,
            status: playDateRequest.requestStatus,
            owner_message: playDateRequest.owner_message,
            owner_reason: playDateRequest.owner_reason,
        })
        .then((res) => console.log("Request has been updated."))
        .catch((err) => console.log(err));
};

