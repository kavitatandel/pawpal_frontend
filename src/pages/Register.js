import Header from "components/Layout/Header";
import RegisterForm from "components/Forms/RegisterForm";
import PageContainer from "components/Layout/PageContainer";

const Register = () => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [street, setStreet] = useState("");
  // const [zipcode, setZipcode] = useState("");
  // const [city, setCity] = useState("");
  // const [country, setCountry] = useState("");
  // const [userType, setUserType] = useState("owner");
  // const [latitude, setlatitude] = useState(51.1657);
  // const [longitude, setlongitude] = useState(10.4515);

  // let navigate = useNavigate();

  // const createUser = (e) => {
  //   e.preventDefault();

  //   const newUser = {
  //     first_name: firstName,
  //     last_name: lastName,
  //     email: email,
  //     password: password,
  //     user_type: userType,
  //     street: street,
  //     zip_code: zipcode,
  //     city: city,
  //     country: country,
  //   };

  //   register(newUser).then((res) => {
  //     navigate("/user");
  //   });
  // };

  return (
    <>
      <Header />
      <RegisterForm />
      <PageContainer />
    </>
  );
};

export default Register;
