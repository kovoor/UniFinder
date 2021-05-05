import { useRouter } from "next/router";
import React, { useRef, useState, useContext, useEffect } from "react";
import styles from "../styles/Search.module.css";

var defaultPics = new Array(
  "default/1.jpg",
  "default/2.jpg",
  "default/3.jpeg",
  "default/4.jpeg",
  "default/5.jpeg",
  "default/6.jpeg",
  "default/7.jpeg",
  "default/8.jpeg"
);


function choosePic() {
  var randomNum = Math.floor(Math.random() * defaultPics.length);
  // document.getElementById("myPicture").src = myPix[randomNum];
  return defaultPics[randomNum];
}

const Image = () => {
    return (
      <div>
        <img src={choosePic()} className={styles.defaultImage} />
      </div>
    );
}

export default Image
