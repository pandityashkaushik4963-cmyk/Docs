import  { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // माउस की पोजीशन ट्रैक करना
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // जब माउस क्लिक होने वाली चीज़ों पर जाए (Hover logic)
    const handleMouseOver = (e) => {
      if (
        e.target.tagName === "A" ||
        e.target.tagName === "BUTTON" ||
        e.target.tagName === "TEXTAREA" ||
        e.target.classList.contains("cursor-pointer")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div className={isHovered ? "cursor-hover" : ""}>
      {/* बीच का चमकीला डॉट */}
      <div
        className="custom-cursor-dot"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      {/* पीछे चलने वाला ग्लोइंग छल्ला */}
      <div
        className="custom-cursor-ring"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </div>
  );
};

export default CustomCursor;
