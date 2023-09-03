import React from 'react'
import Image from 'next/image'
import HeadComp from '@/layout/HeadComp'

const Index = () => {
  return (
    <>
        <HeadComp title="The Rich Impact - Home" />
        <section className="bg-[#01020F] pt-[72px] pb-[3rem]">
            <div className="flex w-[90%] justify-between items-center mx-auto">
                <div className="w-[56%]">
                    <h1 className="font-[700] font-clashGrotesk leading-[70px] text-white text-[56px] uppercase">
                        Web3 Content Marketing Agency THAT Gives <span className="text-[#FCA311]">Clarity</span> to Your Complexity
                    </h1>
                    <p className="mt-[16px] text-[#FFFFFF] font-clashGrotesk leading-[26px] text-[18px] font-[400]">
                        The Rich Impact is a dedicated team of writers, strategists, and marketers with a decade of combined experience, on a mission to clear a deluge of low-quality, plagiarized, and misinformed content, one expertly crafted content at a time.
                    </p>
                    <button className="text-[18px] text-white font-[600] mt-[32px] font-clashGrotesk w-[200px] rounded-[8px] py-[10px] bg-[#FCA311]">
                        WORK WITH US
                    </button>
                </div>
                <div className="w-[36%]">
                    <Image alt="logo-img" height={1} width={600} className="" src="/images/hero-img.svg" />
                </div>
            </div>
        </section>
    </>
  )
}

export default Index
