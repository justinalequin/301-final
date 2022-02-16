import React from "react";
import Header from "./Header";

const Layout = (props) => {
  const { children } = props;

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Header></Header>

        <div
          className="layoutContent"
          style={{
            backgroundColor: "#05FADC",
            width: "95vw",

            marginTop: "25px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
