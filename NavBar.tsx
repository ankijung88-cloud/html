import React, { useState } from 'react'

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-600 p-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-2xl font-bold">
          ASTERLISK
        </a>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none focus:text-gray-300"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>

        <div
          className={`md:flex items-center space-x-4 ${isOpen ? 'block' : 'hidden'}`}
        >
          <a href="#" className="text-white hover:text-gray-200">
            홈
          </a>
          <a href="#" className="text-white hover:text-gray-200">
            소개
          </a>
          <a href="#" className="text-white hover:text-gray-200">
            서비스
          </a>
          <a href="#" className="text-white hover:text-gray-200">
            문의
          </a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
