import React from "react";
import SiteLogo from "../../../../../components/ui/logo";

function LeftView() {
  return (
    <div
      style={{
        flex: 1,
        height: "100%",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <SiteLogo />
      <LoginView />
      <p>
        Have an account?{" "}
        <button
          style={{
            color: "blue",
            fontWeight: "bold",
            border: "none",
            backgroundColor: "transparent",
            outline: "none",
            cursor: "pointer",
          }}
        >
          Sing In
        </button>{" "}
      </p>
    </div>
  );
}

export default LeftView;

function LoginView() {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "start",
          flexDirection: "column",
        }}
      >
        <p
          style={{
            marginBottom: "10px",
          }}
        >
          Start Your Journey
        </p>
        <p
          style={{
            marginBottom: "20px",
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          Signup To Devkrest
        </p>

        <div
        style={{
            display:"flex",
            flexDirection:"column",
            gap:"10px",
            width:"100%"
        }}
        >
          <input 
          style={{
            paddingBlock:"10px",
            paddingInline:"5px",
            borderRadius:"5px",
            borderColor:"blue"
          }}
          placeholder="Enter your email id" />
          <input placeholder="Enter your password" />
          <button
           style={{
            paddingBlock:"10px",
            paddingInline:"5px",
            borderRadius:"5px",
            borderColor:"blue",
            backgroundColor:"blue",
            color:"white"
          }}
          >Sign Up</button>
        </div>
      </div>
    </div>
  );
}
