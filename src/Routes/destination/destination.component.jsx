import { useState } from "react";
import { planets } from "../../data/destination.data";
import "./destination.styles.scss";
const Destination = () => {
  const [planet, setPlanet] = useState(planets.moon);

  return (
    <div className="destination">
      <div className="content flex flex-col lg:flex-row  justify-center">
        <div className="planet-container w-[100%] lg:w-[50%]">
          <h1 className="uppercase">
            <span className="">01</span> Pick your destination
          </h1>
          <div className="planet">
            <img src={planet.image} alt="" className=" md:w-[69%] w-[75%]" />
          </div>
        </div>
        <div className="w-[100%] lg:w-[50%] planet-contents">
          <nav>
            <ul className="flex flex-row gap-12">
              <li
                style={{
                  borderBottom:
                    planet.name === "Moon" ? "2px solid white" : "black",
                  color: planet.name === "Moon" ? "white" : "",
                }}
                onClick={() => setPlanet(planets.moon)}
              >
                Moon
              </li>
              <li
                style={{
                  borderBottom:
                    planet.name === "Mars" ? "2px solid white" : "black",
                    color: planet.name === "Mars" ? "white" : "",
                }}
                onClick={() => setPlanet(planets.mars)}
              >
                Mars
              </li>
              <li
                style={{
                  borderBottom:
                    planet.name === "Europa" ? "2px solid white" : "black",
                    color: planet.name === "Europa" ? "white" : "",
                }}
                onClick={() => setPlanet(planets.europa)}
              >
                Europa
              </li>
              <li
                style={{
                  borderBottom:
                    planet.name === "Titan" ? "2px solid white" : "black",
                    color: planet.name === "Titan" ? "white" : "",
                }}
                onClick={() => setPlanet(planets.titan)}
              >
                Titan
              </li>
            </ul>
          </nav>
          <br />
          <div className="description-container">
            <div className="description">
              <h1>{planet.name}</h1>
              <p>{planet.description}</p>
            </div>
            <div className="flex flex-row gap-40 stats">
              <div>
                <h1>Avg. distance</h1>
                <p>{planet.distance}</p>
              </div>
              <div>
                <h1>est. travel time</h1>
                <p>{planet.travel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Destination;
