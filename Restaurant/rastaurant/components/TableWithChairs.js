import React, { useState } from "react";
import { Html, useTexture, Text } from "@react-three/drei";

function TableWithChairs({ position = [0, 0, 0], tableId }) {
  const [isBooked, setIsBooked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const clothTexture = useTexture("/textures/clothtbl.jpg");

  // Table properties
  const tableRadius = 1.5;
  const legOffset = tableRadius - 0.5;
  const legPositions = [
    [-legOffset, 0, -legOffset],
    [legOffset, 0, -legOffset],
    [-legOffset, 0, legOffset],
    [legOffset, 0, legOffset],
  ];
  const outerClothRadius = tableRadius + 0.3;
  const sideClothHeight = 1.2;

  // Handle table click
  const handleTableClick = (e) => {
    e.stopPropagation();
    setShowPopup(true);
  };

  // Handle booking
  const handleBook = () => {
    setIsBooked(true);
    setShowPopup(false);
  };

  // Handle unbooking
  const handleUnbook = () => {
    setIsBooked(false);
    setShowPopup(false);
  };

  return (
    <group position={position}>
      {/* Clickable Table Surface */}
      <mesh position={[0, 1.2, 0]} onClick={handleTableClick}>
        <cylinderGeometry args={[tableRadius, tableRadius, 0.1, 32]} />
        <meshStandardMaterial color="#8B4513" roughness={0.6} />
      </mesh>

      {/* Table Number */}
      <group position={[0, 1.32, 0]}>
        <Text
          position={[0, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          fontSize={0.4}
          color="white"
          anchorX="center"
          anchorY="middle"
          material-toneMapped={false}
          renderOrder={1}
        >
          {tableId}
        </Text>
        {/* Background circle for better visibility */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
          <circleGeometry args={[0.4, 32]} />
          <meshStandardMaterial color="#4a3222" />
        </mesh>
      </group>

      {/* Side Cloth */}
      <mesh position={[0, 0.7, 0]}>
        <cylinderGeometry
          args={[outerClothRadius, outerClothRadius, sideClothHeight, 32]}
        />
        <meshStandardMaterial map={clothTexture} roughness={0.8} />
      </mesh>

      {/* Table Legs */}
      {legPositions.map((pos, index) => (
        <group key={index} position={pos}>
          <mesh position={[0, 0.6, 0]}>
            <cylinderGeometry args={[0.08, 0.08, 1, 16]} />
            <meshStandardMaterial color="#8B4513" />
          </mesh>
        </group>
      ))}

      {/* Chairs with Sitting Persons if booked */}
      {[
        0,
        Math.PI / 3,
        (2 * Math.PI) / 3,
        Math.PI,
        (4 * Math.PI) / 3,
        (5 * Math.PI) / 3,
      ].map((angle, index) => (
        <group
          key={index}
          position={[Math.cos(angle) * 2.2, 0.5, Math.sin(angle) * 2.2]}
          rotation={[0, angle, 0]}
        >
          {/* Chair */}
          <mesh>
            <boxGeometry args={[0.5, 1, 0.5]} />
            <meshStandardMaterial color={isBooked ? "#8B0000" : "#2F4F4F"} />
          </mesh>

          {/* Person sitting (only shown when booked) */}
          {isBooked && (
            <>
              {/* Body */}
              <mesh position={[0, 0.7, 0]}>
                <capsuleGeometry args={[0.2, 0.4, 8, 8]} />
                <meshStandardMaterial color="#FF0000" />
              </mesh>
              {/* Head */}
              <mesh position={[0, 1.2, 0]}>
                <sphereGeometry args={[0.15, 16, 16]} />
                <meshStandardMaterial color="#DEB887" />
              </mesh>
            </>
          )}
        </group>
      ))}

      {/* Popup Dialog */}
      {showPopup && (
        <Html position={[0, 2, 0]}>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-lg text-black font-bold mb-2">
              Table {tableId}
            </h3>
            <p className="mb-4 text-black">
              {isBooked ? "This table is booked" : "This table is available"}
            </p>
            <div className="flex gap-2">
              {!isBooked && (
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded"
                  onClick={handleBook}
                >
                  Book Table
                </button>
              )}
              {isBooked && (
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={handleUnbook}
                >
                  Unbook Table
                </button>
              )}
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => setShowPopup(false)}
              >
                Close
              </button>
            </div>
          </div>
        </Html>
      )}
    </group>
  );
}

export default TableWithChairs;
