import AuthProvider from "@/components/AuthProvider";
import Nav from "@/components/Navbar";
import React, { ReactNode } from "react";

type DashBoardLayoutProps = {
  children: ReactNode;
};

const DashBoardLayout = ({ children }: DashBoardLayoutProps) => {
  return (
    <AuthProvider>
      <Nav />
      <main>{children}</main>
    </AuthProvider>
  );
};

export default DashBoardLayout;
