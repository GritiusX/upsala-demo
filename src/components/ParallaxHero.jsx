import { useEffect, useRef } from 'react'

const LAYERS = [
  { src: 'https://i.ibb.co/9mHk68Gj/background.png', alt: 'background', speedX: 0.03, speedY: 0.038, speedZ: 0, rotation: 0, zIndex: 1, initialTop: 'calc(50% - 50px)', initialLeft: 'calc(50% + 0px)', width: '3200px' },
  { src: 'https://i.ibb.co/DHhNwG0X/fog-7.png', alt: 'fog-7', speedX: 0.27, speedY: 0.32, speedZ: 0, rotation: 0, zIndex: 2, initialTop: 'calc(50% - 100px)', initialLeft: 'calc(50% + 300px)', width: '1900px' },
  { src: 'https://i.ibb.co/4gT3LR9K/mountain-10.png', alt: 'mountain-10', speedX: 0.095, speedY: 0.005, speedZ: 0, rotation: 0, zIndex: 3, initialTop: 'calc(50% + 169px)', initialLeft: 'calc(50% + 330px)', width: '1200px' },
  { src: 'https://i.ibb.co/rW6cjXV/fog-6.png', alt: 'fog-6', speedX: 0.25, speedY: 0.28, speedZ: 0, rotation: 0, zIndex: 4, initialTop: 'calc(50% + 285px)', initialLeft: 'calc(50%)', width: '2200px', className: 'opacity-30' },
  { src: 'https://i.ibb.co/zHWDdxRR/mountain-9.png', alt: 'mountain-9', speedX: 0.125, speedY: 0.155, speedZ: 0.15, rotation: 0.02, zIndex: 51, initialTop: 'calc(50% + 313px)', initialLeft: 'calc(50% - 557px)', width: '670px' },
  { src: 'https://i.ibb.co/jFSMJ2t/fog-5.png', alt: 'fog-5', speedX: 0.16, speedY: 0.105, speedZ: 0, rotation: 0, zIndex: 7, initialTop: 'calc(50% + 360px)', initialLeft: 'calc(50% + 40px)', width: '650px' },
  { src: 'https://i.ibb.co/Fq5CHqZ6/mountain-7.png', alt: 'mountain-7', speedX: 0.1, speedY: 0.1, speedZ: 0, rotation: 0.09, zIndex: 19, initialTop: 'calc(50% + 223px)', initialLeft: 'calc(50% + 495px)', width: '738px' },
  { src: 'https://i.ibb.co/N2TjCDLQ/mountain-6.png', alt: 'mountain-6', speedX: 0.065, speedY: 0.05, speedZ: 0.05, rotation: 0.12, zIndex: 18, initialTop: 'calc(50% + 120px)', initialLeft: 'calc(50% + 590px)', width: '408px' },
  { src: 'https://i.ibb.co/23Xc3QwX/fog-4.png', alt: 'fog-4', speedX: 0.135, speedY: 0.1, speedZ: 0, rotation: 0, zIndex: 11, initialTop: 'calc(50% + 223px)', initialLeft: 'calc(50% + 460px)', width: '590px', className: 'opacity-50' },
  { src: 'https://i.ibb.co/SSfDbsF/mountain-5.png', alt: 'mountain-5', speedX: 0.08, speedY: 0.05, speedZ: 0.13, rotation: 0.1, zIndex: 12, initialTop: 'calc(50% + 320px)', initialLeft: 'calc(50% + 230px)', width: '725px' },
  { src: 'https://i.ibb.co/chZkMKzX/fog-3.png', alt: 'fog-3', speedX: 0.11, speedY: 0.018, speedZ: 0, rotation: 0, zIndex: 113, initialTop: 'calc(50% + 210px)', initialLeft: 'calc(50% + 5px)', width: '1600px' },
  { src: 'https://i.ibb.co/39PKgGNS/mountain-4.png', alt: 'mountain-4', speedX: 0.059, speedY: 0.024, speedZ: 0.35, rotation: 0.14, zIndex: 15, initialTop: 'calc(50% + 196px)', initialLeft: 'calc(50% - 698px)', width: '1100px' },
  { src: 'https://i.ibb.co/rKHGSD9S/mountain-3.png', alt: 'mountain-3', speedX: 0.04, speedY: 0.018, speedZ: 0.32, rotation: 0.05, zIndex: 20, initialTop: 'calc(50% - 20px)', initialLeft: 'calc(50% + 750px)', width: '630px' },
  { src: 'https://i.ibb.co/bj0s7gRP/fog-2.png', alt: 'fog-2', speedX: 0.15, speedY: 0.0115, speedZ: 0, rotation: 0, zIndex: 16, initialTop: 'calc(50% - 20px)', initialLeft: 'calc(50% + 698px)', width: '1100px' },
  { src: 'https://i.ibb.co/7tHMfwZH/mountain-2.png', alt: 'mountain-2', speedX: 0.0235, speedY: 0.013, speedZ: 0.42, rotation: 0.15, zIndex: 17, initialTop: 'calc(50% + 256px)', initialLeft: 'calc(50% + 528px)', width: '800px' },
  { src: 'https://i.ibb.co/Knh5tBS/mountain-1.png', alt: 'mountain-1', speedX: 0.027, speedY: 0.018, speedZ: 0.53, rotation: 0.2, zIndex: 18, initialTop: 'calc(50% + 196px)', initialLeft: 'calc(50% - 728px)', width: '1100px' },
  { src: 'https://i.ibb.co/Y41vTxSN/fog-1.png', alt: 'fog-1', speedX: 0.12, speedY: 0.01, speedZ: 0, rotation: 0, zIndex: 21, initialTop: 'calc(100% - 355px)', initialLeft: 'calc(50% + 100px)', width: '1900px', className: 'opacity-50' },
]

export default function ParallaxHero({ children }) {
  const layerRefs = useRef([])

  useEffect(() => {
    const handleMouseMove = (e) => {
      const xVal = e.clientX - window.innerWidth / 2
      const yVal = e.clientY - window.innerHeight / 2
      const rotateDeg = (xVal / (window.innerWidth / 2)) * 20

      layerRefs.current.forEach((el, i) => {
        if (!el) return
        const { speedX, speedY, speedZ, rotation } = LAYERS[i]
        const computedLeft = parseFloat(getComputedStyle(el).left)
        const isInLeft = computedLeft < window.innerWidth / 2 ? 1 : -1
        const zVal = (e.clientX - computedLeft) * isInLeft * 0.1
        el.style.transform = `perspective(2300px) translateZ(${zVal * speedZ}px) rotateY(${rotateDeg * rotation}deg) translateX(calc(-50% + ${-xVal * speedX}px)) translateY(calc(-50% + ${yVal * speedY}px))`
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#060d1a]">
      {/* Vignette radial */}
      <div className="absolute inset-0 z-[100] pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_65%,rgba(0,0,0,0.7))]" />
      {/* Bottom gradient for text legibility */}
      <div className="absolute inset-0 z-[101] pointer-events-none bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

      {LAYERS.map((layer, i) => (
        <img
          key={i}
          ref={el => { if (el) layerRefs.current[i] = el }}
          src={layer.src}
          alt={layer.alt}
          className={`absolute pointer-events-none transition-transform duration-[450ms] ease-out select-none ${layer.className || ''}`}
          style={{
            width: layer.width,
            top: layer.initialTop,
            left: layer.initialLeft,
            zIndex: layer.zIndex,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      {/* Overlay content — above all layers */}
      <div className="absolute inset-0 z-[300]">
        {children}
      </div>
    </div>
  )
}
