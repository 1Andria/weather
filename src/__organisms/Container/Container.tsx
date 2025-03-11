import Context from "../../__molecules/Header/Context/Context";
import Header from "../../__molecules/Header/Header";
import bgImage from "../../Icons-Colors/bg.png";
const Container = () => {
  return (
    <>
      <div
        className={`w-full h-screen`}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <Header />
        <Context />
      </div>
    </>
  );
};

export default Container;
