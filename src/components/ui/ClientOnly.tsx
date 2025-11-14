"use client";

import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface ClientOnlyProps {
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * Component này đảm bảo rằng {children} chỉ được render ở phía client.
 * Nó dùng để bọc các component phụ thuộc nặng vào API trình duyệt
 * (như <Canvas> 3D) để tránh lỗi Hydration Mismatch.
 */
export default function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Ngay sau khi mount ở client, set state để render children
    setIsMounted(true);
  }, []);

  // Khi ở server hoặc chưa mount, render fallback (hoặc null)
  // Khi đã mount, render children
  return isMounted ? <>{children}</> : <>{fallback}</>;
}