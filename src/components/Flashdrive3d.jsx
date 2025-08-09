import React, { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

function FlashDriveModel() {
  const { scene } = useGLTF("/flashdrive.glb");
  const [scale, setScale] = useState(2);

  useEffect(() => {
    function updateScale() {
      if (window.innerWidth < 640) {
        setScale(1.5); // มือถือ ขยายโมเดลใหญ่ขึ้น
      } else {
        setScale(2); // Desktop ขนาดปกติ
      }
    }
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return <primitive object={scene} scale={scale} />;
}

export default function FlashDrive3D() {
  return (
    <div className="w-full h-full" style={{ height: "80vh", maxWidth: 600 }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <FlashDriveModel />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
