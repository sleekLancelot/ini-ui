'use client';

import Image from 'next/image'
import React from 'react'
import firstImg from '../../../public/img/firstImg.png'
import { BingSvg } from './assets';

const Hero = () => {
  return (
    <section className="md:mb-[96px] mb-[40px]">
      <div className="mx-auto gap-3 pt-[27px] mb-[40px]">
        <p className="text-secondary-text-color text-[20px] text-center leading-8 mb-[12px]">Blog</p>
        <h5 className="font-[family-name:var(--font-manrope)] text-secondary-text-color text-center text-[64px] leading-[84px]">Thoughts and words</h5>
      </div>

      <div className="flex md:flex-row flex-col items-center justify-between md:gap-[100px] gap-[50px] md:pb-[72px] pb-[30px] border-b-1 border-secondary-text-color">
        <Image
          src={firstImg}
          alt="animated picture of a miniature building and a black bird flying"
        />
        <div className="basis-1/2 flex flex-col flex-shrink-0 gap-5">
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-start gap-3">
              <p className="text-[#0a2640] font-bold leading-7 text-[16px]">Category</p>
              <p className="text-[#777] leading-7">November 22, 2021</p>
            </div>
            <h5 className="text-black font-[family-name:var(--font-manrope)] text-[48px] font-[400] leading-[72px]">Pitch termsheet backing validation focus release.</h5>
          </div>
          <div className="flex items-start gap-3">
            {/* <Image
              src={bing}
              alt="a profile picture"
            /> */}
            <BingSvg />
            <div className="text-black leading-7 text-[16px]">Chandler Bing</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export {Hero}