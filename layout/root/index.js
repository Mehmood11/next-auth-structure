"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";

const Layout = ({ children }) => {
  return <SessionProvider refetchInterval={0}>{children}</SessionProvider>;
};

export default Layout;
