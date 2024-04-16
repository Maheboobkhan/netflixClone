import React, { useEffect, useState } from "react";
import "../component/Header.css";
import netlogo from "../component/images/netlogo.png";
import usericon from "../component/images/usericon.png";

function Header() {
  // const [show, setShow] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 60) {
  //       setShow(true);
  //     } else {
  //       setShow(false);
  //     }
  //   });

  //   return () => {
  //     window.removeEventListener("scroll");
  //   };
  // }, []);

  return (
    <div className="header">
      <img className="header-logo" src={netlogo} alt="logo" />
      <img className="header-usericon" src={usericon} alt="user" />
    </div>
  );
}

export default Header;
