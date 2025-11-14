"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Torus } from "@react-three/drei";
import type { Mesh } from "three";
import type { MotionValue } from "framer-motion";

/**
 * Component nội bộ SceneContent
 * - Chứa logic animation chính
 * - Sử dụng hook `useFrame` của R3F (React Three Fiber) để chạy code trên mỗi khung hình
 */
function SceneContent({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const meshRef = useRef<Mesh>(null!);

  // useFrame chạy 60 lần/giây
  useFrame((state, delta) => {
    if (meshRef.current) {
      // 1. Lấy giá trị tiến trình cuộn (từ 0 đến 1)
      const scrollValue = scrollYProgress.get();
      
      // 2. Quay vật thể dựa trên tiến trình cuộn
      // Nhân với Math.PI để tạo ra vòng quay đầy đủ
      meshRef.current.rotation.y = scrollValue * Math.PI * 4;
      meshRef.current.rotation.x = scrollValue * Math.PI * 2;
      
      // 3. Thêm một chút chuyển động quay tự nhiên liên tục
      meshRef.current.rotation.z += delta * 0.1;
    }
  });

  return (
    <>
      {/* Thêm ánh sáng cơ bản */}
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      
      {/* Vật thể 3D: Torus (hình xuyến) 
        - args: [bán kính, độ dày ống, phân đoạn xuyên tâm, phân đoạn ống]
      */}
      <Torus ref={meshRef} args={[1.5, 0.5, 32, 100]} position={[0, 0, 0]}>
        {/* Vật liệu
          - meshStandardMaterial: phản ứng với ánh sáng
          - wireframe: true => Chỉ hiển thị dạng khung lưới
        */}
        <meshStandardMaterial color="#555" wireframe />
      </Torus>
    </>
  );
}

/**
 * Component RotatingTorus
 * - Component cha chứa Canvas 3D
 * - Được đặt ở vị trí 'fixed' để làm nền
 */
export default function RotatingTorus({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1, // Negative để nằm giữa background và nội dung HTML
      pointerEvents: 'none' // Cho phép click "xuyên qua" canvas
    }}>
      {/* Canvas: Nơi render cảnh 3D
        - camera: { position: [x, y, z], fov: góc nhìn }
      */}
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <SceneContent scrollYProgress={scrollYProgress} />
      </Canvas>
    </div>
  );
}
