import React from 'react'

const Footer = () => {
  return (
    <footer className="pb-[117px]">

      <div className="w-full mx-auto flex flex-col md:flex-row justify-between md:gap-[180px] gap-7">

        <section className="flex flex-col max-w-md">
          <div className="flex items-center gap-2.5 mb-[40px]">
            <svg width={25} height={33} viewBox="0 0 25 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 15.5H16.2851C21.0522 15.5 24.9167 19.3645 24.9167 24.1316C24.9167 28.8987 21.0522 32.7632 16.2851 32.7632H0V15.5Z" fill="#0A2640" />
              <path d="M0 0.394775H10.8597C14.435 0.394775 17.3333 3.29314 17.3333 6.86846C17.3333 10.4438 14.435 13.3421 10.8597 13.3421H0V0.394775Z" fill="#0A2640" />
            </svg>
            <h2 className="text-[#0a2640] font-[700] text-4xl leading-[2.0625rem] font-[family-name:var(--font-manrope)]">
              Boldo
            </h2>
          </div>
          <p className="w-[300px] text-[#777] text-[16px] font-[400] leading-7 mb-[64px]">
            Social media validation business model canvas graphical user interface launch party creative Facebook iPad Twitter.
          </p>
          <p className="text-[#777] text-[16px] font-[400] leading-7">All rights reserved.</p>
        </section>


        <nav className="grid grid-cols-1 md:grid-cols-3 gap-9 md:gap-[96px] text-[20px] leading-8">
          <div>
            <h3 className="text-black font-bold mb-8">Landings</h3>
            <ul className="list-none space-y-[32px] text-[#777]">
              <li><a className="cursor-pointer hover:text-[#0a2640]">Home</a></li>
              <li><a className="cursor-pointer hover:text-[#0a2640]">Products</a></li>
              <li><a className="cursor-pointer hover:text-[#0a2640]">Services</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-black font-bold mb-8">Company</h3>
            <ul className="list-none space-y-[32px] text-[#777]">
              <li><a className="cursor-pointer hover:text-[#0a2640]">Home</a></li>
              <li className="flex items-center gap-3">
                <a className="cursor-pointer hover:text-[#0a2640]">Careers</a>

                <div className="flex items-center">
                  <span className="inline-flex items-center gap-2.5 py-px px-3 rounded-full bg-[#65e4a3] text-[#0a2640] text-sm font-bold leading-7">
                    Hiring!
                  </span>
                </div>
              </li>
              <li><a className="cursor-pointer hover:text-[#0a2640]">Services</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-black font-bold mb-8">Resources</h3>
            <ul className="list-none space-y-[32px] text-[#777]">
              <li><a className="cursor-pointer hover:text-[#0a2640]">Blog</a></li>
              <li><a className="cursor-pointer hover:text-[#0a2640]">Products</a></li>
              <li><a className="cursor-pointer hover:text-[#0a2640]">Services</a></li>
            </ul>
          </div>
        </nav>

      </div>
    </footer>
  )
}

export {Footer}