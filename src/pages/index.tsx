import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import DropDown from "../subcomponents/dropDown";
import { useRouter } from "next/router";

import {
  Card,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
  Spinner,
} from "reactstrap";
import TextInputWithLabel from "../subcomponents/textInputWithLabel";
import Button from "../subcomponents/button";

const SignUp = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signUpPageForm, setSignUpPageForm] = useState([]);
  const [textInputForms, setTextInputForms] = useState([]);
  const [welcomeText, setWelcomeText] = useState("");
  const [buttonForms, setButtonForms] = useState([]);
  const [inputDatas, setInputDats] = useState({});
  const [accountType, setAccountType] = useState([]);
  const [role, setRole] = useState('');

  const validateFormAndSignUp = () => {
    if (!inputDatas.name) {
      return alert("Please enter your name");
    } else if (!/\S+@\S+\.\S+/.test(inputDatas.email)) {
      return alert("Please enter a valid email");
    } else if (inputDatas.password.length < 5) {
      return alert("Please provide password of minimum 5 characters");
    } 
    else if (!role) {
      return alert("select your role");
    }

    signUp();
  };

  const signUp = async() => {
    let userType = 1

    if (role !== 'admin') userType = 2
    const postData = {
      ...inputDatas,
      role: userType
    }
    
   await  axios
      .post("http://localhost:8000/user/signup", postData)
      .then((res) => {
        alert("You are successfully registered");
        router.push("/logIn");
      })
      .catch((err) => console.log("err", err));
  };

  const getSignUpPageData = async () => {
    await axios.get("http://localhost:8000/signUpPage").then((res) => {
      res.data?.includes.Entry.forEach((each: any) => {
        if (each.fields.placeholder) {
          setTextInputForms((oldElement) => [...oldElement, each]);
        } else if (each.fields.welcomeText) {
          setWelcomeText(each.fields.welcomeText.content[0].content[0].value);
        } else if (each.fields.theme) {
          setButtonForms((oldElement) => [...oldElement, each]);
        } else {
          console.log("each", each);
          setAccountType(each.fields.dropdown);
        }
      });
    });
  };

  useEffect(() => {
    getSignUpPageData();
  }, []);

  const handleInputData = (e: any) => {
    console.log("e.target.value", e.target.value);
    console.log("e.target.value", e.target.name);
    

    setInputDats(oldState => {
      oldState[e.target.name] = e.target.value
      return oldState;
    })
  };
  const handleRole = (role: string) => {
    setRole(role)
  }

  

  const handleButtonAction = (action: string) => {
    if(action !== 'Sign Up') {
      router.push('/logIn')
    } else {
      validateFormAndSignUp()
    }
  } 

  return (
    <Container fluid style={{ width: "100%", marginLeft: "10%" }}>
      <h2
        style={{
          marginTop: "25vh",
          marginBottom: 50,
          color: "#d40c0c",
        }}
      >
        {welcomeText}
      </h2>
      <DropDown roles={accountType} handleRoles={(role: string) => handleRole(role)} />


      {textInputForms &&
        textInputForms[0] &&
        textInputForms.map((each, index) => {
          return (
            <div style={{ marginRight: "50%", marginBottom: 20 }} key={index}>
              <TextInputWithLabel
                each={each["fields"]}
                handleChangeData={(e) => handleInputData(e)}
              />
            </div>
          );
        })}

      {buttonForms &&
        buttonForms[0] &&
        buttonForms.map((each, index) => {
          return (
            <div style={{marginTop: 10, display: "flex"}}>
              {
                each["fields"]["text"] === "Log In" &&
                <p style={{marginRight: 10}}>Already have an acoount?</p>

              }
              
              <Button
                color={each["fields"]["theme"]}
                text={each["fields"]["text"]}
                handleButtonAction={() => handleButtonAction(each["fields"]["text"])}
              />
            </div>
          );
        })}
    </Container>
  );
};

export default SignUp;
