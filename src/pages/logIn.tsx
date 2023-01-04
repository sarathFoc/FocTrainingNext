import axios from "axios";
import { useEffect, useState } from "react";

import { Container } from "reactstrap";
import { useRouter } from "next/router";
import TextInputWithLabel from "../subcomponents/textInputWithLabel";
import Button from "../subcomponents/button";

const LogIn = (props: any) => {
  const router = useRouter();

  const [textInputForms, setTextInputForms] = useState([]);
  const [welcomeText, setWelcomeText] = useState("");
  const [buttonForms, setButtonForms] = useState([]);
  const [inputDatas, setInputDats] = useState({});

  const handleButtonAction = async () => {
    console.log("inputDatas", inputDatas);

    if (!inputDatas.password) {
      return alert("Please enter your password");
    } else if (!/\S+@\S+\.\S+/.test(inputDatas.email)) {
      return alert("Please enter a valid email");
    }

    await axios
      .post("http://localhost:8000/auth/login", inputDatas)
      .then((res) => {
        localStorage.setItem("access_token", res.data.access_token)
        router.push("/home");
      })
      .catch((err) => {
        console.log("err", err);
        alert("Log In failed");
      });
  };

  const handleInputData = (e: any) => {
    setInputDats((oldState) => {
      oldState[e.target.name] = e.target.value;
      return oldState;
    });
  };

  const getLogInPageData = async () => {
    await axios.get("http://localhost:8000/logInPage").then((res) => {
      console.log("3FlD6Q9CUIdP4AkM7GZFwn", res.data);
      res.data?.includes.Entry.forEach((each: any) => {
        if (each.fields.placeholder) {
          setTextInputForms((oldElement) => [...oldElement, each]);
        } else if (each.fields.welcomeText) {
          setWelcomeText(each.fields.welcomeText.content[0].content[0].value);
        } else if (each.fields.theme) {
          setButtonForms((oldElement) => [...oldElement, each]);
        }
      });
    });
  };

  useEffect(() => {
    getLogInPageData();
  }, []);

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
            <div style={{ marginTop: 10, display: "flex" }}>
              {each["fields"]["text"] === "Log In" && (
                <p style={{ marginRight: 10 }}>Already have an acoount?</p>
              )}

              <Button
                color={each["fields"]["theme"]}
                text={each["fields"]["text"]}
                handleButtonAction={() => handleButtonAction()}
              />
            </div>
          );
        })}
    </Container>
  );
};

export default LogIn;
