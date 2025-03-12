import Context from "../../__molecules/Context/Context";
import Header from "../../__molecules/Header/Header";
import SearchBar from "../../__molecules/SearchBar/SearchBar";
import bgImage from "../../Icons-Colors/bg.png";
const Container = () => {
  return (
    <>
      <div
        className={`w-full h-full pb-[10px] min-h-screen`}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <Header />
        <div className="w-full h-auto pl-[7px] pr-[7px]">
          <SearchBar />

          <Context />
        </div>
      </div>
    </>
  );
};

export default Container;
