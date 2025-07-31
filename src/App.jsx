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

  // useGSAP(() => {
  //   gsap.from("#green-box", {
  //     x: 250,
  //     repeat: -1,
  //     yoyo: true,
  //     rotation: 360,
  //     duration: 3,
  //     ease: 'power1.inOut'
  //   })
  // }, [])

  // useGSAP(() => {
  //   gsap.fromTo("#green-box",
  //     {
  //       x: 0,
  //       y: 50,
  //       borderRadius: '0%',
  //     },
  //     {
  //       x: 1000,
  //       repeat: -1,
  //       borderRadius: '100%',
  //       yoyo: true,
  //       rotation: 360,
  //       duration: 2,
  //       ease: 'power1.inOut'
  //     })
  // }, [])

  const tl = gsap.timeline({repeat: -1, repeatDelay: 1});

  useGSAP(() => {
    tl.to('#green-box', {
      x: 1400,
      duration: 2,
      ease: 'circ'
    })
    tl.to('#green-box', {
      y: 500,
      duration: 1,
      ease: 'expo.in'
    })
    tl.to('#green-box', {
      x: 0,
      duration: 2,
    })
    tl.to('#green-box', {
      y: 0,
      duration: 1,
    })
    
  }, [])

  return (
    <div className=''>
      <div id='green-box' className='w-50 h-50 bg-green-400 rounded-2xl border'></div>
      <button onClick={() => {
        if (tl.paused()){
          tl.play();
        }else{
          tl.pause();
        }
      } }>Play/Pause</button>
    </div>
  )
}

export default App
