import { motion } from 'framer-motion'
import { trackLead } from '../utils/tracking'
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
  { value: '3X',   label: '充值$100 · 获$300礼包' },
  { value: '20%',  label: '每日奖励 · 最高$288'   },
  { value: '$5K',  label: '每周通行证奖池'         },
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
          <motion.h1 variants={rise} className="font-display tracking-wide mb-3">
            <span
              className="text-gold-outline block leading-tight"
              style={{ fontSize: 'clamp(1.5rem, 6.5vw, 3.2rem)', letterSpacing: '0.06em' }}
            >FIFA 世界杯 2026</span>
            <span
              className="block text-white/75 uppercase"
              style={{ fontSize: 'clamp(0.7rem, 3vw, 1.25rem)', letterSpacing: '0.28em', margin: '0.25em 0 0.1em' }}
            >— 赢取高达 —</span>
            <span
              className="text-gold-3d block"
              style={{ fontSize: 'clamp(2.6rem, 11vw, 5.5rem)', lineHeight: 0.88 }}
            >SGD 100,000</span>
          </motion.h1>

          {/* Sub */}
          <motion.p variants={rise} className="font-body text-body-premium text-sm md:text-base leading-relaxed mb-5 md:max-w-md">
            35,306 名玩家已加入 — 黄金靴争霸赛等你来战
          </motion.p>

          {/* CTA */}
          <motion.div variants={rise} className="flex md:justify-start justify-center mb-5">
            <PremiumButton
              size="lg"
              onClick={() => { trackLead('hero'); window.open('https://www.palacehub8.com/ypJAwuqq', '_blank') }}
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
