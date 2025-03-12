import { useEffect, useState } from "react";
import { useCityName, useWorld } from "../../services/Zustand/World";
import { FetchData } from "../../services/Api/Api";
import eye from "../../Icons/images/eye.png";
import Temp from "../../Icons/images/temperature.svg";
import Humidity from "../../Icons/images/water.png";
import Wind from "../../Icons/images/windy.png";

const Context = () => {
  const World = useWorld((state) => state.world);
  const cityName = useCityName((state) => state.forSearch);

  const [currentDate, setCurrentDate] = useState<string>("");
  const [day, setDay] = useState<string>("");

  useEffect(() => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const day = days[today.getDay()];

    setDay(day);
    setCurrentDate(`${month}/${date}/${year}`);
  }, []);

  useEffect(() => {
    FetchData(cityName);
  }, [cityName]);

  const isDataLoaded = World && World.length > 0 && World[0];

  return (
    <div className="pl-[15px] pr-[15px] pt-[15px] mr-auto ml-auto max-w-[450px] w-full mt-[30px] h-[575px] bg-[rgba(0,0,0,0.19)] rounded-[48px] pb-[80px]">
      <div className="flex flex-col h-full w-full justify-between">
        <div className="flex items-center gap-[10px]">
          {isDataLoaded ? (
            <>
              <img
                className="w-[88px] h-[88px]"
                src={World[0].current.condition.icon}
                alt="Weather Icon"
              />
              <div>
                <div className="flex items-center gap-[8px]">
                  <h1 className="text-white text-[30px]">
                    {World[0].location.name}
                  </h1>
                  {World[0].location.name === "Sokhumi" && (
                    <div className="flex flex-col">
                      <h1 className="text-white">is Georgia</h1>
                    </div>
                  )}
                </div>

                <h1 className="text-white text-[13px]">
                  {day} {currentDate}
                </h1>
              </div>
            </>
          ) : (
            <h1>Loading...</h1>
          )}
        </div>

        <div className="w-full mb-[90px] flex flex-col items-center">
          {isDataLoaded ? (
            <>
              <div className="flex items-start">
                <h1 className="text-white text-[134px]">
                  {World[0].current.temp_c.toString().split(".")[0]}
                </h1>
                <div className="flex items-start mt-[30px]">
                  <h6 className="text-[15px] text-white">o</h6>
                  <h3 className="text-[25px] text-white">c</h3>
                </div>
              </div>
              <h1 className="text-white text-[24px] mt-[-20px]">
                {World[0].current.condition.text}
              </h1>
            </>
          ) : (
            <h1>Loading...</h1>
          )}
        </div>

        <div className="flex flex-col gap-[30px] pr-[10px] pl-[10px]">
          <div className="flex justify-between">
            <div className="flex gap-[9px] max-w-[150px]">
              <div className="flex gap-[7px]">
                <img
                  src={eye}
                  className="w-[24px] h-[24px] max-[480px]:h-[16px] max-[480px]:w-[16px]"
                  alt="eye"
                />
                <h3 className="text-white max-[480px]:text-[12px]">
                  Visibility
                </h3>
              </div>
              {isDataLoaded ? (
                <h3 className="text-white max-[480px]:text-[12px]">
                  {World[0].vis_km.toString().split(".")[0]} KM
                </h3>
              ) : (
                <h3>Loading...</h3>
              )}
            </div>
            <div className="h-[19px] w-[1px] bg-white"></div>
            <div className="flex gap-[9px] max- w-[150px]">
              <div className="flex gap-[7px]">
                <img
                  className="w-[24px] h-[24px] max-[480px]:h-[16px] max-[480px]:w-[16px]"
                  src={Temp}
                  alt="temperature"
                />
                <h3 className="text-white max-[480px]:text-[12px]">
                  Feels like
                </h3>
              </div>
              {isDataLoaded ? (
                <div className="flex items-start gap-[5px]">
                  <h3 className="text-white max-[480px]:text-[12px]">
                    {World[0].feelslike_c.toString().split(".")[0]}
                  </h3>
                  <div className="flex items-start">
                    <h6 className="text-[8px] text-white">o</h6>
                    <h3 className="text-[15px] text-white">c</h3>
                  </div>
                </div>
              ) : (
                <h3>Loading...</h3>
              )}
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex gap-[9px] min-w-[150px]">
              <div className="flex gap-[7px]">
                <img
                  className="w-[24px] h-[24px] max-[480px]:h-[16px] max-[480px]:w-[16px]"
                  src={Humidity}
                  alt="humidity"
                />
                <h3 className="text-white max-[480px]:text-[12px]">Humidity</h3>
              </div>
              {isDataLoaded ? (
                <h3 className="text-white max-[480px]:text-[12px]">
                  {World[0].humidity} %
                </h3>
              ) : (
                <h3>Loading...</h3>
              )}
            </div>
            <div className="h-[19px] w-[1px] bg-white"></div>
            <div className="flex gap-[9px] min-w-[150px]">
              <div className="flex gap-[7px]">
                <img
                  className="w-[24px] h-[24px] max-[480px]:h-[16px] max-[480px]:w-[16px]"
                  src={Wind}
                  alt="wind"
                />
                <h3 className="text-white max-[480px]:text-[12px]">Wind</h3>
              </div>
              {isDataLoaded ? (
                <h3 className="text-white max-[480px]:text-[12px]">
                  {World[0].wind_kph.toString().split(".")[0]} km/h
                </h3>
              ) : (
                <h3>Loading...</h3>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Context;
