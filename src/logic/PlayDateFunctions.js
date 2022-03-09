import axios from "axios";

//insert dog request
export const addPlayDateRequest = (playDayRequest) => {
  return axios
    .post("https://pawpal-backend.herokuapp.com/addPlayDateRequest", {
      dog_id: playDayRequest.dog_id,
      dog_lover_id: playDayRequest.dog_lover_id,
      start_date: playDayRequest.start_date,
      start_time: playDayRequest.start_time,
      end_time: playDayRequest.end_time,
      meeting_location: playDayRequest.meeting_location,
      dl_message: playDayRequest.dl_message,
    })

    .then((res) =>
      console.log(`Request has been sent. ${playDayRequest.start_date}`)
    )
    .catch((err) => console.log(err));
};

//get 'Pending' dog request for owner
export const GetPlayDateRequestsForOwner = (owner_id) => {
  return axios
    .get(`https://pawpal-backend.herokuapp.com/GetPlayDateRequestsForOwner/${owner_id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

//get 'Approved' dog request for owner
export const GetApprovedRequestsForOwner = (owner_id) => {
  return axios
    .get(`https://pawpal-backend.herokuapp.com/GetApprovedRequestsForOwner/${owner_id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

//get 'Pending' dog request for dog lover
export const getDogLoverRequests = (user_id) => {
  console.log("inside dog lover request method" + user_id);
  return axios
    .get(`https://pawpal-backend.herokuapp.com/getDogLoverRequests/${user_id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

//get 'Approved' dog request for dog lover
export const getDogLoverApprovedRequests = (user_id) => {
  return axios
    .get(`https://pawpal-backend.herokuapp.com/getDogLoverApprovedRequests/${user_id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

//insert dog request
export const UpdatePlayDateRequest = (playDateRequest) => {
  return axios
    .post("https://pawpal-backend.herokuapp.com/UpdatePlayDateRequest", {
      requestid: playDateRequest.requestid,
      status: playDateRequest.requestStatus,
      owner_message: playDateRequest.owner_message,
      owner_reason: playDateRequest.owner_reason,
    })
    .then((res) => console.log("Request has been updated."))
    .catch((err) => console.log(err));
};

//get 'Approved' dog request for dog lover
export const deleteRequestById = (requestid) => {
  console.log("Request Id: " + requestid);
  return axios
    .delete(`https://pawpal-backend.herokuapp.com/deleteRequestById/${requestid}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};
