import "./home.styles.scss";
const Home = () => {
  return (
    <div className="Home">
      <div className="content flex flex-col lg:flex-row mx-auto w-[80%] align-middle">
        <div className="content-text w-[100%] lg:w-[50%]">
          <div className="w-none lg:w-[27rem]">
            <h3>SO, YOU WANT TO TRAVEL TO</h3>
            <h1>SPACE</h1>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
        </div>
        <div className="diagram w-[100%] lg:w-[50%]">
          <div className="circle">
            <h1>Explore</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
