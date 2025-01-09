// components/Floor.js
import React from "react";
import { useTexture } from "@react-three/drei";

function Floor({ position = [0, 0, 0], url}) {
  const texture = useTexture(url); // Make sure the texture exists in the public folder

  return (
    <mesh position={position} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <boxGeometry args={[31, 31]} /> {/* BoxGeometry gives the floor some thickness */}
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default Floor;
