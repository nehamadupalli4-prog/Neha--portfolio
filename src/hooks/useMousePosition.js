import { useState, useEffect } from 'react'

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return mousePosition
}

export function getParallaxTransform(element, mouseX, mouseY, intensity = 0.02) {
  if (!element) return { x: 0, y: 0 }

  const rect = element.getBoundingClientRect()
  const elementCenterX = rect.left + rect.width / 2
  const elementCenterY = rect.top + rect.height / 2

  const distX = mouseX - elementCenterX
  const distY = mouseY - elementCenterY

  return {
    x: distX * intensity,
    y: distY * intensity,
  }
}
