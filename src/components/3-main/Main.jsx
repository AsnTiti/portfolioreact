import React, { useState } from "react";
import "./main.css";
import  {myProjects} from "./myProjects";
const Main = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);
  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);
    const newArray = myProjects.filter((item) => {
      const interArray = item.categorie.find((myitem) => {
        return myitem === buttonCategory;
      });
      return interArray === buttonCategory;
    });
    setArr(newArray);
  };

  return (
    <main className=" flex">
      <section className="  left-section flex">
        <button
          onClick={() => {
            setcurrentActive("all");
            setArr(myProjects)
          }}
          className={currentActive === "all" ? "active" : null}
        >
          All projects
        </button>


        <button
          onClick={() => {
            handleClick("node");
          }}
          className={currentActive === "node" ? "active" : null}
        >
          Node && Express
        </button>
         <button
          onClick={() => {
            handleClick("C#");
          }}
          className={currentActive === "C#" ? "active" : null}
        >
          C# & .Net
        </button>
        <button
          onClick={() => {
            handleClick("php");
          }}
          className={currentActive === "php" ? "active" : null}
        >
          Php
        </button>
        <button
          onClick={() => {
            handleClick("Java");
          }}
          className={currentActive === "Java" ? "active" : null}
        >
          Java
        </button>
      </section>
      <section className="  flex right-section">
        {arr.map((item) => {
          return (
            <article key={item.imagPath} className="card">
              <img width={220} src={item.imagPath} alt="" />
              <div style={{ width: "220px" }} className="box">
                <h1 className="title">{item.projectTitle}</h1>
                <p className="sub-title">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
                  sequi
                </p>
                <div className=" icons flex">
                  <div style={{ gap: "11px" }} className="flex">
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>

                  <a className="link flex" href="">
                    more
                    <span
                      style={{ alignSelf: "end" }}
                      className="icon-arrow-right"
                    ></span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};
export default Main;
