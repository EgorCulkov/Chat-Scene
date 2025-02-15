import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
import { Instances, useGLTF, Bvh } from '@react-three/drei'
import { useLoader } from '@react-three/fiber';
import { useControls } from 'leva'

import { data } from './store'

export default function Pot() {
    const { range } = useControls({ range: { value: 100, min: 0, max: 300, step: 10 } })

    return (
        <Bvh firstHitOnly>
          <Teapots data={data} range={range} />
        </Bvh>
    )
  }
  
function Teapots({ data, range }) {
    const { nodes, materials } = useGLTF('/src/teapot.glb')
    return (
        <Instances range={range} material={materials.phong1SG} geometry={nodes.Teapot.geometry}>
            {data.map((props, i) => (
                <Teapot />
            ))}
        </Instances>
    )
}
function Teapot({ random, color = new THREE.Color(), ...props }) {
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