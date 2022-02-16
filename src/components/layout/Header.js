import React from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div
      className="headerContainer"
      style={{
        backgroundColor: "#FA0523",
        color: "#05FADC",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        textShadow: "0px 0px 6px rgba(255,255,255,0.7)",
        width: "100vw",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    >
      <div className="headerLeft" style={{ width: "70vw" }}>
        <Link to="/">
          <h1 style={{ color: "#05FADC", textDecorationColor: "inherit" }}>
            {" "}
            ⚡EV RETNALS⚡
          </h1>
        </Link>
      </div>

      <div className="headerRight" style={{ width: "30vw" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Modal></Modal>
        </div>
      </div>
    </div>
  );
}

export default Header;
