import React, { useState } from 'react'
import { motion } from 'framer-motion'

export type AnimationType = 'slide' | 'fade' | 'scale' | 'rotate' | 'vertical'

interface AnimationSelectorProps {
  currentAnimation: AnimationType
  onAnimationChange: (animation: AnimationType) => void
}

const animationOptions = [
  { value: 'slide', label: '滑动动画', icon: '⬅️➡️' },
  { value: 'fade', label: '淡入淡出', icon: '🌫️' },
  { value: 'scale', label: '缩放动画', icon: '🔍' },
  { value: 'rotate', label: '旋转动画', icon: '🔄' },
  { value: 'vertical', label: '垂直滑动', icon: '⬆️⬇️' },
] as const

const AnimationSelector: React.FC<AnimationSelectorProps> = ({
  currentAnimation,
  onAnimationChange,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-purple-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-purple-600 transition-colors flex items-center gap-2"
      >
        <span>🎬</span>
        <span>动画效果</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          ▼
        </motion.span>
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full mt-2 left-0 bg-white rounded-lg shadow-xl border z-50 min-w-48"
        >
          {animationOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onAnimationChange(option.value as AnimationType)
                setIsOpen(false)
              }}
              className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors flex items-center gap-3 ${
                currentAnimation === option.value
                  ? 'bg-purple-50 text-purple-600 border-r-2 border-purple-500'
                  : 'text-gray-700'
              }`}
            >
              <span className="text-lg">{option.icon}</span>
              <span className="font-medium">{option.label}</span>
              {currentAnimation === option.value && (
                <span className="ml-auto text-purple-500">✓</span>
              )}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  )
}

export default AnimationSelector
