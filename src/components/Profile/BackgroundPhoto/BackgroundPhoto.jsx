import React from "react";
import "./BackgroundPhoto.module.css";
import cl from "./BackgroundPhoto.module.css";

const BackgroundPhoto = () => {
  return (
    <div>
      <img
        src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
        alt=""
        className={cl.backgroundPhoto}
      />
    </div>
  );
};
export default BackgroundPhoto;
