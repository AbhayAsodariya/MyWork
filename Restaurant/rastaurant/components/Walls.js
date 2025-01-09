import React, { useState } from "react";
import { useTexture } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";

function Walls({ position = [0, 5, 0] }) {
  const [isOpen, setIsOpen] = useState(false);
  const wallTexture = useTexture("/textures/wallarnd2.jpg");
  const wallTextureout = useTexture("/textures/wall2.jpg");

  // Gate dimensions
  const gateWidth = 6;
  const gateHeight = 8;
  const gateDepth = 0.5;
  
  // Door dimensions
  const doorWidth = 5.8;
  const doorHeight = 7.8;
  const doorThickness = 0.2;

  // Animation for the door
  const { rotation } = useSpring({
    rotation: isOpen ? Math.PI / 2 : 0,
    config: { mass: 1, tension: 80, friction: 20 }
  });

  // Handler for door click
  const handleDoorClick = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  // Create an animated mesh component
  const AnimatedMesh = animated.mesh;

  return (
    <>
      {/* Back Wall */}
      <mesh position={[position[0], position[1], position[2] - 15]}>
        <boxGeometry args={[30, 10, 0.5]} />
        <meshStandardMaterial map={wallTexture} />
      </mesh>
      <mesh position={[position[0], position[1], position[2] - 15.5]}>
        <boxGeometry args={[31, 10, 0.5]} />
        <meshStandardMaterial map={wallTextureout} />
      </mesh>

      {/* Side Walls */}
      <mesh position={[position[0] - 15, position[1], position[2]]}>
        <boxGeometry args={[0.5, 10, 30]} />
        <meshStandardMaterial map={wallTexture} />
      </mesh>
      <mesh position={[position[0] - 15.5, position[1], position[2]]}>
        <boxGeometry args={[0.5, 10, 31]} />
        <meshStandardMaterial map={wallTextureout} />
      </mesh>

      <mesh position={[position[0] + 15, position[1], position[2]]}>
        <boxGeometry args={[0.5, 10, 30]} />
        <meshStandardMaterial map={wallTexture} />
      </mesh>
      <mesh position={[position[0] + 15.5, position[1], position[2]]}>
        <boxGeometry args={[0.5, 10, 31]} />
        <meshStandardMaterial map={wallTextureout} />
      </mesh>

      {/* Front Wall Sections */}
      <mesh
        position={[
          position[0] - gateWidth / 4.5 - 8,
          position[1],
          position[2] + 15,
        ]}
      >
        <boxGeometry args={[12.5, 10, 0.5]} />
        <meshStandardMaterial map={wallTexture} />
      </mesh>

      <mesh
        position={[
          position[0] + gateWidth / 4.5 + 8,
          position[1],
          position[2] + 15,
        ]}
      >
        <boxGeometry args={[12.5, 10, 0.5]} />
        <meshStandardMaterial map={wallTexture} />
      </mesh>

      {/* Gate Frame */}
      {/* Left Post */}
      <mesh
        position={[position[0] - gateWidth / 2, position[1], position[2] + 15]}
      >
        <boxGeometry args={[gateDepth, gateHeight, gateDepth]} />
        <meshStandardMaterial map={wallTexture} />
      </mesh>

      {/* Right Post */}
      <mesh
        position={[position[0] + gateWidth / 2, position[1], position[2] + 15]}
      >
        <boxGeometry args={[gateDepth, gateHeight, gateDepth]} />
        <meshStandardMaterial map={wallTexture} />
      </mesh>

      {/* Top Beam */}
      <mesh
        position={[position[0], position[1] + gateHeight / 2, position[2] + 15]}
      >
        <boxGeometry args={[gateWidth, gateDepth, gateDepth]} />
        <meshStandardMaterial map={wallTexture} />
      </mesh>

      {/* Bottom Beam */}
      <mesh
        position={[position[0], position[1] - gateHeight / 2, position[2] + 15]}
      >
        <boxGeometry args={[gateWidth, gateDepth, gateDepth]} />
        <meshStandardMaterial map={wallTexture} />
      </mesh>

      {/* Animated Door */}
      <AnimatedMesh
        onClick={handleDoorClick}
        position={[position[0] - doorWidth / 2, position[1], position[2] + 15]}
        rotation-y={rotation}
        scale={[1, 1, 1]}
      >
        <group position={[doorWidth / 2, 0, 0]}>
          {/* Main Door Panel */}
          <mesh>
            <boxGeometry args={[doorWidth, doorHeight, doorThickness]} />
            <meshStandardMaterial color="#8B4513" />
          </mesh>

          {/* Door Handle */}
          <mesh position={[doorWidth / 2 - 0.5, 0, doorThickness / 2]}>
            <cylinderGeometry args={[0.1, 0.1, 0.3, 16]} rotation={[Math.PI / 2, 0, 0]} />
            <meshStandardMaterial color="gold" />
          </mesh>

          {/* Decorative Door Panels */}
          {[-1, 1].map((yOffset, index) => (
            <mesh key={index} position={[0, yOffset * 2, doorThickness / 2 + 0.01]}>
              <boxGeometry args={[doorWidth - 1, 2, 0.05]} />
              <meshStandardMaterial color="#6B3E26" />
            </mesh>
          ))}
        </group>
      </AnimatedMesh>
    </>
  );
}

export default Walls;