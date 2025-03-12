import Logo from "../../Icons-Colors/logo_icon.png";
const Header = () => {
  function Refresh() {
    window.location.reload();
  }

  return (
    <div className="w-full h-[92px] bg-[rgba(0,0,0,0.19)] flex items-center justify-between pr-[76px] pl-[76px] max-[650px]:pl-[20px] max-[650px]:pr-[20px] rounded-b-3xl">
      <div
        onClick={Refresh}
        className="cursor-pointer max-[650px]:gap-[10px] flex gap-[23px] items-center"
      >
        <img
          className="max-[650px]:h-[40px] max-[650px]:w-[50px]"
          src={Logo}
          alt="logo"
        />
        <h1 className="text-white text-[24px] max-[650px]:text-[14px] ">
          Weather by Melua
        </h1>
      </div>
      <div className="flex gap-[23px] justify-center">
        <h1 className="text-white text-[24px] max-[650px]:text-[14px] ">
          Github
        </h1>
        <h1 className="text-white text-[24px] max-[650px]:text-[14px]">
          About
        </h1>
      </div>
    </div>
  );
};

export default Header;
