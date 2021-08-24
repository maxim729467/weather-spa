import React from "react";
import { StyledContainer } from "./Container.styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { getError } from "Redux/selectors";

export default function Container({ children }) {
  const state = useSelector((state) => state);
  const error = getError(state);

  if (error) {
    toast.error("Some server issue has occured", {
      toastId: "uniqueID",
    });
  }

  return (
    <StyledContainer>
      <ToastContainer />
      {children}
    </StyledContainer>
  );
}
