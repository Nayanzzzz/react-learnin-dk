import { useEffect } from "react";
import Counter from "./components/counter";
import { useCounterCntx } from "./cntx/counter-cntx";
// import LoginPage from "./pages/auth/login/page";
// import UserReducerLearn from "./hooks/learn/use-reducer";
import UserReducerPage from "./hooks/learn/user-reducer";
import LoginPage from "./pages/auth/login/page";
import MediaQuery from "./components/media-query";
// import UserCallBackPage from "./hooks/learn/use-callback";

export interface IAppProps {
  intialValue: number;
  t?: number;
}

function App() {

  return <MediaQuery/>
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
