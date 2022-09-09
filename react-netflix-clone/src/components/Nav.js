import React, { useState, useEffect } from "react";
import "./Nav.css";

export default function Nav() {

  const [isPassedByScrollSection, setIsPassByScrollSection] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsPassByScrollSection(true)
      } else {
        setIsPassByScrollSection(false)
      }
    })

    return window.removeEventListener("scroll", () => {})
  }, [])

  return (
    <nav className={`nav ${isPassedByScrollSection && "nav_black"}`}>
      <img
        alt="Netflix Logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png"
        className="nav_logo"
        onClick={() => window.location.reload()}
      />
      <img
        alt="User Logged"
        src="https://pbs.twimg.com/profile_images/980123995390406657/lnPIuIrx_400x400.jpg"
        className="nav_avatar"
      />
    </nav>
  );
}
