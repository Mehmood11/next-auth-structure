"use client";
import { DEFAULT_PATH } from "@/config";
import { Box, Button, TextField } from "@mui/material";
import { signIn } from "next-auth/react";
import React, { useState } from "react";

const SignIn = () => {
  const [inputValues, setInputValues] = useState({});

  const changeHandler = (e) => {
    const inputValue = { [e.target.name]: e.target.value };

    setInputValues({
      ...inputValues,
      ...inputValue,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(inputValues);
    signIn("login", {
      redirect: false,
      email: inputValues.email,
      password: inputValues.password,
      callbackUrl: DEFAULT_PATH,
    }).then((res) => {
      console.log(res);
    });
  };
  return (
    <Box>
      <form>
        <TextField
          name="email"
          type="email"
          onChange={(e) => changeHandler(e)}
        />
        <TextField
          name="password"
          type="password"
          onChange={(e) => changeHandler(e)}
        />
        <Button type="submit" onClick={onSubmitHandler}>
          Sign In
        </Button>
      </form>
      <Button>Sign In with Google</Button>
    </Box>
  );
};

export default SignIn;
