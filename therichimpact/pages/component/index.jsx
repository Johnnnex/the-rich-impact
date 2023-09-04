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
        <section className="bg-white py-[97px]">
            <h2 className="font-clashGrotesk text-[48px] text-[#453F3F] font-[500] text-center mb-[42px]">EXPERTISE</h2>
            <div className="flex w-[90%] justify-between items-center mx-auto">
                <div className="w-[32%] border border-[#14213D99] h-[382px] rounded-[24px] p-[10px]">
                    <Image alt="content-img" height={1} width={250} className="" src="/images/content.svg" />
                    <h3 className="text-[#2D2B4A] font-clashGrotesk font-[600] text-[24px]">Content Creation</h3>
                    <p className="font-clashGrotesk text-[18px] font-[400] text-[#666481] leading-[26px]">We prioritize comprehensive content strategies focused on producing high-quality content, ensuring efficient ddistribution, and maintaining a steady flow of impactful content across socail media and long-form platforms.</p>
                </div>
                <div className="w-[32%] border border-[#14213D99] h-[382px] rounded-[24px] p-[10px]">
                    <Image alt="soc-med-mgt-img" height={1} width={250} className="" src="/images/soc-med-mgt.svg" />
                    <h3 className="text-[#2D2B4A] font-clashGrotesk font-[600] text-[24px]">Social Media Management</h3>
                    <p className="font-clashGrotesk text-[18px] font-[400] text-[#666481] leading-[26px]">Expertly handle your brand’s social media presence, amplifying your message through strategic posts, timely engagement, and data-driven growth tactics.</p>
                </div>
                <div className="w-[32%] border border-[#14213D99] h-[382px] rounded-[24px] p-[10px]">
                    <Image alt="bd-dvpt-img" height={1} width={200} className="w-[40%]" src="/images/bd-dvpt.svg" />
                    <h3 className="text-[#2D2B4A] font-clashGrotesk font-[600] text-[24px]">Brand Development & Storytelling</h3>
                    <p className="font-clashGrotesk text-[18px] font-[400] text-[#666481] leading-[26px]">We masterfully weave your brand’s narrative into a compelling story, fostering a solid identity that resonates with your audience. Our strategic approach ensures your brand stands out in the Web3 ecosystem.</p>
                </div>
            </div>
        </section>
        <section className="pt-[77px]">
            <div className="w-[90%] mx-auto">
                <h3 className=" font-clashGrotesk text-[#453F3F] font-[500] text-[48px] items-center flex">
                    OUR PORTFOLIO
                    <Image alt="svg-icon" height={1} width={45} className="" src="/images/arrow-up-right.svg" />
                </h3>
                <div className="mt-[42px] py-[20px] px-[10px] rounded-[8px] border border-[#14213D99]">
                    <h4 className="text-[#2D2B4A] font-[600] text-[24px] font-clashGrotesk">CryptoStart</h4>
                    <p className="text-[#666481] font-clashGrotesk text-[18px] leading-[26px] font-[400] mt-[8px] mb-[24px]">
                        CryptoStart is a rising start in the crypto space, preparing to launch a ground breaking Defi protcol. The technical aspects are solid and advanced, but CryptoStart’s  small team lacks the content expertise to articulate their project and vision to diverse audience. 
                    </p>
                    <button className="uppercase text-[18px] font-satoshi font-[700] text-[#01020F99] py-[8px] px-[18px] border border-[#01020F99] rounded-[10px]">Learn more</button>
                </div>
            </div>
        </section>
        <section className="px-4 md:px-0 pt-[113px] pb-[50px]" id="team">
            <div className="mx-auto w-[90%]">
                <h3 className="text-[48px] font-[500] font-clashGrotesk text-[#453F3F]">MEET THE TEAM</h3>
                <div className="flex flex-wrap">
                    <div className="w-[20rem] p-2 wow fadeIn mx-auto mb-7">
                        <div className="rounded-[1rem] overflow-hidden">
                        <   Image src="/Images/temitope.png" alt="team" width={300} height={1} />
                        </div>
                        <p className=" font-clashGrotesk text-black font-[900] mt-[12px] text-[22px]">Temitope Olayinka</p>
                        <small className="font-clashGrotesk text-[#666481] text-[18px] font-[500]">CoFounder & Content Manager</small>
                    </div>
                    <div className="w-[20rem] p-2 wow fadeIn mx-auto mb-7">
                        <div className="rounded-[1rem] overflow-hidden">
                            <Image src="/Images/richie.png" alt="team" width={300} height={1} />
                        </div>
                        <p className=" font-clashGrotesk text-black font-[900] mt-[12px] text-[22px]">Richard Oluseye</p>
                        <small className="font-clashGrotesk text-[#666481] text-[18px] font-[500]">CoFounder & Content Manager</small>
                    </div>
                    <div className="w-[20rem] wow p-2 fadeIn mx-auto mb-7">
                        <div className="rounded-[1rem] overflow-hidden">
                            <Image src="/Images/wale.png" alt="team" width={300} height={1} />
                        </div>
                        <p className=" font-clashGrotesk text-black font-[900] mt-[12px] text-[22px]">Olawale Abubakr</p>
                        <small className="font-clashGrotesk text-[#666481] text-[18px] font-[500]">Technical Writer</small>
                    </div>
                    <div className="w-[20rem] wow p-2 fadeIn mx-auto mb-7">
                        <div className="rounded-[1rem] overflow-hidden">
                            <Image src="/Images/veetor.png" alt="team" width={300} height={1} />
                        </div>
                        <p className=" font-clashGrotesk text-black font-[900] mt-[12px] text-[22px]">Precious Ihie</p>
                        <small className="font-clashGrotesk text-[#666481] text-[18px] font-[500]">Creative Lead</small>
                    </div>
                </div>
            </div>
        </section> 
        <section className="bg-[#01020F] pt-[114px]">
            <h3 className=" font-satoshi text-[48px] font-[500] text-white text-center mb-[32px]">FAQS</h3>
        </section>
    </>
  )
}

export default Index
