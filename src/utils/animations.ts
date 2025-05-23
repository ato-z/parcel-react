import { Variants } from 'framer-motion'

// 滑动动画
export const slideVariants: Variants = {
  initial: {
    opacity: 0,
    x: -200,
    scale: 0.8,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: 200,
    scale: 0.8,
  },
}

// 淡入淡出动画
export const fadeVariants: Variants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
}

// 缩放动画
export const scaleVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  in: {
    opacity: 1,
    scale: 1,
  },
  out: {
    opacity: 0,
    scale: 1.2,
  },
}

// 旋转动画
export const rotateVariants: Variants = {
  initial: {
    opacity: 0,
    rotate: -180,
    scale: 0.8,
  },
  in: {
    opacity: 1,
    rotate: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    rotate: 180,
    scale: 0.8,
  },
}

// 垂直滑动动画
export const verticalSlideVariants: Variants = {
  initial: {
    opacity: 0,
    y: -100,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: 100,
  },
}

// 动画配置
export const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
}

export const smoothTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.3,
}

export const springTransition = {
  type: 'spring',
  stiffness: 100,
  damping: 15,
}
