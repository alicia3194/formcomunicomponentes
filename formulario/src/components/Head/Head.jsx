import React, { useContext } from "react";
import { UserContext } from '../../context/userContext'

const Head = () => {
  const { email } = useContext(UserContext)
  return <div>{email}</div>;
};

export default Head;