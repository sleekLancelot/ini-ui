'use client';

import React, { useState } from 'react';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white text-secondary-text-color font-[family-name:var(--font-open-sans)] mb-[45px">
      <div className="max-w-screen-xl mx-auto px-4 md:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex justify-self-start items-center w-[162px] h-[42px] cursor-pointer">
          <svg width={26} height={34} viewBox="0 0 26 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 16H17.0678C21.9511 16 25.9099 19.9588 25.9099 24.8421C25.9099 29.7255 21.9511 33.6842 17.0678 33.6842H0V16Z" fill="#0A2640" />
            <path d="M0 0.526337H11.3927C15.0552 0.526337 18.0243 3.4954 18.0243 7.15792C18.0243 10.8204 15.0552 13.7895 11.3927 13.7895H0V0.526337Z" fill="#0A2640" />
          </svg>
          <div className="ml-2 text-[#0a2640] font-['Manrope'] text-[2.6875rem] font-bold leading-[2.0625rem]">Boldo</div>
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(m => !m)} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-[#0a2640]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <p className="text-[#0a2640] font-[600] leading-[28px] text-[16px] cursor-pointer">Product</p>
          <p className="text-[#0a2640] font-[600] leading-[28px] text-[16px] cursor-pointer">Services</p>
          <p className="text-[#0a2640] font-[600] leading-[28px] text-[16px] cursor-pointer">About</p>
          <button className="flex items-start gap-2 py-2 px-10 rounded-full border-2 border-[#0a2640] text-[#0a2640] leading-6 cursor-pointer font-[700]">
            Log In
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center w-[175px] px-4 pt-4 pb-6 space-y-4 bg-white absolute top-0 right-0 mx-auto shadow-lg z-50">
          {/* Cancel button */}
          <div className="self-end mb-2">
            <button onClick={() => setMenuOpen(false)} className="text-[#0a2640]">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
      
          {/* Menu Items */}
          <div className="text-[#0a2640] font-[600] leading-7 cursor-pointer">Product</div>
          <div className="text-[#0a2640] font-[600] leading-7 cursor-pointer">Services</div>
          <div className="text-[#0a2640] font-[600] leading-7 cursor-pointer">About</div>
          <button className="w-[128px] text-center py-2 px-4 rounded-[24px] border-2 border-[#0a2640] text-[#0a2640] leading-6 cursor-pointer font-[700]">
            Log In
          </button>
        </div>
      )}
    </nav>
  )
};

export {NavBar};