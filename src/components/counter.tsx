import { useCounterCntx } from "../cntx/counter-cntx";

interface ICounterProps {
  title: string;
  type: number;
  handleConter: (type: number,numOfOpr:number) => void;
  numOfOpr:number;
}

function Counter({ title, type, handleConter,numOfOpr }: ICounterProps) {
  
  const { count } = useCounterCntx();

  return (
    <div>
      <button onClick={()=>handleConter(type,numOfOpr)}>Click me to - {title}</button>

      <p>My Count value is - {count}</p>
      <Counnnn/>
    </div>
  );
}

export default Counter;


function Counnnn(){
  const { count } = useCounterCntx();
  return <p>I am child of child component -{count}</p>
}