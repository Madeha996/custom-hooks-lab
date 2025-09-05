import React from "react";
import { useNavigate } from "react-router";

const Button = ({ url, title }: any) => {
  const navigate = useNavigate();
  return <button onClick={() => navigate(url)}>{title}</button>;
};

export default Button;
