import "./technology.styles.scss";
import { useState } from "react";
import { technologies } from "../../data/technology.data";

const Technology = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentObject = technologies[currentIndex];
  const handleClick = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="technology">
        <h3 className="heading">
            <span>03</span> space lauch 101
          </h3>
      <div className="content flex flex-col-reverse lg:flex-row">
        <div className="crew-stats w-[100%] lg:w-[50%]">
          
          <div className="lg:flex gap-14 mt-20">
            <div className="buttons flex lg:flex-col gap-4 mt-5">
              {technologies.map((crew, index) => (
                <button
                  className={`small-circle w-16 h-16 rounded-full ${
                    index === currentIndex ? "active" : ""
                  }`}
                  key={crew.id}
                  onClick={() => handleClick(index)}
                >
                    {crew.id}
                </button>
              ))}
            </div>
            <div>
              {" "}
              <div className="stats">
                <h2>The terminology...</h2>
                <h1>{currentObject.name}</h1>
                <p>{currentObject.description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="crew-image w-[100%] lg:w-[50%]">
          <img src={currentObject.images.small} alt="" className="hide" />
          <img src={currentObject.images.large} alt="" className="lg:hidden" />
        </div>
      </div>
    </div>
  );
};
export default Technology;
