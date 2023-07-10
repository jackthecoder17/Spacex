import "./crew.styles.scss";
import { useState } from "react";
import { crews } from "../../data/crew.data";
const Crew = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentObject = crews[currentIndex];
  const handleClick = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="crew">
      <div className="content flex flex-col lg:flex-row">
        <div className="crew-stats w-[100%] lg:w-[50%]">
          <h3 className="heading">
            <span>03</span> meet your crew
          </h3>
          <div className="stats">
            <h2>{currentObject.role}</h2>
            <h1>{currentObject.name}</h1>
            <p>{currentObject.bio}</p>
          </div>
          <div className="buttons flex gap-4">
            {crews.map((crew, index) => (
              <button
                className={`small-circle w-5 h-5 rounded-full ${index === currentIndex ? "active" : ""}`}
                key={crew.id}
                onClick={() => handleClick(index)}
              ></button>
            ))}
          </div>
        </div>
        <div className="crew-image w-[100%] lg:w-[50%]">
          <img src={currentObject.images} alt="" className="w-35 h-28"/>
        </div>
      </div>
    </div>
  );
};
export default Crew;
