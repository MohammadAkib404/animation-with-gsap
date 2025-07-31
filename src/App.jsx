import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

function App() {

  // useGSAP(() => {
  //   gsap.to("#green-box", {
  //     x: 250,
  //     repeat: -1,
  //     yoyo: true,
  //     rotation: 360,
  //     duration: 1,
  //   })
  // }, [])

  useGSAP(() => {
    gsap.from("#green-box", {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 3,
      ease: 'power1.inOut'
    })
  }, [])

  return (
    <div className='h-full flex justify-center items-center'>
      <div id='green-box' className='w-50 h-50 bg-green-400 rounded-2xl border'></div>
    </div>
  )
}

export default App
