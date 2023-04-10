import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import React, { Suspense } from 'react'
import CanvasLoader from "../Loader"

const Computers = () => {
    const computer = useGLTF("./computer_desk_area/scene.gltf")
    const { viewport } = useThree()
    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor="black" />
            <pointLight intensity={1} />
            <spotLight position={[-20, 120, 120]} angle={0.12} penumbra={1} intensity={1.7} castShadow shadow-mapSize={1024} />
            {/* <primitive object={computer.scene} scale={0.75} position={[0, -3.25, -1.5]} rotation={[-0.01, -0.2, -0.1]} /> */}
            <primitive object={computer.scene} scale={(viewport.width < 15) ? 2.2 : (viewport.width / 5.5)} position={[-6, -2.6, -0.9]} rotation={[-0.00, 2, -0.0]} />
        </mesh>
    )
}

const ComputerCanvas = () => {
    return (
        <Canvas frameloop="demand" shadows camera={{ position: [20, 5, 6], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
                <Computers />
            </Suspense>

            <Preload all />

        </Canvas>
    )
}

export default ComputerCanvas
