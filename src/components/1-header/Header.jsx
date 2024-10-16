import React, { useEffect, useState } from "react";
import "./header.css";
const Header = () => {
  const [showmodel, setshowmodel] = useState(false);
  //si la valeur de currentMode==null prend :dark
  const [theme, settheme] = useState(localStorage.getItem("currentMode") ?? "dark");


  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
    <header className=" flex">
      <button
        onClick={() => setshowmodel(true)}
        className=" menu icon-menu flex"
      ></button>
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          //send value to local storage
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );
          //get value from LS
          settheme(localStorage.getItem("currentMode"));
        }}
        className="mode flex"
      >
        { theme === "dark"? (<span className="icon-moon-o"></span>):(<span className="icon-sun"></span>)

        }
      </button>
      {showmodel && (
        <div className="fixed">
          <ul className="model">
            <li>
              <button
                className="icon-cancel"
                onClick={() => setshowmodel(false)}
              ></button>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
export default Header;
