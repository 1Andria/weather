import Logo from "../../Icons-Colors/logo_icon.png";
const Header = () => {
  return (
    <div className="w-full h-[92px] bg-[rgba(0,0,0,0.19)] flex items-center justify-between pr-[76px] pl-[76px]">
      <div className="flex gap-[23px] items-center">
        <img src={Logo} alt="logo" />
        <h1 className="text-white text-[24px] ">Weather by Melua</h1>
      </div>
      <div className="flex gap-[23px] justify-center">
        <h1 className="text-white text-[24px] ">Github</h1>
        <h1 className="text-white text-[24px] ">About</h1>
      </div>
    </div>
  );
};

export default Header;
