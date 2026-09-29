import Foreground from '../components/Foreground'
import Background from '../components/Background'
import Navbar from '../components/Navbar'

const YourTaskPage = () => {
  return (
    // w-full min-h-dvh और bg-[#060b13] की मदद से नेवबार के ऊपर और पीछे का खराब स्लेटी रंग पूरी तरह गायब हो जाएगा
    // RESPONSIVE: min-h-dvh follows the visible height on mobile browsers
    <div className='w-full min-h-dvh bg-[#0B0F19] flex flex-col relative antialiased select-none'>
        
        {/* आपका ग्लासमोर्फिक नेवबार सबसे ऊपर रहेगा */}
        <Navbar />
        
        {/* नीचे का मुख्य एरिया जिसमें बैकग्राउंड और कार्ड्स (Foreground) एक के ऊपर एक रहेंगे */}
        <div className='relative w-full flex-grow bg-gradient-to-b from-[#060b13] via-[#0B0F19] to-[#111827] overflow-hidden'>
            <Background />
            <Foreground />
        </div>
        
    </div>
  )
}

export default YourTaskPage
