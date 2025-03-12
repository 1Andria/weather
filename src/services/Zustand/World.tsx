import { create } from "zustand";

type WorldType = {
  world: CountryType[];
  setWorld: (data: CountryType[]) => void;
};
type CityType = {
  cityName: string;
  forSearch: string;
};

type Action = {
  setValue: (value: CityType["cityName"]) => void;
  emptyValue: () => void;
  setForSearch: () => void;
};
export type CountryType = {
  location: {
    name: string;
    country: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
  wind_kph: number;
  humidity: number;
  feelslike_c: number;
  vis_km: number;
};

export const useWorld = create<WorldType>((set) => ({
  world: [],
  setWorld: (data) => set({ world: data }),
}));

export const useCityName = create<CityType & Action>((set) => ({
  cityName: "",
  setValue: (value) => set(() => ({ cityName: value })),
  emptyValue: () => set(() => ({ cityName: "" })),
  forSearch: "Tbilisi",
  setForSearch: () => set((state) => ({ forSearch: state.cityName })),
}));
