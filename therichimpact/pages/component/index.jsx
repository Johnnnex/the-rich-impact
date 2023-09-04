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
        <section className="bg-[#01020F] text-white pt-[114px]">
            <h3 className=" font-satoshi text-[48px] font-[500] text-white text-center mb-[32px]">FAQS</h3>
            <div className="w-[60%] mx-auto font-satoshi">
                <div className="question flex items-center justify-between">
                    <h4 className=" text-[26px] font-[500]">What kind of content do you specialize in?</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 35" fill="none">
                        <path d="M17.5 29.1667C11.0687 29.1667 5.83329 23.9313 5.83329 17.5001C5.83329 11.0688 11.0687 5.83341 17.5 5.83341C23.9312 5.83341 29.1666 11.0688 29.1666 17.5001C29.1666 23.9313 23.9312 29.1667 17.5 29.1667ZM17.5 2.91675C15.5848 2.91675 13.6885 3.29396 11.9192 4.02684C10.1498 4.75972 8.54217 5.83392 7.18799 7.18811C4.45308 9.92301 2.91663 13.6323 2.91663 17.5001C2.91663 21.3678 4.45308 25.0771 7.18799 27.8121C8.54217 29.1662 10.1498 30.2404 11.9192 30.9733C13.6885 31.7062 15.5848 32.0834 17.5 32.0834C21.3677 32.0834 25.077 30.547 27.8119 27.8121C30.5468 25.0771 32.0833 21.3678 32.0833 17.5001C32.0833 15.585 31.7061 13.6886 30.9732 11.9193C30.2403 10.1499 29.1661 8.54229 27.8119 7.18811C26.4577 5.83392 24.8501 4.75972 23.0808 4.02684C21.3114 3.29396 19.4151 2.91675 17.5 2.91675ZM18.9583 10.2084H16.0416V16.0417H10.2083V18.9584H16.0416V24.7917H18.9583V18.9584H24.7916V16.0417H18.9583V10.2084Z" fill="white"/>
                    </svg>
                </div>
                <div className="answer max-h-0 transition-[.4s]">
                    <p className="text-[18px] pt-[24px] leading-[24px]">
                        We specialize in various content types, including articles, white papers, social media content & man agement, technical documentation, SEO, and content strategy.
                    </p>
                </div>
            </div>
        </section>
    </>
  )
}

export default Index
