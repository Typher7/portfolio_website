import React from 'react'
import { projectsData } from './Data'
import WorksItems from "./WorksItems"
import Work5 from "../../assets/invaders.mp4";
import Work6 from "../../assets/connectn.mp4"

const Works = () => {
    return (
        <div className="work__container container grid">
            <div className="work__card" key="5">
                <video className='work__img' height="190px" playSinline autoPlay muted loop>
                    <source src={Work5} type='video/mp4' />
                </video>
                <h3 className="work__title">Invaders</h3>
                <a href="https://github.com/Ambrose2002/Invaders" className="work__button" target='_blank'>
                    Repo Link <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>
            </div>

            <div className="work__card" key="6">
                <video className='work__img' height="190px" playSinline autoPlay muted loop>
                    <source src={Work6} type='video/mp4' />
                </video>
                <h3 className="work__title">ConnectN</h3>
                <a href="https://github.com/Ambrose2002/ConnectN" className="work__button" target='_blank'>
                    Repo Link <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>
            </div>
            {
                projectsData.map((item) => {
                    return <WorksItems item={item} key={item.id} link={item.link} />
                })
            }
        </div>
    )
}

export default Works