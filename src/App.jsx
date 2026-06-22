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
       系统将自动跳转至官方网站。

        <br />
       若您看到的品牌名称有所不同，请不必担心，这是基于政策要求所作出的安排。
      </p>
      <StickyCTA />
    </div>
  )
}
