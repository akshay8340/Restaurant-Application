import React from "react";
import { Link } from "react-router-dom";
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we're serious about is food.</p>
          </div>
          <p className="mid">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
            deserunt, eveniet officiis error adipisci iusto doloremque mollitia
            dignissimos maiores dolorum quidem eligendi suscipit nostrum nam
            recusandae! Inventore magnam sequi, architecto nemo quis dignissimos
            laborum autem temporibus, perspiciatis sunt possimus consequuntur
            incidunt libero iure voluptatibus impedit nihil voluptatem deleniti
            tempore. Aliquid.
          </p>
          <Link to={"/"}>Explore Menu <span><HiOutlineArrowNarrowRight/></span></Link>
        </div>
        <div className="banner">
            <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
