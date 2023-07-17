import { createContext, useState } from "react";
import { data } from "../Data/data";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [Data, setData] = useState(data);
  console.log(Data, "hiii");
  return (
    <DataContext.Provider value={{ Data: Data }}>
      {children}
    </DataContext.Provider>
  );
};
