import axios from "axios";

// //add dog
// export const addDog = (dog) => {
//     console.log("inside dog function")
//     console.log(dog.profile_photo);
//     return axios
//         .post("http://localhost:5000/adddog", {

//             user_id: dog.user_id,
//             name: dog.name,
//             breed: dog.breed,
//             age_years: dog.age_years,
//             age_months: dog.age_months,
//             size: dog.size,
//             description: dog.description,
//             energy: dog.energy,
//             kid_friendly: dog.kid_friendly,
//             cat_friendly: dog.cat_friendly,
//             dog_friendly: dog.dog_friendly,
//             obedience: dog.obedience,
//             can_stay_home: dog.can_stay_home,
//             exercise_type: dog.exercise_type,
//             can_play_fetch: dog.can_play_fetch,
//             //profile_photo: dog.profile_photo,
//         })
//         .then((res) => console.log("Dog is added."))
//         .catch((err) => console.log(err));
// };


//add dog
export const addDog = (uploadData) => {
    console.log("inside dog function")
    console.log(uploadData.profile_photo);
    return axios
        .post("http://localhost:5000/adddog", uploadData)
        .then((res) => console.log("Dog is added."))
        .catch((err) => console.log(err));
};
