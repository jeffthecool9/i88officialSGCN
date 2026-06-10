import Hero from './components/Hero'
import EventCarousel from './components/EventCarousel'
import HowToJoin from './components/HowToJoin'
import StickyCTA from './components/StickyCTA'

export default function App() {
  return (
    <div className="bg-ink overflow-x-hidden">
      <Hero />
      <EventCarousel />
      <HowToJoin />
      {/* 18+ 声明 */}
      <p className="text-center font-body text-ice/45 text-xs px-6 py-6 leading-relaxed pb-24">
        仅限18岁以上 · 请负责任地博彩 · i88 支持负责任博彩
        <br />
        新加坡热线：1800-6-668-668 · 马来西亚热线：1-800-88-3151
      </p>
      <StickyCTA />
    </div>
  )
}
