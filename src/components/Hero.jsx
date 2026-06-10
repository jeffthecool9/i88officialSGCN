import { motion } from 'framer-motion'
import { trackEvent } from '../utils/tracking'
import PremiumButton from './PremiumButton'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.45 } },
}

const rise = {
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
}

const stats = [
  { value: '$300', label: '充值$100得'   },
  { value: '20%',  label: '每日·$288'   },
  { value: '$5K',  label: '每周通行证'   },
]

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col overflow-hidden">

      {/* Video */}
      <video
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/worldcup-bg.mp4"
        aria-hidden="true"
      />
      <div className="video-overlay absolute inset-0 pointer-events-none" />

      {/* Stadium beams */}
      <div className="stadium-beam left-[28%] animate-beam-left" />
      <div className="stadium-beam right-[28%] animate-beam-right" />

      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{ background: 'radial-gradient(ellipse 70% 45% at 20% 82%, rgba(14,165,233,0.16) 0%, transparent 70%)' }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-1 items-end pb-20">
        <motion.div
          className="w-full px-6 md:px-12 lg:px-20 md:max-w-[60%] text-center md:text-left"
          variants={container}
          initial="hidden"
          animate="visible"
        >

          {/* Headline */}
          <motion.h1
            variants={rise}
            className="font-display leading-[0.92] tracking-wide mb-3"
            style={{ fontSize: 'clamp(1.8rem, 7.8vw, 3.8rem)' }}
          >
            <span className="text-gold-outline">世界杯 2026</span>
            <br />
            <span className="text-gold-3d">35,306 已参与</span>
          </motion.h1>

          {/* Sub */}
          <motion.p variants={rise} className="font-body text-body-premium text-sm md:text-base leading-relaxed mb-5 md:max-w-md">
            赢取高达 SGD 100,000 — 立即参与黄金靴争霸赛
          </motion.p>

          {/* CTA */}
          <motion.div variants={rise} className="flex md:justify-start justify-center mb-5">
            <PremiumButton
              size="lg"
              onClick={() => trackEvent('hero_cta_click', { section: 'hero' })}
              className="w-full sm:w-auto"
            >
              立即加入
            </PremiumButton>
          </motion.div>

          {/* Stat bar — 3D hover per cell */}
          <motion.div
            variants={rise}
            className="inline-grid grid-cols-3 w-full sm:w-auto rounded-xl overflow-hidden"
            style={{
              border: '1px solid rgba(255,255,255,0.09)',
              background: 'rgba(255,255,255,0.04)',
            }}
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.value}
                whileHover={{ scale: 1.06, backgroundColor: 'rgba(200,140,0,0.10)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className={`stat-cell text-center py-3 px-4 cursor-default ${i < stats.length - 1 ? 'border-r border-white/8' : ''}`}
              >
                <p className="font-display text-stat-value text-xl leading-none tracking-wide">{s.value}</p>
                <p className="font-body text-stat-label text-[11px] tracking-wider mt-1">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
