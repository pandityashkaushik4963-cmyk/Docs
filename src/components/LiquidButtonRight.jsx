import React from "react";

const LiquidButtonRight = (props) => {
  return (
    // 'group' क्लास पूरे बटन को एक साथ कंट्रोल करेगी
    <button className="group relative px-30 py-4 active:scale-95 rounded-2xl border-2 border-white bg-transparent font-medium text-lg overflow-hidden cursor-pointer">
      
      {/* 1. लिक्विड बैकग्राउंड लेयर (Right Side से आने वाला) */}
      {/* translate-x-full इसे शुरुआत में बटन के बिल्कुल दाईं (right) तरफ छुपा कर रखेगा */}
      {/* group-hover:translate-x-0 होते ही यह दाईं तरफ से सरकते हुए पूरे बटन को भर देगा */}
      <div className="absolute top-0 left-0 w-full h-full bg-cyan-400 translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>

      {/* 2. बटन का टेक्स्ट */}
      {/* होवर होते ही टेक्स्ट का कलर वाइट से ब्लैक (या जो भी कलर जमे) हो जाएगा */}
      <span className="relative z-10 block text-white group-hover:text-black transition-colors duration-200">
        {props.text}
      </span>

    </button>
  );
};

export default LiquidButtonRight;
