import React from "react";
import "./BackgroundPhoto.module.scss";
import style from "./BackgroundPhoto.module.scss";

const BackgroundPhoto = () => {
  return (
    <div>
      <img
        src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
        alt=""
        className={style.backgroundPhoto}
      />
    </div>
  );
};
export default BackgroundPhoto;
