import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Floor from "./Floor";
import TableWithChairs from "./TableWithChairs";
import Lighting from "./Lighting";
import Walls from "./Walls";

export default function RestaurantScene() {
  return (
    <Canvas style={{ height: "100vh" }} shadows>
      <Lighting />

      {/* Floors */}
      <Floor position={[0, 0, 0]} url={"/textures/clothtbl.jpg"} />
      <Floor position={[0, 10, 0]} url={"/textures/clothtbl.jpg"} />
      <Floor position={[0, 20, 0]} url={"/textures/clothtbl.jpg"} />
      <Floor position={[0, 21, 0]} url={"/textures/wall2.jpg"} />

      {/* First Floor Tables */}
      <TableWithChairs position={[0, 0.5, 0]} tableId="1-1" />
      <TableWithChairs position={[-6, 0.5, -6]} tableId="1-2" />
      <TableWithChairs position={[6, 0.5, -6]} tableId="1-3" />
      <TableWithChairs position={[-6, 0.5, 6]} tableId="1-4" />
      <TableWithChairs position={[6, 0.5, 6]} tableId="1-5" />
      <TableWithChairs position={[11, 0.5, 12]} tableId="1-6" />
      <TableWithChairs position={[-11, 0.5, 12]} tableId="1-7" />
      <TableWithChairs position={[11, 0.5, 0]} tableId="1-8" />
      <TableWithChairs position={[-11, 0.5, 0]} tableId="1-9" />
      <TableWithChairs position={[11, 0.5, -12]} tableId="1-10" />
      <TableWithChairs position={[-11, 0.5, -12]} tableId="1-11" />
      <TableWithChairs position={[0, 0.5, -12]} tableId="1-12" />

      {/* Second Floor Tables */}
      <TableWithChairs position={[0, 10.5, 0]} tableId="2-1" />
      <TableWithChairs position={[-6, 10.5, -6]} tableId="2-2" />
      <TableWithChairs position={[6, 10.5, -6]} tableId="2-3" />
      <TableWithChairs position={[-6, 10.5, 6]} tableId="2-4" />
      <TableWithChairs position={[6, 10.5, 6]} tableId="2-5" />
      <TableWithChairs position={[11, 10.5, 12]} tableId="2-6" />
      <TableWithChairs position={[-11, 10.5, 12]} tableId="2-7" />
      <TableWithChairs position={[11, 10.5, 0]} tableId="2-8" />
      <TableWithChairs position={[-11, 10.5, 0]} tableId="2-9" />
      <TableWithChairs position={[11, 10.5, -12]} tableId="2-10" />
      <TableWithChairs position={[-11, 10.5, -12]} tableId="2-11" />
      <TableWithChairs position={[0, 10.5, -12]} tableId="2-12" />

      {/* Walls */}
      <Walls position={[0, 5, 0]} />
      <Walls position={[0, 15, 0]} />

      <OrbitControls
        enableZoom={true}
        enableRotate={true}
        enablePan={true}
        maxPolarAngle={Math.PI / 2.2}
      />
    </Canvas>
  );
}
