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
                    <button className="text-[15px] text-white font-[600] mt-[32px] font-satoshi w-[200px] rounded-[8px] py-[10px] bg-[#FCA311]">
                        WORK WITH US
                    </button>
                </div>
                <div className="w-[36%]">
                    <Image alt="hero-img" height={1} width={600} className="" src="/images/hero-img.svg" />
                </div>
            </div>
        </section>
        <section className="bg-white">
            <h2 className="mt-[97px] font-clashGrotesk text-[48px] text-[#453F3F] font-[500] text-center mb-[42px]">EXPERTISE</h2>
            <div className="flex w-[90%] justify-between items-center mx-auto">
                <div className="w-[30%]">
                    <Image alt="content-img" height={1} width={100} className="" src="/images/content.svg" />
                    <h3 className="text-[#2D2B4A] font-clashGrotesk font-[600] text-[24px]">Content Creation</h3>
                    <p className="font-clashGrotesk text-[18px] font-[400] text-[#666481] leading-[26px]">We prioritize comprehensive content strategies focused on producing high-quality content, ensuring efficient ddistribution, and maintaining a steady flow of impactful content across socail media and long-form platforms.</p>
                </div>
                <div className="w-[30%]">
                    <Image alt="soc-med-mgt-img" height={1} width={100} className="" src="/images/soc-med-mgt.svg" />
                    <h3 className="text-[#2D2B4A] font-clashGrotesk font-[600] text-[24px]">Social Media Management</h3>
                    <p className="font-clashGrotesk text-[18px] font-[400] text-[#666481] leading-[26px]">Expertly handle your brand’s social media presence, amplifying your message through strategic posts, timely engagement, and data-driven growth tactics.</p>
                </div>
                <div className="w-[30%]">
                    <Image alt="bd-dvpt-img" height={1} width={100} className="" src="/images/bd-dvpt.svg" />
                    <h3 className="text-[#2D2B4A] font-clashGrotesk font-[600] text-[24px]">Brand Development & Storytelling</h3>
                    <p className="font-clashGrotesk text-[18px] font-[400] text-[#666481] leading-[26px]">We masterfully weave your brand’s narrative into a compelling story, fostering a solid identity that resonates with your audience. Our strategic approach ensures your brand stands out in the Web3 ecosystem.</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default Index
