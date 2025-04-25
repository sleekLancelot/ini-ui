'use client'

import React, { useMemo } from 'react'
import Image, { StaticImageData } from 'next/image';

import { BingSvg, RachelSvg, MonicaSvg } from './assets';
import manImg from '../../../public/img/manImg.png'
import ovalImg from '../../../public/img/ovalImg.png'
import img2 from '../../../public/img/img2.png'
import img3 from '../../../public/img/img3.png'
import img4 from '../../../public/img/img4.png'
import img5 from '../../../public/img/img5.png'
import img6 from '../../../public/img/img6.png'


const MiddleContent = () => {

  const getItems = (img: StaticImageData, text: string, dp: React.JSX.Element, name: string) => useMemo(() => ({
    img,
    text,
    dp,
    name,
  }), [])

  const items = [
    getItems(manImg, 'Pitch termsheet backing validation focus release.', <BingSvg />, 'Chandler Bing'),
    getItems(img2, 'Seed round direct mailing non-disclosure agreement graphical user interface rockstar.', <RachelSvg />, 'Rachel Green'),
    getItems(img3, 'Beta prototype sales iPad gen-z marketing network effects value proposition.', <MonicaSvg />, 'Monica Geller'),
    getItems(img4, 'Pitch termsheet backing validation focus release.', <BingSvg />, 'Chandler Bing'),
    getItems(img5, 'Seed round direct mailing non-disclosure agreement graphical user interface rockstar.', <RachelSvg />, 'Rachel Green'),
    getItems(img6, 'Beta prototype sales iPad gen-z marketing network effects value proposition.', <MonicaSvg />, 'Monica Geller'),
  ]

  return (
    <div>
      <section className="md:px-[100px] mb-[120px]">
        <h5 className="text-black font-[family-name:var(--font-manrope)] text-[48px] leading-[72px] font-[400] mb-[40px]">Latest news</h5>

        <div className="flex items-center flex-wrap gap-x-[80px] gap-y-[50px] mb-[96px]">
          {
            items.map((item, index) => (
              <div key={index} className="w-[300px] md:max-w-[290px] flex flex-col items-start gap-6">
                <Image
                  src={item.img}
                  alt={item.name}
                />
                <div className="flex flex-col items-start gap-5">
                  <div className="flex flex-col flex-wrap items-start gap-3">
                    <div className="flex items-start gap-3">
                      <p className="text-[#0a2640] font-[700] leading-7">Category</p>
                      <p className="text-[#777] leading-7">November 22, 2021</p>
                    </div>
                    <p className="h-[90px] line-clamp-3 text-black text-[20px] leading-8 wrap-break-word">{item.text}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    {item.dp}
                    <p className="text-black leading-7">{item.name}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

        <div className="flex items-center md:justify-center">
          <button className="py-4 px-14 rounded-full border-2 border-[#0a2640] text-[#0a2640] text-xl font-bold leading-7 cursor-pointer">
            Load more
          </button>
        </div>
      </section>

      <div className="w-full p-[10px] md:py-[72px] h-auto relative flex-shrink-0 rounded-xl bg-[#0a2640] md:overflow-hidden mb-[84px]">
        <Image
          src={ovalImg}
          alt="oval eclipse shaped item"
          className='absolute top-0 right-0 z-[2]'
        />

        <div className="w-full md:w-[65%] h-full flex flex-col items-center justify-center mx-auto relative z-[5]">
          <h5 className="font-[family-name:var(--font-manrope)] flex flex-col flex-shrink-0 justify-center text-white text-center text-5xl leading-[72px] mb-[48px]">An enterprise template to ramp up your company website</h5>

          <div className="flex items-center gap-[24px] flex-wrap justify-center">
            <input
              className="md:w-[23.125rem] h-14 rounded-full border-2 border-white bg-white text-black text-xl leading-8 active:outline-none focus:outline-none focus:ring-0 placeholder:text-[#000] placeholder:leading-8 placeholder:font-[400] px-6"
              placeholder="Your email address"
            />
            <button className="inline-flex justify-center items-center gap-2 py-4 px-14 rounded-full border-2 border-[#65e4a3] bg-[#65e4a3] text-[#0a2640] text-xl font-bold leading-7">
              Start now
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export {MiddleContent}
