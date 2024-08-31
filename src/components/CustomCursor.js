import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const dotRef = useRef(null);
  const targetPosition = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      targetPosition.current = { x: event.clientX, y: event.clientY };
    };

    const updatePosition = () => {
      if (dotRef.current) {
        const rect = dotRef.current.getBoundingClientRect();
        const currentPosition = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        };

        // Interpolate position
        setPosition({
          x: currentPosition.x + (targetPosition.current.x - currentPosition.x) * 0.1,
          y: currentPosition.y + (targetPosition.current.y - currentPosition.y) * 0.1,
        });
      }

      requestAnimationFrame(updatePosition);
    };

    window.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-[#424242] dark:bg-[#dbd8db] lg:hidden"
      ref={dotRef}
      style={{
        position: "fixed",
        width: "20px", // Adjust size as needed
        height: "20px", // Adjust size as needed
        borderRadius: "50%",
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -60%)",
        pointerEvents: "none",
        zIndex: 9999,
        transition: "none", 
        opacity: "90%",
      }}
    />
  );
};

export default CustomCursor;
