import { MapContainer, TileLayer } from 'react-leaflet'
import Geocode from 'react-geocode';
import axios from 'axios';
import { useState, useEffect } from 'react';
import jwt_decode from "jwt-decode";

const UserInfo = () => {

    //code to get longitude and latitude from address
    // //using google map API KEY
    // Geocode.setApiKey(''); //pass here google api_key
    // Geocode.fromAddress('Eiffel Tower').then(
    //     response => {
    //         const { lat, lng } = response.results[0].geometry.location;
    //         console.log(lat, lng);
    //     },
    //     error => {
    //         console.error(error);
    //     },
    // );

    //******************Upload Single File************ */
    const API_URL = "http://localhost:5000"

    const [desc, setDesc] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    const [id, setId] = useState('')
    const [uploadedImageURL, setUploadedImageURL] = useState('')
    // const cloudinaryUpload = (fileToUpload) => {
    //     return axios.post(API_URL + `/users/6210129324b8382ab358e574`, fileToUpload)
    //         .then(res => res.data)
    //         .catch(err => console.log(err))
    // }

    const handleFileUpload = (e) => {
        //const uploadData = new FormData();
        //uploadData.append("file", e.target.files[0], "file");
        //cloudinaryUpload(uploadData)
        setSelectedFile(e.target.files[0]);
        //return uploadData;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const uploadData = new FormData();
        //const uploadData = new FormData();
        uploadData.append("file", selectedFile, "file");
        uploadData.append("desc", desc);
        //return axios.post(API_URL + `/users/6210129324b8382ab358e574`, fileURL, desc)
        // return axios.post(API_URL + `/users/6210129324b8382ab358e574`, selectedFile, { desc })
        console.log(uploadData);
        //id=6210129324b8382ab358e574
        axios.post(API_URL + `/users/${id}`, uploadData)
            .then(res => {
                console.log("after uploading file");
                console.log(res.data.secure_url);
                // console.log(res.data);
                setUploadedImageURL(res.data.secure_url);
            })
            .catch(err => console.log(err))
    }

    // //get profile data
    const getProfil = async () => {
        const token = await localStorage.usertoken;
        const decoded = await jwt_decode(token);
        //console.log(decoded);
        setId(decoded.user._id);
        if (uploadedImageURL === '') {
            setUploadedImageURL(decoded.user.profile_pic)
        }
    };

    // const handleSubmitUpload = (e) => {
    //     e.preventDefault();
    //     getProfil();
    // }

    useEffect(() => {
        getProfil();
    }, [uploadedImageURL, id]);

    return (
        <>
            <h1>Welcome to User Info</h1>
            {/* <h2>Eiffle Tower</h2> */}
            {/* <h3>lat: {lat} , lng:{lng}</h3> */}
            <div >
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Select Profile Pic: </label>
                        <input
                            type="file"
                            onChange={(e) => handleFileUpload(e)}
                        />
                    </div>
                    {/* <div style={{ margin: 10 }}>
                        <label style={{ margin: 10 }}>Cloudinary: </label>
                        <input
                            type="file"
                            value={selectedFile}
                            onChange={(e) => setSelectedFile(e.target.files[0])}
                        />
                    </div> */}
                    <div>
                        <label htmlFor="desc">Description:</label>
                        <input type="text" name="desc" value={desc} onChange={(e) => setDesc(e.target.value)} />
                    </div>
                    <div>
                        <button type="submit">Save</button>
                    </div>


                </form>
            </div >
            <div>
                {/* <form onSubmit={handleSubmitUpload}> */}
                <div>
                    {/* <h1>Uploaded file is here</h1><button type="submit">Get Uploaded Image</button> */}
                    <div width="200px" height="200px">
                        <img src={`${uploadedImageURL}`} alt="uploaded image" width="200px" height="200px"></img>
                    </div>
                </div>
                {/* </form> */}
            </div>
        </>
    )
}

export default UserInfo;