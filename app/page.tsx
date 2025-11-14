"use client"; // Cần thiết vì chúng ta sẽ sử dụng hook `useScroll`

import { useScroll } from "framer-motion";
import Header from "../src/components/layout/Header";
import Footer from "../src/components/layout/Footer";
import Hero from "../src/components/sections/Hero";
import About from "../src/components/sections/About";
import Services from "../src/components/sections/Services";
import Portfolio from "../src/components/sections/Portfolio";
import Contact from "../src/components/sections/Contact";
import RotatingTorus from "../src/components/ui/RotatingTorus";

export default function Home() {
  // Tạo hook `useScroll` ở cấp cao nhất
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* Component 3D làm nền, truyền scrollYProgress vào */}
      <RotatingTorus scrollYProgress={scrollYProgress} />

      {/* Header đã có z-50 nên sẽ luôn ở trên cùng */}
      <Header />

      {/* CẬP NHẬT: Thêm `relative z-10` 
        Điều này tạo ra một stacking context mới cho <main>
        với z-index là 10, đảm bảo nó và tất cả các phần con (Hero, About, v.v.)
        được hiển thị TRÊN component RotatingTorus (có z-index: 0).
      */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>

      {/* CẬP NHẬT: Thêm `relative z-10` cho Footer
        Tương tự như <main>, điều này đảm bảo Footer cũng
        hiển thị trên nền 3D (hoặc che nó đi với `bg-black`
        nhưng vẫn đảm bảo thứ tự xếp chồng đúng).
      */}
      <Footer />
    </>
  );
}