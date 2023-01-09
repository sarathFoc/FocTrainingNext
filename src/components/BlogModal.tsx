import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Input } from "reactstrap";
import Button from "../subcomponents/button";
import TextInputWithLabel from "../subcomponents/textInputWithLabel";

type blogModalProps = {
  blogdata: any;
  showBlogModal: boolean;
  closeBlogModal?: (value: boolean) => void;
  // handleChangeData? : (e: React.ChangeEvent<HTMLInputElement>) => void
};

const BlogModal = (props: blogModalProps) => {
  console.log("blogModalPropsprops", props)
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [inputDatas, setInputDatas] = useState({});
  const [blogModalData, setBlogModalData] = useState([]);

  const baseUrl = "http://localhost:8000";
  const Axios = axios.create({
    baseURL: baseUrl,
  });

  const postBlog =  async () => {
   const token = localStorage.getItem("access_token")

    await Axios({
      method: "POST",
      url: "/create-blog",
      headers: {
        authorization: `Bearer ${token}`,
      },
      data: {
        blog: inputDatas.blogDescription,
        title: inputDatas.blogTitle,
      },
    })
      .then((res) => {
        alert("Blog Posted Succesfully");
        window.location.reload();
      })
      .catch((err) => {
        console.log("err", err);
      });
  
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputDatas((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleButtonAction = (action: string) => {
    console.log("action", action)
    if (action === "Publish") {
      postBlog();
    } else {
      props.closeBlogModal(false);
    }
  };
  return (
    <div data-testid='mainDiv' style={{ backgroundColor: "black" }}>
      <Modal
        
        isOpen={props.showBlogModal}
        style={{
          marginTop: 100,
          width: "90vw",
          maxWidth: "90vw",
          height: "1000px",
        }}
      >
        {props.blogdata[0] &&
          props.blogdata.map((each: any, index: number) => {
            if (each["fields"]["friendlyName"] === "blogModalHeader") {
              return (
                <ModalHeader>{each["fields"]["blogModalHeader"]}</ModalHeader>
              );
            }
            if (each["fields"]["name"] === "blogTitle") {
              return (
                <div style={{ margin: 20 }} key={index}>
                  <TextInputWithLabel
                    each={each}
                    handleChangeData={(
                      e: React.ChangeEvent<HTMLInputElement>
                    ) => handleChange(e)}
                  />
                </div>
              );
            }
            if (each["fields"]["name"] === "blogDescription") {
              return (
                <div style={{ margin: 20 }} key={index}>
                  <TextInputWithLabel
                    each={each}
                    handleChangeData={(
                      e: React.ChangeEvent<HTMLInputElement>
                    ) => handleChange(e)}
                  />
                </div>
              );
            }
          })}

        <ModalFooter style={{ display: "flex", justifyContent: "center" }}>
          {props.blogdata &&
            props.blogdata.map((each, index) => {
              if (each["fields"]["friendlyName"] === 'button') {

                return (
                  <Button
                    color={each["fields"]["theme"]}
                    text={each["fields"]["text"]}
                    handleButtonAction={() =>
                      handleButtonAction(each["fields"]["text"])
                    }
                  />
                );
              }
            })}
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default BlogModal;

function indexOf(): any {
  throw new Error("Function not implemented.");
}
