import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

function App() {

  useGSAP(() => {
    gsap.to("#green-box", {
      x: 250,
    })
  }, [])

  return (
    <div>
      <div id='#greenBox' className='w-50 h-50 bg-green-400 rounded-2xl border'></div>
    </div>
  )
}

export default App
