import { createContext, useContext, useState } from "react";

interface TConterCntxProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const CounterCntx = createContext<TConterCntxProps | undefined>(undefined);

export const CounterCntxProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [count, setCount] = useState<number>(0);

  return (
    <CounterCntx.Provider value={{ count, setCount }}>
      {children}
    </CounterCntx.Provider>
  );
};

export const useCounterCntx = () => {
  const cntx = useContext(CounterCntx);

  if (!cntx) {
    throw new Error("CounterCntx is undefined");
  }

  return cntx;
};
