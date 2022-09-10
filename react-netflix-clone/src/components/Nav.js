import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  const [isPassedByScrollSection, setIsPassByScrollSection] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const navigate = useNavigate();

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

  const search = (e) => {
    setSearchValue(e.target.value)
    navigate(`/search?q=${e.target.value}`)
  }

  return (
    <nav className={`nav ${isPassedByScrollSection && "nav_black"}`}>
      <img
        alt="Netflix Logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png"
        className="nav_logo"
        onClick={() => window.location.reload()}
      />
      <input 
        value={searchValue}
        onChange={search}
        className="nav__input"
        type="text"
        placeholder="영화를 검색해주세요."
      />
      <img
        alt="User Logged"
        src="https://pbs.twimg.com/profile_images/980123995390406657/lnPIuIrx_400x400.jpg"
        className="nav_avatar"
      />
    </nav>
  );
}
