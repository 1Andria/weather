import ClickBtn from "../../__atoms/ClickBtn/ClickBtn";
import Input from "../../__atoms/Input/Input";

const SearchBar = () => {
  return (
    <div className="pr-[80px] pl-[80px] mt-[18px] flex max-w-[1440px] gap-[20px] w-full ml-auto mr-auto  items-center max-[650px]:pl-[20px] max-[650px]:pr-[20px] max-[500px]:flex-col max-[500px]:items-start ">
      <Input />
      <ClickBtn />
    </div>
  );
};

export default SearchBar;
