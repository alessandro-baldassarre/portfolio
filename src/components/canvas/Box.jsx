import { Suspense, useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import CanvasLoader from "../Loader"

const Box = () => {
    const map = useTexture([
        'textures/javascript.png', // pos-x
        'textures/nodejs.png', // neg-x
        'textures/reactjs.png', // pos-y
        'textures/redux.png', // neg-y
        'textures/tailwind.png', // pos-z
        'textures/typescript.png', // neg-z
    ]);
    const meshRef = useRef();
    useFrame((state, delta) => {
        // adjust object position
        if (meshRef.current) {
            meshRef.current.rotation.x += delta / 2;
            meshRef.current.rotation.y += delta;
        }
    });

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[3, 3, 3]} />
            {map.map((texture, idx) => (
                <meshBasicMaterial
                    key={texture.id}
                    attach={`material-${idx}`}
                    map={texture}
                    side={THREE.FrontSide}
                />
            ))}
        </mesh>
    );
}

const BoxCanvas = () => {
    return (
        <Canvas
            camera={{ fov: 70, near: 0.01, far: 100, position: [0, 0, 6] }}
            style={{ height: '100%', width: "100%", backgroundColor: 'transparent' }}
        >
            <Suspense fallback={CanvasLoader}>
                <Box />
            </Suspense>
        </Canvas>
    );
}

export default BoxCanvas;
