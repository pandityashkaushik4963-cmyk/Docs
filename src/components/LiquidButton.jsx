

const LiquidButton = (props) => {
  return (
    // 'group' क्लास यहाँ सबसे ज़रूरी है, यही अंदर के बैकग्राउंड को कंट्रोल करेगी
    <button className={`group relative px-15 py-4 hover:scale-105 active:scale-95 rounded-2xl border-2 border-white bg-transparent font-semibold text-lg overflow-hidden cursor-pointer`}>
      
      {/* 1. लिक्विड बैकग्राउंड लेयर */}
      {/* शुरुआत में यह left-0 और -translate-x-full (100% बाएं) छुपा रहेगा */}
      {/* जैसे ही बटन पर होver होगा (group-hover), यह वापस अपनी जगह (translate-x-0) पर आ जाएगा */}
      <div className="absolute top-0 left-0 w-full h-full bg-yellow-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>

      {/* 2. बटन का टेक्स्ट */}
      {/* शुरुआत में टेक्स्ट सफ़ेद (text-white) रहेगा, और होवर होते ही काला (group-hover:text-black) हो जाएगा */}
      <span className="relative z-10 block text-white group-hover:text-black transition-colors duration-200">
        {props.text}
      </span>

    </button>
  );
};

export default LiquidButton;
