import React from "react";

export default function Comingsoon() {
  const gradientTextStyle = {
    position: "absolute",
    width: "254px",
    height: "44px",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    fontFamily: "Montserrat, sans-serif",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "36px",
    lineHeight: "44px",
    background: "linear-gradient(90deg, #010688 0%, #990003 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textFillColor: "transparent",
  };

  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
      <h2 style={gradientTextStyle}>Coming Soon</h2>
    </div>
  );
}
