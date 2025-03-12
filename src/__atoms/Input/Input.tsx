import { Loop } from "../../Icons/loop";
import { useCityName } from "../../services/Zustand/World";

function Input() {
  const inputValue = useCityName((state) => state.cityName);
  const setValue = useCityName((state) => state.setValue);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setValue(inputValue);
        }}
        className={`shadow-lg max-w-[480px] w-full h-[56px] bg-white"
            pl-[32px] pr-[32px] flex items-center gap-[24px] border border-red-100 rounded-[6px] `}
      >
        <Loop />
        <input
          value={inputValue}
          onChange={(e) => setValue(e.currentTarget.value)}
          placeholder="Search for a city…"
          className={` focus:outline-none w-full text-[14px] font-normal text-white`}
          type="text"
        />
      </form>
    </>
  );
}
export default Input;
