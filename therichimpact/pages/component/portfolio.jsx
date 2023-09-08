import React from 'react'
import HeadComp from '@/layout/HeadComp'
import Image from 'next/image'

const Portfolio = () => {
  return (
    <>
        <HeadComp title="The Rich Impact - Portfolio" />
        <section className="">
          <div className="w-[90%] mx-auto mt-[49px]">
            <button className="border rounded-[100px] w-[106px] mb-[49px] flex items-center justify-center border-black h-[52px]">
              <Image src="/images/arrow-left.svg" alt="svg-img" width={30} height={1} />
            </button>
            <h2 className="mb-[8px] font-clashGrotesk text-[24px] text-[#2D2B4A] font-[600]">THE CHALLENGE 😦</h2>
            <p className=" font-clashGrotesk text-[18px] font-[400] mb-[40px]">
              CryptoStart is a rising start in the crypto space, preparing to launch a ground breaking Defi protcol. The technical aspects are solid and advanced, but CryptoStart’s  small team lacks the content expertise to articulate their project and vision to diverse audience.  They need high-quality, relatble, and impactful content that can bridge the gap between complex tech jargon and the averge investor or user in the crypto space.
            </p>
            <h2 className="mb-[42px] font-clashGrotesk text-[24px] text-[#2D2B4A] font-[600]">THE RICH IMPACT’S APPROACH 😇</h2>
            <div className="">
              <div className=""></div>
              <div className=""></div>
            </div>
            <div className="">
              <div className=""></div>
              <div className=""></div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Portfolio
