import React from "react";
import "./Capsule.css";
import { Link } from "react-router-dom";

const Capsule = () => {
  return (
    <main>
      <nav className="nav">
        <Link to="/">home</Link>
      </nav>
      <h1>take me back in time</h1>
      <div className="capsule-container">
        <img src={require("../images/arcade.jpg")} alt="arcade" />
        <img src={require("../images/cars.jpg")} alt="cars" />
        <img src={require("../images/cassette-tapes.jpg")} alt="cassettes" />
        <img src={require("../images/camera.png")} alt="camera" />
        <img src={require("../images/telephone.jpg")} alt="telephone" />
        <img src={require("../images/fashion.jpg")} alt="fashion" />
        <img src={require("../images/photo-camera.jpg")} alt="camera" />
        <img src={require("../images/sega.jpg")} alt="sega game" />
        <img src={require("../images/vehicle.jpg")} alt="old vehicle" />
        <img src={require("../images/floppy-disc.jpg")} alt="floppy-disc" />
        <img src={require("../images/gameboy.jpg")} alt="gameboy" />
        <img src={require("../images/shoes.jpg")} alt="shoes" />
      </div>
    </main>
  );
};

export default Capsule;
