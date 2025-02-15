import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Bvh, Instances, Instance, OrbitControls, Environment, useGLTF } from '@react-three/drei'
import './style.css'
export default function Teapots() {

    return (
    <>
        <Bvh firstHitOnly>

        <Pots/>
    </Bvh></>
    )
}
function Pots({ data, range }) {
    const { nodes, materials } = useGLTF('/src/teapot.glb')
    return (
      <Instances range={range} material={materials.phong1SG} geometry={nodes.Pot.geometry}>
        {data.map((props, i) => (
          <Pot key={i} {...props} />
        ))}
      </Instances>
    )
  }

function Pot({ random, color = new THREE.Color(), ...props }) {
   const ref = useRef()
   const [hovered, setHover] = useState(false)
   useFrame((state) => {
     const t = state.clock.getElapsedTime() + random * 10000
     ref.current.rotation.set(Math.cos(t / 4) / 2, Math.sin(t / 4) / 2, Math.cos(t / 1.5) / 2)
     ref.current.position.y = Math.sin(t / 1.5) / 2
     ref.current.scale.x = ref.current.scale.y = ref.current.scale.z = THREE.MathUtils.lerp(ref.current.scale.z, hovered ? 1.4 : 1, 0.1)
     ref.current.color.lerp(color.set(hovered ? 'red' : 'white'), hovered ? 1 : 0.1)
   })
   return (
     <group {...props}>
       <Instance ref={ref} onPointerOver={(e) => (e.stopPropagation(), setHover(true))} onPointerOut={(e) => setHover(false)} />
      </group>
         )
  }
  