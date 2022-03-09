import axios from "axios";

//add dog
export const editDog = (dog) => {
  // console.log("inside dog function")
  // console.log(dog.profile_photo);
  return axios
    .post("https://pawpal-backend.herokuapp.com/editdog", {
      _id: dog._id,
      name: dog.name,
      breed: dog.breed,
      age_years: dog.age_years,
      age_months: dog.age_months,
      size: dog.size,
      description: dog.description,
      energy: dog.energy,
      kid_friendly: dog.kid_friendly,
      cat_friendly: dog.cat_friendly,
      dog_friendly: dog.dog_friendly,
      obedience: dog.obedience,
      can_stay_home: dog.can_stay_home,
      exercise_type: dog.exercise_type,
      can_play_fetch: dog.can_play_fetch,
    })
    .then((res) => console.log("Dog is updated."))
    .catch((err) => console.log(err));
};

//add dog
export const editDogProfilePic = (uploadData) => {
  // console.log("inside dog function")
  // console.log(uploadData.profile_photo);
  return axios
    .post("https://pawpal-backend.herokuapp.com/editDogProfilePic", uploadData)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

//add dog
export const addDog = (uploadData) => {
  // console.log("inside dog function")
  // console.log(uploadData.profile_photo);
  return axios
    .post("https://pawpal-backend.herokuapp.com/adddog", uploadData)
    .then((res) => console.log("Dog is added."))
    .catch((err) => console.log(err));
};

//add dog
export const dogsByOwner = (user_id) => {
  console.log("inside dogs by owner");
  console.log(user_id);
  return (
    axios
      //.get("https://pawpal-backend.herokuapp.com/getDogsByUserId", { user_id: user_id })
      .get(`https://pawpal-backend.herokuapp.com/getDogsByUserId/${user_id}`)
      .then((res) => res.data)
      .catch((err) => console.log(err))
  );
};

//get dog info by id
export const getDogInfoById = (dog_id) => {
  return axios
    .get(`https://pawpal-backend.herokuapp.com/getDogInfoById/${dog_id}`)
    .then((res) => res.data[0])

    .catch((err) => console.log(err));
};
