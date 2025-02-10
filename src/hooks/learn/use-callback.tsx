import React, { useCallback, useState, memo, useMemo } from "react";

function UserCallBackPage() {
  const [count, setCount] = useState(0);

  const getMyName = useCallback(() => {
    return "Lakhan";
  }, []);

  const getRoll = useMemo(() => {
    let v = 0;
    for (let i = 0; i < 100000; i++) {
      v = i;
    }
    return v;
  }, []);

  return (
    <div>
      <p>{count}</p>
      
      <button onClick={() => setCount((p) => p + 1)}>Click me</button>
      <MyNameCom getRoll={getRoll}   getMyName={getMyName} />
    </div>
  );
}

export default UserCallBackPage;

const MyNameCom = memo(({ getMyName,getRoll }: { getMyName: () => string ,getRoll:number}) => {
  console.log("I am called");
  return <p>{getMyName()}- {getRoll}</p>;
});
