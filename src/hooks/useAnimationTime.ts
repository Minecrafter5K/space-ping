import { useState, useEffect } from "react";

export default function useAnimationTime() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let animationFrameId: number;
    const start = performance.now();

    const update = () => {
      const now = performance.now();
      setTime((now - start) / 1000);
      animationFrameId = requestAnimationFrame(update);
    };

    animationFrameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return time;
}
