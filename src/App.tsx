import { useEffect } from "react";
import Counter from "./components/counter";
import { useCounterCntx } from "./cntx/counter-cntx";
import LoginPage from "./pages/auth/login/page";

export interface IAppProps {
  intialValue: number;
  t?: number;
}

function App() {

  return <LoginPage/>
  const { count, setCount } = useCounterCntx();

  const handleConter = (type: number, numOfOpr: number) => {
    setCount((p) => (type == 1 ? p + numOfOpr : p - numOfOpr));
  };

  useEffect(() => {
    console.log("Hi");
  }, [count]);

  return (
    <div>
      <p>My first react project</p>
      <Counter
        title="Incremeant"
        type={1}
        handleConter={handleConter}
        numOfOpr={2}
      />
      <Counter
        numOfOpr={3}
        title="Decrement"
        type={2}
        handleConter={handleConter}
      />

      <div style={{ height: "2rem" }} />

      <p>Count Value - {count}</p>
    </div>
  );
}

export default App;
