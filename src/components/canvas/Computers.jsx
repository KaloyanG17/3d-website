import React , { Suspense, useCallback, useEffect, useState} from 'react'

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

// Compressed from the original 16 MB glTF with gltf-transform (meshopt
// geometry, WebP textures): about 1.4 MB.
const MODEL = './desktop_pc/scene.glb';
// A still render of the same model, shown instantly while the 3D one loads.
const POSTER = './desktop_pc/poster.webp';

const Computers = ({ isMobile, onLoaded }) => {
  const computer = useGLTF(MODEL)

  // Runs once the model has loaded and rendered.
  useEffect(() => {
    onLoaded()
  }, [onLoaded])

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0,-3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const markLoaded = useCallback(() => setLoaded(true), [])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])
  return (
    <>
      {/* The poster matches the desktop camera; phones go straight to the model. */}
      {!isMobile && (
        <img
          src={POSTER}
          alt=''
          aria-hidden
          fetchpriority='high'
          // The camera sizes the scene by height, so the poster does too.
          className={`absolute top-0 left-1/2 -translate-x-1/2 h-full w-auto max-w-none pointer-events-none transition-opacity duration-700 ${loaded ? 'opacity-0' : 'opacity-100'}`}
        />
      )}
      <Canvas
        frameloop='demand'
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        className={`transition-opacity duration-700 ${loaded || isMobile ? 'opacity-100' : 'opacity-0'}`}
      >
        <Suspense fallback={null}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} onLoaded={markLoaded} />
        </Suspense>

        <Preload all />
      </Canvas>
    </>
  )
}

useGLTF.preload(MODEL)

export default ComputersCanvas
