import RevealOnScroll from "../RevealOnScroll"
import React from 'react'
import {useEffect,useRef} from 'react'

const Home = () => {
  return (
    <section id="home" className='min-h-screen flex items-center justify-center relative'>
      <RevealOnScroll>
      <div className='text-ceter z-10 px-4 '>
        <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-100 to-purple-600 bg-clip-text text-transparent leading-right'>
          Hello Everyone,I'm siva
        </h1>
        <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
          I am a BTech student specializing in Artzificial Intelligence and Machine Learning. I enjoy exploring mathematical concepts, working on app development using Dart and Flutter, and integrating Firebase services like Firestore and Realtime Database. My skills also include creating concise presentations on business topics and using Node.js for backend development. I am passionate about learning new technologies and applying them to solve real-world problems.

        </p>
        <div className="flex justify-center space-x-4">
          <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
View Projects
          </a>
          <a href="#projects" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duratio-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:bg-blue-500/10">
Contact Me
          </a>

        </div>
      </div>
      </RevealOnScroll>
    </section>
  )
}

export default Home