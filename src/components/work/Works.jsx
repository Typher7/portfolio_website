import React from "react";
import { projectsData } from "./Data";
import WorksItems from "./WorksItems";
import Work5 from "../../assets/invaders.mp4";

const Works = () => {
  return (
    <div className="work__container container grid">
      {projectsData.map((item) => {
        return <WorksItems item={item} key={item.id} link={item.link} />;
      })}

      {/* <div className="work__card" key="5">
        <video
          className="work__img"
          height="190px"
          playSinline
          autoPlay
          muted
          loop
        >
          <source src={Work5} type="video/mp4" />
        </video>
        <h3 className="work__title">Invaders</h3>
        <a
          href="https://github.com/Typher7/Space-Invaders"
          className="work__button"
          target="_blank"
          rel="noreferrer"
        >
          Repo Link <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      </div> */}
    </div>
  );
};

export default Works;
