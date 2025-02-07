import React from "react";
import { PlaceholderLoginBg } from "../../../../../lib/images";

function RightView() {
  return (
    <div
      style={{
        flex: 1,
        height: "100%",
        backgroundColor: "#fcfcfc",
      }}
    >
      <img
        src={PlaceholderLoginBg}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
}

export default RightView;
