import { useCityName } from "../../services/Zustand/World";

const ClickBtn = () => {
  const setValue = useCityName((state) => state.setForSearch);
  const clear = useCityName((state) => state.emptyValue);

  function Clicked() {
    setValue();
    clear();
  }

  return (
    <button
      onClick={Clicked}
      className="w-[100px] cursor-pointer hover:opacity-[0.7] h-[56px] border border-2-[white] rounded-[6px] text-white"
    >
      Search
    </button>
  );
};

export default ClickBtn;
