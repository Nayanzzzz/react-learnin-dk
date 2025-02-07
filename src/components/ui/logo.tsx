import React from "react";
import { Logo } from "../../lib/images";
import { System_Value } from "../../lib/system";

function SiteLogo() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        columnGap: "10px",
      }}
    >
      <img
        src={Logo}
        style={{
          height: "24px",
          width: "24px",
        }}
      />

      <p>{System_Value.site_name}</p>
    </div>
  );
}

export default SiteLogo;
