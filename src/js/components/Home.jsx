import React, { useState } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("red");
  const [colors, setColors] = useState(["red", "yellow", "green"]);

  const handleClick = (selectedColor) => setColor(selectedColor);

  const toggleColor = () => {
    const currentIndex = colors.indexOf(color);
    setColor(colors[(currentIndex + 1) % colors.length]);
  };

  const addPurple = () => {
    if (!colors.includes("purple")) {
      setColors([...colors, "purple"]);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <TrafficLightBox colors={colors} color={color} handleClick={handleClick} />
      <div>
        <button onClick={toggleColor} style={{ margin: "10px" }}>
          Cambiar Color
        </button>
        <button onClick={addPurple}>Añadir Púrpura</button>
      </div>
    </div>
  );
};

const TrafficLightBox = ({ colors, color, handleClick }) => (
  <div
    style={{
      backgroundColor: "black",
      width: "80px",
      padding: "10px",
      borderRadius: "10px",
      display: "inline-block",
    }}
  >
    {colors.map((c) => (
      <TrafficLightCircle key={c} color={c} isActive={color === c} handleClick={handleClick} />
    ))}
  </div>
);

const TrafficLightCircle = ({ color, isActive, handleClick }) => (
  <div
    onClick={() => handleClick(color)}
    style={{
      width: "60px",
      height: "60px",
      margin: "10px auto",
      borderRadius: "50%",
      backgroundColor: color,
      opacity: isActive ? 1 : 0.3,
      cursor: "pointer",
    }}
  ></div>
);

export default TrafficLight;
