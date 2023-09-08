import React from 'react'
import HeadComp from '@/layout/HeadComp'
import Image from 'next/image'

const Portfolio = () => {
  return (
    <>
        <HeadComp title="The Rich Impact - Portfolio" />
        <section className="">
          <div className="w-[90%] mx-auto mt-[69px]">
            <button className="border rounded-[100px] w-[106px] flex items-center justify-center border-black h-[52px]">
              <Image src="/images/arrow-left.svg" alt="svg-img" width={30} height={1} />
            </button>
          </div>
        </section>
    </>
  )
}

export default Portfolio
