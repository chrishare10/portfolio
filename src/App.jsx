import { Canvas } from '@react-three/fiber'
import { BakeShadows, OrbitControls, Stage } from '@react-three/drei'
import Find from './Find'
import './App.css'
import Frontend from './components/Frontend'

function App() {


  return (
    <section className="bg-off-white dark:bg-transparent transition-all duration-500 relative">
    <div id="canvas-container" className="fixed w-full h-full -z-10">
      <Canvas shadows camera={{ position: [0, 0, 150], fov: 40 }}>
        <Stage intensity={0.6}>
          <Find position={[0, -100, 0]} />
        </Stage>
        <BakeShadows />
        <OrbitControls enableDamping={false} enablePan={false} enableZoom={false} autoRotate />
      </Canvas>
    </div>
    <Frontend />
    
    </section>
  )
}

export default App
