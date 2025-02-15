import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
import { Html, PresentationControls, useGLTF } from "@react-three/drei"
import { Environment } from "@react-three/drei"
import CustomIframe from "./CustomIframe.jsx";
import MyComponent from "./MyComponent.jsx";
import { useLoader } from '@react-three/fiber';

import './style.css'
export default function Phone() {
    const gltf = useLoader(GLTFLoader, './src/DS.glb')
    return (
    <>
        <Environment preset='city' backgroundBlurriness={1}/>
        <PresentationControls polar={[-0.1, 1.1]} azimuth={[-0.8, 0.8]}>
            <primitive object={gltf.scene}
            position={[0, 0, 0]}
            />
            <Html
            transform
            rotation-x={-1.05}
            position={[0, 0.293, -0.43 ]}
            
            distanceFactor={1}
            
            >
                <CustomIframe>
                    <MyComponent/>
                </CustomIframe>
            </Html>
        </PresentationControls>
        
    </>
    );
}