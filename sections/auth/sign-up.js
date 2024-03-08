"use client";
import { DEFAULT_PATH } from "@/config";
import { Box, Button, TextField } from "@mui/material";
import { signIn } from "next-auth/react";
import React, { useState } from "react";

const SignUp = () => {
  const [inputValues, setInputValues] = useState({});

  const changeHandler = (e) => {
    const inputValue = { [e.target.name]: e.target.value };

    setInputValues({
      ...inputValues,
      ...inputValue,
    });
  };

  const onSubmitHandler = (e) => {
    signIn("register", {
      redirect: false,
      name: inputValues.name,
      email: inputValues.email,
      password: inputValues.password,
      //   callbackUrl: DEFAULT_PATH,
    }).then((res) => {
      if (res?.error) {
        console.log(res?.error);
      }
    });
  };
  return (
    <Box>
      <TextField name="name" type="text" onChange={(e) => changeHandler(e)} />
      <TextField name="email" type="email" onChange={(e) => changeHandler(e)} />
      <TextField
        name="password"
        type="password"
        onChange={(e) => changeHandler(e)}
      />
      <Button onClick={onSubmitHandler}>Sign Up</Button>
      <Button>Sign In with Google</Button>
    </Box>
  );
};

export default SignUp;
