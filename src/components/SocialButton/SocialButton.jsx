import React from "react";
import styles from "./SocialButton.module.scss";
import { facebookProvider, googleProvider } from "../../config/authMethods";
import { socialMediaAuth } from "../../services/Auth.js";

const authOption = {
  facebook: facebookProvider,
  google: googleProvider,
};

const handleOnClick = async (providerOption) => {
  const res = await socialMediaAuth(providerOption);
};

function SocialButton({ type, children, imgSrc }) {
  return (
    <button onClick={() => handleOnClick(authOption[type])} className={styles[type]}>
      <img src={imgSrc} alt={type} />
      <span>{children}</span>
    </button>
  );
}

export default SocialButton;
