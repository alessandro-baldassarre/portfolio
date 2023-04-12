import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, Float, Html, OrbitControls } from '@react-three/drei'
import CanvasLoader from "../Loader"
import About from '../About'

export default function GeometriesCanvas() {
    return (
        <Canvas camera={{ position: [0, 5, 25] }}>
            <Suspense fallback={<CanvasLoader />}>
                <hemisphereLight groundColor="black" />
                <Float floatIntensity={10} rotationIntensity={4}>
                    <Html castShadow receiveShadow occlude="blending" transform>
                        <div className="border border-orange-500 h-[1000px] lg:h-[800px] overflow-auto" onPointerDown={(e) => e.stopPropagation()}>
                            <About />
                        </div>
                    </Html>
                </Float>
                <ContactShadows position={[0, -9, 0]} opacity={0.7} scale={40} blur={1} />
                <OrbitControls enableZoom={false} />
            </Suspense>
        </Canvas>
    )
}
