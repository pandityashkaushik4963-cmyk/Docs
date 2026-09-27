import React, { useState } from "react";

const SimpleToggle = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <label className="relative inline-flex items-center cursor-pointer select-none">
      <input
        type="checkbox"
        checked={isOn}
        onChange={() => setIsOn(!isOn)}
        className="sr-only peer"
      />
      {/* बैकग्राउंड ट्रैक */}
      <div className="w-12 h-6 bg-zinc-600 rounded-full transition-colors duration-300 peer-checked:bg-green-500"></div>
      {/* अंदर का गोल बटन */}
      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-6"></div>
    </label>
  );
};

export default SimpleToggle;
