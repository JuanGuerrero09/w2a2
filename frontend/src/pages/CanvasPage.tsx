import React from 'react'
import CanvasSketch from "../components/canvas/CanvasSketch";
import CanvasStyles from '../styles/Canvas.module.css'

export default function CanvasPage() {
  return (
    <main className={CanvasStyles.CanvasPage}>
        <CanvasSketch />
    </main>
  )
}
