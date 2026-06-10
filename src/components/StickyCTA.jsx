import { motion } from 'framer-motion'
import { trackEvent } from '../utils/tracking'
import PremiumButton from './PremiumButton'

export default function StickyCTA() {
  return (
    <motion.div
      className="sticky-glass fixed bottom-0 left-0 right-0 z-50 px-4 py-3"
      initial={{ y: 72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.6, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="w-full flex items-center gap-3">

        {/* Left label — sm+ only */}
        <div className="hidden sm:block flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-brand block flex-none"
              animate={{ opacity: [1, 0.25, 1], scale: [1, 0.7, 1] }}
              transition={{ duration: 1.4, repeat: Infinity }}
            />
            <p className="font-display text-ice tracking-[0.08em]" style={{ fontSize: '0.95rem', fontWeight: 900 }}>
              世界杯 2026
            </p>
          </div>
          <p className="font-body text-ice/65 text-xs truncate pl-[18px]">
            存款 $100 · 获得 188 FS
          </p>
        </div>

        {/* Premium CTA */}
        <PremiumButton
          size="sm"
          onClick={() => trackEvent('sticky_cta_click', { section: 'sticky_bar' })}
          wrapperClassName="flex-1 sm:flex-none"
          className="w-full"
        >
          立即加入
        </PremiumButton>
      </div>
    </motion.div>
  )
}
