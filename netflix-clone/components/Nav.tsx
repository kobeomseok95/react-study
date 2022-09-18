/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Nav() {
  const [isPassed, setIsPassed] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsPassed(true);
      } else {
        setIsPassed(false);
      }
    });

    return window.removeEventListener("scroll", () => {});
  }, []);

  const search = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
    router.push(`/search?q=${searchValue}`);
  };

  return (
    <nav className={`nav ${isPassed && "nav_black"}`}>
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
        placeholder="영화를 입력해주세요."
      />
      <img
        alt="User Logged"
        src="https://pbs.twimg.com/profile_images/980123995390406657/lnPIuIrx_400x400.jpg"
        className="nav_avatar"
      />
    </nav>
  );
}
