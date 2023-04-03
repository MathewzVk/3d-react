// import { OrbitControls, ScrollControls } from "@react-three/drei";
// import React from "react";
// import { Office } from "./Office";

// const Experience = () => {
//   return (
//     <>
//       <ambientLight intensity={1} />
//       <OrbitControls enableZoom = {false} />
//       <ScrollControls pages={3} damping = {0.25}>
//       <Office />
//       </ScrollControls>
//     </>
//   );
// };

// export default Experience;
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Office } from "./Office";
import { Overlay } from "./Overlay";

export const Experience = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={3} damping={0.25}>
        <Overlay />
        <Office />
      </ScrollControls>
    </>
  );
};

