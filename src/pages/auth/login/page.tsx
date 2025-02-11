
import LeftView from "./_components/left-view/page";
import RightView from "./_components/right-view/page";

function LoginPage() {
  return (
    <div
      style={{
        display: "flex",
       
        height:"100vh",

      }}
    >

      <LeftView/>
     
     <RightView/>
    </div>
  );
}

export default LoginPage;
