import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const [isPassedScroll, setIsPassedScroll] = useState(false);
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsPassedScroll(true);
      } else {
        setIsPassedScroll(false);
      }
    });

    return window.removeEventListener("scroll", () => {});
  }, []);

  const search = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
    navigate(`/search?q=${e.target.value}`)
  }

  return (
    <nav className={`nav ${isPassedScroll} && "nav_black"`}>
      <img
        alt="Netflix Logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png"
        className="nav_logo"
        onClick={() => window.location.reload()}
      />
      <input 
        value={keyword} 
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
