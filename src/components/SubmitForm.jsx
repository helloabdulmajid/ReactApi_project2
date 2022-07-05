import React ,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Input,Button,Form,Label,FormGroup} from "reactstrap";

const TestForm=()=> {

    // form data save in use state
    const [name,setName]=useState("");
    const [gmail,setGmail]=useState("");

    const [pass,setPass]=useState("");

    const nameHandler=(event)=>{
        setName(event.target.value);
        console.log(name);
    };
    const passHandler=(event)=>{
        setPass(event.target.value);
        console.log(pass);

    };

    const gmailHandler=(event)=>{
        setGmail(event.target.value);
        console.log(gmail);

    };

      // form data submit
      const submitHandler=async(event)=>{
        event.preventDefault();
        // const submitForm=new FormData();
        // submitForm.append("name",name);
        console.log("name",name);
        console.log("pass",pass);

      };

  return (
    <div>
        
        <Form  onSubmit={submitHandler} inline>
        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
    <Label
      className="me-sm-2"
      for="name"
    >
      Name
    </Label>
    <Input
      id="name"
      name="name"
      placeholder="Abdul Majid"
      type="text"
      onChange={nameHandler}
    />
  </FormGroup>
  <FormGroup className="mb-2 me-sm-2 mb-sm-0">
    <Label
      className="me-sm-2"
      for="exampleEmail"
    >
      Email
    </Label>
    <Input
      id="exampleEmail"
      name="email"
      placeholder="something@idk.cool"
      type="email"
      onChange={gmailHandler}
    />
  </FormGroup>
  <FormGroup className="mb-2 me-sm-2 mb-sm-0">
    <Label
      className="me-sm-2"
      for="examplePassword"
    >
      Password
    </Label>
    <Input
      id="examplePassword"
      name="password"
      placeholder="don't tell!"
      type="password"
      onChange={passHandler}
    />
  </FormGroup>
  <Button>
    Submit
  </Button>
</Form>
        
    </div>
    
  )
}

export default TestForm;