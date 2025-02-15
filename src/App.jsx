import { MathUtils } from 'three'
import { useRef } from 'react'
import { Canvas ,useFrame } from "@react-three/fiber"
import './style.css'
import Phone from "./Phone"

import {ContactShadows, Stars, Instances, Instance } from '@react-three/drei'

const particles = Array.from({ length: 150 }, () => ({
  factor: MathUtils.randInt(20, 100),
  speed: MathUtils.randFloat(0.01, 0.75),
  xFactor: MathUtils.randFloatSpread(40),
  yFactor: MathUtils.randFloatSpread(10),
  zFactor: MathUtils.randFloatSpread(10)
}))


const App = () => {
  return (    
    <Canvas camera={{
      position: [0, 0, 8],
      fov: 30,
      near: 0.1,
      far: 2000,
    }}>
      <Stars radius={100} depth={20} count={6000} factor={4} saturation={0} fade speed={1} />
        <Phone />
        <ContactShadows position={[0, -1.5, 0]} scale={20} blur={1} far={1.5} />
    </Canvas>
  );
};

export default App

