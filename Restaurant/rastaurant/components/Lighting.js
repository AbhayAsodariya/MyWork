// components/Lighting.js
import React from "react";

function Lighting() {
  return (
    <>
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} intensity={1} castShadow />
      <pointLight position={[-10, 10, -10]} intensity={0.8} castShadow />
    </>
  );
}

export default Lighting;
