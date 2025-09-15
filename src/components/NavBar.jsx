import React, { useEffect } from 'react'

const NavBar = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    })
    return (
        <nav className='fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-8 border-white/10 shadow-lg'>
            <div className='max-w-5xl mx-auto px-4'>
                <div className='flex justify-between items-center h-16'>
                    <a href="#home" className='font-mono text-2xl font-bold text-white'>
                        {" "}
                        siva<span className='text-blue-500'>anand</span> </a>
                    <div className='w-7 h-5 relative cursor-pointer -40 md:hidden' onClick={() => setMenuOpen((prev => !prev))}>
                        &#9776;   {/* ☰ */}

                    </div>
                    <div className='hidden md:flex items-center space-x-6 '>
                        <a href="#home" className='text-gray-300 hover:text-white transition-colors'>Home</a>
                        <a href="#about" className='text-gray-300 hover:text-white transition-colors'>About</a>
                        <a href="#projects" className='text-gray-300 hover:text-white transition-colors'>Projects</a>
                        <a href="#contact" className='text-gray-300 hover:text-white transition-colors'>Contact</a>

                    </div>
                </div>

            </div>
        </nav>
    )
}

export default NavBar