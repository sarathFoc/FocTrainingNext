import { useState } from "react";
import { Input } from "reactstrap";
import { InputType } from "reactstrap/types/lib/Input";

type LogInProps = {
  each: any
  handleChangeData? : (e: React.ChangeEvent<HTMLInputElement>) => void
  // id: string;
  // type: string;
  // name: string;
  // placeholder: string;
}

const TextInputWithLabel: React.FC<LogInProps> = (props: LogInProps) => {
  const {  each, handleChangeData} = props;

  const [inputDatas, setInputDatas] = useState({
    firstName: '',
    secondName: '',
    idCardNumber: '',
    accountNumber:'',
  })


  return( 
  <Input
    id={(each && each["sys"]) ? each["sys"]["id"] : each["name"]}  
    type={each["fields"]? each["fields"]["type"] : each["type"]}
    name={each["fields"]? each["fields"]["name"]: each["name"] }
    placeholder={each["fields"] ? each["fields"]["placeholder"]: each["placeholder"]} 
    // style={{   height: each["fields"]?["name"] === 'blogTitle' ? "5vh" : each["fields"]["name"] === 'blogDescription' ? "20vh" : null }}
    onChange={(e) => {
      handleChangeData(e)
    }}
    // value={}
  />
  )
};

export default TextInputWithLabel;
