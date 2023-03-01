import React from "react";
import styles from "./errorpage.module.scss";

const ErrorPage = () => {
  return (
    <div
      className={`${styles.errorPage} d-flex justify-content-center align-items-center pt-5`}
    >
      <img src={"https://res.cloudinary.com/practicaldev/image/fetch/s--_GqDpWw0--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/7aqcppklh6bexoa70320.jpg"} alt="Not found" />
    </div>
  );
};

export default ErrorPage;
