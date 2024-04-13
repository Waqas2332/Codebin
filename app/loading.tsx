"use client";

const override = {
  display: "block",
  margin: "100px auto",
};

import { ClipLoader } from "react-spinners";
const LoadingPage = ({ loading }: { loading: boolean }) => {
  return (
    <ClipLoader
      cssOverride={override}
      size={150}
      color="#fff"
      loading={loading}
    />
  );
};

export default LoadingPage;
