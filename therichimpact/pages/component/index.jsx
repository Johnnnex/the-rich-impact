import React, { useState } from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Autoplay, Pagination } from "swiper/modules"
import "swiper/css/autoplay"
import 'swiper/css/pagination'
import "swiper/css/bundle"
import 'swiper/css'
import Image from 'next/image'
import HeadComp from '@/layout/HeadComp'

const Index = () => {
    const [one, setOne] = useState(false)
    const [two, setTwo] = useState(false)
    const [three, setThree] = useState(false)
    const [four, setFour] = useState(false)
    const [five, setFive] = useState(false)
    const [six, setSix] = useState(false)
    const toggleVisibility = element => {
        switch (element) {
            case "one" :
                setOne(!one)
                break
            case "two" :
                setTwo(!two)
                break            
            case "three" :
                setThree(!three)
                break
            case "four" :
                setFour(!four)
                break
            case "five" :
                setFive(!five)
                break
            case "six" :
                setSix(!six)
                break
        }
    } 
  return (
    <>
        <HeadComp title="The Rich Impact - Home" />
        <main className="bg-white">
            <section className="bg-[#01020F] pt-[72px] pb-[3rem]">
                <div className="flex flex-col md:flex-row md:w-[90%] w-[95%] justify-between md:items-center mx-auto">
                    <div className="md:w-[56%]">
                        <h1 className="font-[700] wow fadeInDown font-clashGrotesk leading-[50px] md:leading-[70px] text-white text-[32px] md:text-[56px] uppercase">
                            Web3 Content Marketing Agency THAT Gives <span className="text-[#FCA311]">Clarity</span> to Your Complexity
                        </h1>
                        <p className="mt-[16px] text-[#FFFFFF] wow fadeInDown font-clashGrotesk leading-[26px] text-[18px] font-[400]">
                            The Rich Impact is a dedicated team of writers, strategists, and marketers with a decade of combined experience, on a mission to clear a deluge of low-quality, plagiarized, and misinformed content, one expertly crafted content at a time.
                        </p>
                        <button className="text-[15px] btn-ux wow fadeInDown text-white font-[600] mt-[32px] font-satoshi w-[200px] rounded-[8px] py-[10px] bg-[#FCA311]">
                            WORK WITH US
                        </button>
                    </div>
                    <div className="md:w-[36%] wow fadeInDown">
                        <Image alt="hero-img" height={1} width={600} className="" src="/images/hero-img.svg" />
                    </div>
                </div>
            </section>
            <section className="bg-white pt-[39px] md:py-[97px]">
                <h3 id="expertise" className="font-clashGrotesk wow fadeInDown md:text-[48px] text-[24px] text-[#453F3F] font-[500] text-center mb-[32px] md:mb-[42px]">EXPERTISE</h3>
                <div className="flex flex-col gap-[16px] md:gap-0 md:flex-row w-[95%] md:w-[90%] justify-between items-center mx-auto">
                    <div className="md:w-[32%] border wow fadeIn border-[#14213D99] h-max rounded-[10px] md:rounded-[24px] p-[10px]">
                        <Image alt="content-img" height={1} width={250} className="" src="/images/content.svg" />
                        <h3 className="text-[#2D2B4A] font-clashGrotesk font-[600] text-[24px]">Content Creation</h3>
                        <p className="font-clashGrotesk text-[18px] font-[400] text-[#666481] leading-[26px]">We prioritize comprehensive content strategies focused on producing high-quality content, ensuring efficient ddistribution, and maintaining a steady flow of impactful content across socail media and long-form platforms.</p>
                    </div>
                    <div className="md:w-[32%] border wow fadeIn border-[#14213D99] h-max rounded-[10px] md:rounded-[24px] p-[10px]">
                        <Image alt="soc-med-mgt-img" height={1} width={250} className="" src="/images/soc-med-mgt.svg" />
                        <h3 className="text-[#2D2B4A] font-clashGrotesk font-[600] text-[24px]">Social Media Management</h3>
                        <p className="font-clashGrotesk text-[18px] font-[400] text-[#666481] leading-[26px]">Expertly handle your brand’s social media presence, amplifying your message through strategic posts, timely engagement, and data-driven growth tactics.</p>
                    </div>
                    <div className="md:w-[32%] border wow fadeIn border-[#14213D99] h-max rounded-[10px] md:rounded-[24px] p-[10px]">
                        <Image alt="bd-dvpt-img" height={1} width={200} className="w-[40%]" src="/images/bd-dvpt.svg" />
                        <h3 className="text-[#2D2B4A] font-clashGrotesk font-[600] text-[24px]">Brand Development & Storytelling</h3>
                        <p className="font-clashGrotesk text-[18px] font-[400] text-[#666481] leading-[26px]">We masterfully weave your brand’s narrative into a compelling story, fostering a solid identity that resonates with your audience. Our strategic approach ensures your brand stands out in the Web3 ecosystem.</p>
                    </div>
                </div>
            </section>
            <section className="pt-[77px]">
                <div className="md:w-[90%] w-[95%] mx-auto">
                    <h3 className=" font-clashGrotesk wow fadeInDown text-[#453F3F] font-[500] text-[24px] md:text-[48px] items-center flex">
                        OUR PORTFOLIO
                        <Image alt="svg-icon" height={1} width={45} className="md:w-fit w-[2rem]" src="/images/arrow-up-right.svg" />
                    </h3>
                    <div className="mt-[42px] py-[20px] px-[10px] rounded-[8px] border border-[#14213D99]">
                        <h4 className="text-[#2D2B4A] font-[600] text-[24px] font-clashGrotesk wow fadeInDown">CryptoStart</h4>
                        <p className="text-[#666481] wow fadeIn font-clashGrotesk text-[18px] leading-[26px] font-[400] mt-[8px] mb-[24px]">
                            CryptoStart is a rising start in the crypto space, preparing to launch a ground breaking Defi protcol. The technical aspects are solid and advanced, but CryptoStart’s  small team lacks the content expertise to articulate their project and vision to diverse audience. 
                        </p>
                        <Link href="/component/portfolio ">
                            <button className="uppercase wow fadeIn text-[18px] font-satoshi font-[700] text-[#01020F99] py-[8px] px-[18px] btn-proto-two rounded-[10px]">Learn more</button>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="md:px-0 pt-[113px] pb-[50px]">
                <div className="mx-auto w-[95%] md:w-[90%]">
                    <h3 id="team" className="md:text-[48px] text-[24px] font-[500] font-clashGrotesk text-[#453F3F] wow fadeInDown">MEET THE TEAM</h3>
                    <div className="flex flex-wrap">
                        <div className="w-[18rem] p-2 wow fadeIn mx-auto mb-7">
                            <div className="rounded-[1rem] relative-div overflow-hidden w-fit h-fit">
                                <div className="w-full h-full border">
                                    <a href="https://twitter.com/Only1temmy" target="_blank">
                                        <Image alt="social-img" height={1} width={30} className="" src="/images/Twitter.svg" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/olayinka-hammed-temitope-467b2b195" target="_blank">
                                        <Image alt="social-img" height={1} width={30} src="/images/lnkdn.svg" />
                                    </a>
                                </div>
                                <Image src="/images/temitope.png" alt="team" className="img-ux" width={300} height={1} />
                            </div>
                            <p className=" font-clashGrotesk text-black font-[900] mt-[12px] text-[22px]">Temitope Olayinka</p>
                            <small className="font-clashGrotesk text-[#666481] text-[18px] font-[500]">CoFounder & Content Manager</small>
                        </div>
                        <div className="w-[18rem] p-2 wow fadeIn mx-auto mb-7">
                            <div className="rounded-[1rem] relative-div overflow-hidden w-fit h-fit">
                                <div className="w-full h-full border">
                                    <a href="https://twitter.com/iam_Riichard?t=4k3xziEgF_fkqyv9C_1xyg&s=09" target="_blank">
                                        <Image alt="social-img" height={1} width={30} className="" src="/images/Twitter.svg" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/richard-oluseye-16a023192" target="_blank">
                                        <Image alt="social-img" height={1} width={30} src="/images/lnkdn.svg" />
                                    </a>
                                </div>
                                <Image src="/images/richie.png" alt="team" className="img-ux" width={300} height={1} />
                            </div>
                            <p className=" font-clashGrotesk text-black font-[900] mt-[12px] text-[22px]">Richard Oluseye</p>
                            <small className="font-clashGrotesk text-[#666481] text-[18px] font-[500]">CoFounder & Content Manager</small>
                        </div>
                        <div className="w-[18rem] wow p-2 fadeIn mx-auto mb-7">
                            <div className="rounded-[1rem] relative-div w-fit h-fit overflow-hidden">
                                <div className="w-full h-full border">
                                    <a href="https://twitter.com/RubiksWeb3hub" target="_blank">
                                        <Image alt="social-img" height={1} width={30} className="" src="/images/Twitter.svg" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/rubiksweb3/" target="_blank">
                                        <Image alt="social-img" height={1} width={30} src="/images/lnkdn.svg" />
                                    </a>
                                </div>
                                <Image src="/images/wale.png" alt="team" className="img-ux" width={300} height={1} />
                            </div>
                            <p className=" font-clashGrotesk text-black font-[900] mt-[12px] text-[22px]">Olawale Abubakr</p>
                            <small className="font-clashGrotesk text-[#666481] text-[18px] font-[500]">Technical Writer</small>
                        </div>
                        <div className="w-[18rem] wow p-2 fadeIn mx-auto mb-7">
                            <div className="rounded-[1rem] relative-div overflow-hidden w-fit h-fit">
                                <div className="w-full h-full border">
                                    <a href="https://x.com/veetor4x?s=21" target="_blank">
                                        <Image alt="social-img" height={1} width={30} className="" src="/images/Twitter.svg" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/precious-ihie-613639246" target="_blank">
                                        <Image alt="social-img" height={1} width={30} src="/images/lnkdn.svg" />
                                    </a>
                                </div>
                                <Image src="/images/veetor.png" alt="team" className="img-ux" width={300} height={1} />
                            </div>
                            <p className=" font-clashGrotesk text-black font-[900] mt-[12px] text-[22px]">Precious Ihie</p>
                            <small className="font-clashGrotesk text-[#666481] text-[18px] font-[500]">Creative Lead</small>
                        </div>
                    </div>
                </div>
            </section> 
            <section className="bg-[#01020F] text-white py-[95px] md:py-[114px]">
                <h3 id="faqs" className=" font-satoshi text-[24px] md:text-[48px] font-[500] text-white text-center mb-[32px] wow fadeInDown">FAQS</h3>
                <div className="md:w-[60%] w-[90%] wow fadeIn mx-auto font-satoshi">
                    <div className={`${one ? "active" : ""} mb-[55px]`}>
                        <div className="flex items-center justify-between">
                            <h4 className="w-[80%] leading-[32px] text-[20px] md:text-[22px] font-[500]">What kind of content do you specialize in?</h4>
                            <button onClick={() => toggleVisibility("one")} className="">
                                <svg xmlns="http://www.w3.org/2000/svg" className="transition-[.4s]" width="25" height="25" viewBox="0 0 35 35" fill="none">
                                    <path d={`M17.5 29.1667C11.0687 29.1667 5.83329 23.9313 5.83329 17.5001C5.83329 11.0688 11.0687 5.83341 17.5 5.83341C23.9312 5.83341 29.1666 11.0688 29.1666 17.5001C29.1666 23.9313 23.9312 29.1667 17.5 29.1667ZM17.5 2.91675C15.5848 2.91675 13.6885 3.29396 11.9192 4.02684C10.1498 4.75972 8.54217 5.83392 7.18799 7.18811C4.45308 9.92301 2.91663 13.6323 2.91663 17.5001C2.91663 21.3678 4.45308 25.0771 7.18799 27.8121C8.54217 29.1662 10.1498 30.2404 11.9192 30.9733C13.6885 31.7062 15.5848 32.0834 17.5 32.0834C21.3677 32.0834 25.077 30.547 27.8119 27.8121C30.5468 25.0771 32.0833 21.3678 32.0833 17.5001C32.0833 15.585 31.7061 13.6886 30.9732 11.9193C30.2403 10.1499 29.1661 8.54229 27.8119 7.18811C26.4577 5.83392 24.8501 4.75972 23.0808 4.02684C21.3114 3.29396 19.4151 2.91675 17.5 ${one ? "2.91675ZM10.2083 18.9584H24.7916V16.0417H10.2083" : "2.91675ZM18.9583 10.2084H16.0416V16.0417H10.2083V18.9584H16.0416V24.7917H18.9583V18.9584H24.7916V16.0417H18.9583V10.2084Z"}`} fill="white"/>
                                </svg>
                            </button>
                        </div>
                        <div className={`answ overflow-hidden `}>
                            <p className="text-[18px] pt-[20px] leading-[24px]">
                                Our team has about a decade of combined experience in the Web3 industry. We ensure each piece of content undergoes rigorous checks for accuracy, relevance, and originality.
                            </p>
                        </div>
                    </div>
                    <div className={`${two ? "active" : ""} mb-[55px]`}>
                        <div className="flex items-center justify-between">
                            <h4 className="w-[80%] leading-[32px] text-[20px] md:text-[22px] font-[500]">How do you ensure the quality of your content?</h4>
                            <button onClick={() => toggleVisibility("two")} className="">
                                <svg xmlns="http://www.w3.org/2000/svg" className="transition-[.4s]" width="25" height="25" viewBox="0 0 35 35" fill="none">
                                    <path d={`M17.5 29.1667C11.0687 29.1667 5.83329 23.9313 5.83329 17.5001C5.83329 11.0688 11.0687 5.83341 17.5 5.83341C23.9312 5.83341 29.1666 11.0688 29.1666 17.5001C29.1666 23.9313 23.9312 29.1667 17.5 29.1667ZM17.5 2.91675C15.5848 2.91675 13.6885 3.29396 11.9192 4.02684C10.1498 4.75972 8.54217 5.83392 7.18799 7.18811C4.45308 9.92301 2.91663 13.6323 2.91663 17.5001C2.91663 21.3678 4.45308 25.0771 7.18799 27.8121C8.54217 29.1662 10.1498 30.2404 11.9192 30.9733C13.6885 31.7062 15.5848 32.0834 17.5 32.0834C21.3677 32.0834 25.077 30.547 27.8119 27.8121C30.5468 25.0771 32.0833 21.3678 32.0833 17.5001C32.0833 15.585 31.7061 13.6886 30.9732 11.9193C30.2403 10.1499 29.1661 8.54229 27.8119 7.18811C26.4577 5.83392 24.8501 4.75972 23.0808 4.02684C21.3114 3.29396 19.4151 2.91675 17.5 ${two ? "2.91675ZM10.2083 18.9584H24.7916V16.0417H10.2083" : "2.91675ZM18.9583 10.2084H16.0416V16.0417H10.2083V18.9584H16.0416V24.7917H18.9583V18.9584H24.7916V16.0417H18.9583V10.2084Z"}`} fill="white"/>
                                </svg>
                            </button>
                        </div>
                        <div className="overflow-hidden answ">
                            <p className="text-[18px] pt-[20px] leading-[24px]">
                                We specialize in various content types, including articles, white papers, social media content & man agement, technical documentation, SEO, and content strategy.
                            </p>
                        </div>
                    </div>
                    <div className={`${three ? "active" : ""} mb-[55px]`}>
                        <div className="flex items-center justify-between">
                            <h4 className="w-[80%] leading-[32px] text-[20px] md:text-[22px] font-[500]">What makes you different from other Web3 content agencies?</h4>
                            <button onClick={() => toggleVisibility("three")} className="">
                                <svg xmlns="http://www.w3.org/2000/svg" className="transition-[.4s]" width="25" height="25" viewBox="0 0 35 35" fill="none">
                                    <path d={`M17.5 29.1667C11.0687 29.1667 5.83329 23.9313 5.83329 17.5001C5.83329 11.0688 11.0687 5.83341 17.5 5.83341C23.9312 5.83341 29.1666 11.0688 29.1666 17.5001C29.1666 23.9313 23.9312 29.1667 17.5 29.1667ZM17.5 2.91675C15.5848 2.91675 13.6885 3.29396 11.9192 4.02684C10.1498 4.75972 8.54217 5.83392 7.18799 7.18811C4.45308 9.92301 2.91663 13.6323 2.91663 17.5001C2.91663 21.3678 4.45308 25.0771 7.18799 27.8121C8.54217 29.1662 10.1498 30.2404 11.9192 30.9733C13.6885 31.7062 15.5848 32.0834 17.5 32.0834C21.3677 32.0834 25.077 30.547 27.8119 27.8121C30.5468 25.0771 32.0833 21.3678 32.0833 17.5001C32.0833 15.585 31.7061 13.6886 30.9732 11.9193C30.2403 10.1499 29.1661 8.54229 27.8119 7.18811C26.4577 5.83392 24.8501 4.75972 23.0808 4.02684C21.3114 3.29396 19.4151 2.91675 17.5 ${three ? "2.91675ZM10.2083 18.9584H24.7916V16.0417H10.2083" : "2.91675ZM18.9583 10.2084H16.0416V16.0417H10.2083V18.9584H16.0416V24.7917H18.9583V18.9584H24.7916V16.0417H18.9583V10.2084Z"}`} fill="white"/>
                                </svg>
                            </button>
                        </div>
                        <div className="overflow-hidden answ">
                            <p className="text-[18px] pt-[20px] leading-[24px]">
                                TheRichImpact stands out with its commitment to quality over quantity, strong understanding & usage of AI tools to deliver the best work, deep industry knowledge, personalized strategies, and a forward-thinking aapproach. We go beyond simply writing content!
                            </p>
                        </div>
                    </div>
                    <div className={`${four ? "active" : ""} mb-[55px]`}>
                        <div className="flex items-center justify-between">
                            <h4 className="w-[80%] leading-[32px] text-[20px] md:text-[22px] font-[500]">Do you accept crypto payments?</h4>
                            <button onClick={() => toggleVisibility("four")} className="">
                                <svg xmlns="http://www.w3.org/2000/svg" className="transition-[.4s]" width="25" height="25" viewBox="0 0 35 35" fill="none">
                                    <path d={`M17.5 29.1667C11.0687 29.1667 5.83329 23.9313 5.83329 17.5001C5.83329 11.0688 11.0687 5.83341 17.5 5.83341C23.9312 5.83341 29.1666 11.0688 29.1666 17.5001C29.1666 23.9313 23.9312 29.1667 17.5 29.1667ZM17.5 2.91675C15.5848 2.91675 13.6885 3.29396 11.9192 4.02684C10.1498 4.75972 8.54217 5.83392 7.18799 7.18811C4.45308 9.92301 2.91663 13.6323 2.91663 17.5001C2.91663 21.3678 4.45308 25.0771 7.18799 27.8121C8.54217 29.1662 10.1498 30.2404 11.9192 30.9733C13.6885 31.7062 15.5848 32.0834 17.5 32.0834C21.3677 32.0834 25.077 30.547 27.8119 27.8121C30.5468 25.0771 32.0833 21.3678 32.0833 17.5001C32.0833 15.585 31.7061 13.6886 30.9732 11.9193C30.2403 10.1499 29.1661 8.54229 27.8119 7.18811C26.4577 5.83392 24.8501 4.75972 23.0808 4.02684C21.3114 3.29396 19.4151 2.91675 17.5 ${four ? "2.91675ZM10.2083 18.9584H24.7916V16.0417H10.2083" : "2.91675ZM18.9583 10.2084H16.0416V16.0417H10.2083V18.9584H16.0416V24.7917H18.9583V18.9584H24.7916V16.0417H18.9583V10.2084Z"}`} fill="white"/>
                                </svg>
                            </button>
                        </div>
                        <div className="overflow-hidden answ">
                            <p className="text-[18px] pt-[20px] leading-[24px]">
                                Yes, we take crypto payments only!
                            </p>
                        </div>
                    </div>
                    <div className={`${five ? "active" : ""} mb-[55px]`}>
                        <div className="flex items-center justify-between">
                            <h4 className="w-[80%] leading-[32px] text-[20px] md:text-[22px] font-[500]">How does The Rich impact handlre bigger projects?</h4>
                            <button onClick={() => toggleVisibility("five")} className="">
                                <svg xmlns="http://www.w3.org/2000/svg" className="transition-[.4s]" width="25" height="25" viewBox="0 0 35 35" fill="none">
                                    <path d={`M17.5 29.1667C11.0687 29.1667 5.83329 23.9313 5.83329 17.5001C5.83329 11.0688 11.0687 5.83341 17.5 5.83341C23.9312 5.83341 29.1666 11.0688 29.1666 17.5001C29.1666 23.9313 23.9312 29.1667 17.5 29.1667ZM17.5 2.91675C15.5848 2.91675 13.6885 3.29396 11.9192 4.02684C10.1498 4.75972 8.54217 5.83392 7.18799 7.18811C4.45308 9.92301 2.91663 13.6323 2.91663 17.5001C2.91663 21.3678 4.45308 25.0771 7.18799 27.8121C8.54217 29.1662 10.1498 30.2404 11.9192 30.9733C13.6885 31.7062 15.5848 32.0834 17.5 32.0834C21.3677 32.0834 25.077 30.547 27.8119 27.8121C30.5468 25.0771 32.0833 21.3678 32.0833 17.5001C32.0833 15.585 31.7061 13.6886 30.9732 11.9193C30.2403 10.1499 29.1661 8.54229 27.8119 7.18811C26.4577 5.83392 24.8501 4.75972 23.0808 4.02684C21.3114 3.29396 19.4151 2.91675 17.5 ${five ? "2.91675ZM10.2083 18.9584H24.7916V16.0417H10.2083" : "2.91675ZM18.9583 10.2084H16.0416V16.0417H10.2083V18.9584H16.0416V24.7917H18.9583V18.9584H24.7916V16.0417H18.9583V10.2084Z"}`} fill="white"/>
                                </svg>
                            </button>
                        </div>
                        <div className="overflow-hidden answ">
                            <p className="text-[18px] pt-[20px] leading-[24px]">
                                We begin each campaign by understanding your vision and goals. For larger, ongoing projects, we ensure regular updates, swift turnaround, and continous collaboration with our clients to meet their evolving needs.
                            </p>
                        </div>
                    </div>
                    <div className={`${six ? "active" : ""} mb-[55px]`}>
                        <div className="flex items-center justify-between">
                            <h4 className="w-[80%] leading-[32px] text-[20px] md:text-[22px] font-[500]">How can i get started with The Rich Impact?</h4>
                            <button onClick={() => toggleVisibility("six")} className="">
                                <svg xmlns="http://www.w3.org/2000/svg" className="transition-[.4s]" width="25" height="25" viewBox="0 0 35 35" fill="none">
                                    <path d={`M17.5 29.1667C11.0687 29.1667 5.83329 23.9313 5.83329 17.5001C5.83329 11.0688 11.0687 5.83341 17.5 5.83341C23.9312 5.83341 29.1666 11.0688 29.1666 17.5001C29.1666 23.9313 23.9312 29.1667 17.5 29.1667ZM17.5 2.91675C15.5848 2.91675 13.6885 3.29396 11.9192 4.02684C10.1498 4.75972 8.54217 5.83392 7.18799 7.18811C4.45308 9.92301 2.91663 13.6323 2.91663 17.5001C2.91663 21.3678 4.45308 25.0771 7.18799 27.8121C8.54217 29.1662 10.1498 30.2404 11.9192 30.9733C13.6885 31.7062 15.5848 32.0834 17.5 32.0834C21.3677 32.0834 25.077 30.547 27.8119 27.8121C30.5468 25.0771 32.0833 21.3678 32.0833 17.5001C32.0833 15.585 31.7061 13.6886 30.9732 11.9193C30.2403 10.1499 29.1661 8.54229 27.8119 7.18811C26.4577 5.83392 24.8501 4.75972 23.0808 4.02684C21.3114 3.29396 19.4151 2.91675 17.5 ${six ? "2.91675ZM10.2083 18.9584H24.7916V16.0417H10.2083" : "2.91675ZM18.9583 10.2084H16.0416V16.0417H10.2083V18.9584H16.0416V24.7917H18.9583V18.9584H24.7916V16.0417H18.9583V10.2084Z"}`} fill="white"/>
                                </svg>
                            </button>
                        </div>
                        <div className="overflow-hidden answ">
                            <p className="text-[18px] pt-[20px] leading-[24px]">
                                Getting started is simple. You can reach us via the &quot;Work With Us&quot; from our website or by email. We’re eager to learn about your project and ready to discuss how we can help supercharge your content.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white py-[56px] md:pt-[100px]">
                <h3 className="text-[#01020F] font-clashGrotesk text-[24px] md:text-[48px] font-[500] text-center mb-[39px] md:mb-[42px] wow fadeInDown">PARTNERS</h3>
                <div className="md:w-[90%] w-[95%] mx-auto flex gap-[32px] md:gap-[64px] pb-[1rem] overflow-x-auto">
                    <Image src="/images/alien.svg" className="md:w-[90px] w-[60px] wow fadeIn mx-auto h-[50px] md:h-[100px]" alt="partners" height={1} width={200} />
                    <Image src="/images/tg.svg" className="md:w-[90px] w-[60px] wow fadeIn mx-auto h-[50px] md:h-[100px]" alt="partners" height={1} width={200} />
                    <Image src="/images/pontys.svg" className="md:w-[90px] w-[60px] wow fadeIn mx-auto h-[50px] md:h-[100px]" alt="partners" height={1} width={200} />
                    <Image src="/images/hera.svg" className="md:w-[90px] w-[60px] wow fadeIn mx-auto h-[50px] md:h-[100px]" alt="partners" height={1} width={200} />
                    <Image src="/images/leaf.svg" className="md:w-[90px] w-[60px] wow fadeIn mx-auto h-[50px] md:h-[100px]" alt="partners" height={1} width={200} />
                    <Image src="/images/img.svg" className="md:w-[90px] w-[60px] wow fadeIn mx-auto h-[50px] md:h-[100px]" alt="partners" height={1} width={200} />
                    <Image src="/images/brave.svg" className="md:w-[90px] w-[60px] wow fadeIn mx-auto h-[50px] md:h-[100px]" alt="partners" height={1} width={200} />
                    <Image src="/images/circle.svg" className="md:w-[90px] w-[60px] wow fadeIn mx-auto h-[50px] md:h-[100px]" alt="partners" height={1} width={200} />
                </div>
            </section>
            <h3 className="text-[#01020F] font-clashGrotesk mt-[50px] md:mt-[91px] text-[24px] md:text-[48px] font-[500] text-center text-[24px] md:mb-[42px] mb-[32px] wow fadeInDown">TESTIMONIALS</h3>
            <section className="bg-white hidden md:block pb-[92px]">
                <div className="w-[90%] wow fadeIn mx-auto">
                    <Swiper
                        grabCursor={true}
                        pagination={{
                            dynamicBullets: true,
                            clickable: true,
                        }}
                        modules={[A11y, Autoplay, Pagination]}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        spaceBetween={50}
                        slidesPerView={3}
                        >
                            <SwiperSlide className='bxshadw my-[1rem] px-5 py-7 rounded-[8px]'>
                                <div className="flex mb-[15px] gap-[5px]">
                                    <Image src="/images/star.svg" alt="rating" height={1} width={20} />
                                    <Image src="/images/star.svg" alt="rating" height={1} width={20} />
                                    <Image src="/images/star.svg" alt="rating" height={1} width={20} />
                                    <Image src="/images/star.svg" alt="rating" height={1} width={20} />
                                    <Image src="/images/star.svg" alt="rating" height={1} width={20} />
                                </div>
                                <p className="mb-[1rem] font-clashGrotesk text-[18px]">
                                    These guys have good writing skills and media use and have helped me write content for various Defi projects. They always provide sound, creative content using data and media where applicable. <br />
                                    Content generally focuses on statistic, recent notable achievements & upcoming catalysts.
                                </p>
                                <div className="flex justify-between items-center">
                                    <Image src="/images/ChadCaff.svg" className='rounded-[50%]' alt="pfp-img" height={1} width={50} />
                                    <p className="font-satoshi w-[80%] text-[16px] font-[900]">
                                        ChadCaff
                                    </p>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide className='bxshadw my-[1rem] px-5 py-7 rounded-[8px]'>
                                <div className="flex mb-[15px] gap-[5px]">
                                    <Image src="/images/star.svg" alt="rating" height={1} width={20} />
                                    <Image src="/images/star.svg" alt="rating" height={1} width={20} />
                                    <Image src="/images/star.svg" alt="rating" height={1} width={20} />
                                    <Image src="/images/star.svg" alt="rating" height={1} width={20} />
                                    <Image src="/images/star.svg" alt="rating" height={1} width={20} />
                                </div>
                                <p className="mb-[1rem] font-clashGrotesk text-[18px]">
                                    Choosing TheRichImpact was the right call for our brand. Their team’s expertise in crypto and Web3 at large has given us a competitive edge. <br />
                                    Working with them feels like collaborating with friends who genuinely care about our success.
                                </p>
                                <div className="flex justify-between items-center">
                                    <Image src="/images/Victory.svg" className='rounded-[50%]' alt="pfp-img" height={1} width={50} />
                                    <p className="font-satoshi w-[80%] text-[16px] font-[900]">
                                        Victory
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='bxshadw my-[1rem] px-5 py-7 rounded-[8px]'>
                                <div className="flex mb-[15px] gap-[5px]">
                                    <Image src="/images/star.svg" alt="rating" height={1} width={20} />
                                    <Image src="/images/star.svg" alt="rating" height={1} width={20} />
                                    <Image src="/images/star.svg" alt="rating" height={1} width={20} />
                                    <Image src="/images/star.svg" alt="rating" height={1} width={20} />
                                    <Image src="/images/star.svg" alt="rating" height={1} width={20} />
                                </div>
                                <p className="mb-[1rem] font-clashGrotesk text-[18px]">
                                    I was skeptical about their team at first, but they proved me wrong. I was constantly impressed by their ability to transform intricate Web3  concepts into captivating narratives. What sets them apart is their dedication to quality and authenticity.
                                </p>
                                <div className="flex justify-between items-center">
                                    <Image src="/images/robert.svg" className='rounded-[50%]' alt="pfp-img" height={1} width={50} />
                                    <p className="font-satoshi w-[80%] text-[16px] font-[900]">
                                        Sir. Robert
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='bxshadw my-[1rem] px-5 py-7 rounded-[8px]'>
                                <div className="flex mb-[15px] gap-[5px]">
                                    <Image src="/images/star.svg" alt="rating" height={1} width={20} />
                                    <Image src="/images/star.svg" alt="rating" height={1} width={20} />
                                    <Image src="/images/star.svg" alt="rating" height={1} width={20} />
                                    <Image src="/images/star.svg" alt="rating" height={1} width={20} />
                                    <Image src="/images/star.svg" alt="rating" height={1} width={20} />
                                </div>
                                <p className="mb-[1rem] font-clashGrotesk text-[18px]">
                                    These guys are really solid & amazing when it comes to their work. They have individually helped me with content, content ideas, graphics, etc, seeing them come together like this is pure excellence. They make my content approachable and exciting. It’s always a pleasure seeing their fresh takes on complex DeFi topics.
                                </p>
                                <div className="flex justify-between items-center">
                                    <Image src="/images/samuel.svg" className='rounded-[50%]' alt="pfp-img" height={1} width={50} />
                                    <p className="font-satoshi w-[80%] text-[16px] font-[900]">
                                        Samuel Xeus
                                    </p>
                                </div>
                            </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <section className="md:hidden w-[95%] mx-auto">
                <div className=' my-[1rem] px-2 py-7 rounded-[8px]'>
                    <div className="flex mb-[15px] gap-[5px]">
                        <Image src="/images/star.svg" alt="rating" height={1} width={20} />
                        <Image src="/images/star.svg" alt="rating" height={1} width={20} />
                        <Image src="/images/star.svg" alt="rating" height={1} width={20} />
                        <Image src="/images/star.svg" alt="rating" height={1} width={20} />
                        <Image src="/images/star.svg" alt="rating" height={1} width={20} />
                    </div>
                    <p className="mb-[1rem] font-clashGrotesk text-[18px]">
                        These guys have good writing skills and media use and have helped me write content for various Defi projects. They always provide sound, creative content using data and media where applicable. <br />
                        Content generally focuses on statistic, recent notable achievements & upcoming catalysts.
                    </p>
                    <div className="flex gap-[16px] justify-between items-center">
                        <Image src="/images/ChadCaff.svg" className='rounded-[50%]' alt="pfp-img" height={1} width={50} />
                        <p className="font-satoshi w-[80%] text-[16px] font-[900]">
                            ChadCaff
                        </p>
                    </div>

                </div>
                <div className=' my-[1rem] px-2 py-7 rounded-[8px]'>
                    <div className="flex mb-[15px] gap-[5px]">
                        <Image src="/images/star.svg" alt="rating" height={1} width={20} />
                        <Image src="/images/star.svg" alt="rating" height={1} width={20} />
                        <Image src="/images/star.svg" alt="rating" height={1} width={20} />
                        <Image src="/images/star.svg" alt="rating" height={1} width={20} />
                        <Image src="/images/star.svg" alt="rating" height={1} width={20} />
                    </div>
                    <p className="mb-[1rem] font-clashGrotesk text-[18px]">
                        Choosing TheRichImpact was the right call for our brand. Their team’s expertise in crypto and Web3 at large has given us a competitive edge. <br />
                        Working with them feels like collaborating with friends who genuinely care about our success.
                    </p>
                    <div className="flex gap-[16px] justify-between items-center">
                        <Image src="/images/Victory.svg" className='rounded-[50%]' alt="pfp-img" height={1} width={50} />
                        <p className="font-satoshi w-[80%] text-[16px] font-[900]">
                            Victory
                        </p>
                    </div>
                </div>
                <div className=' my-[1rem] px-2 py-7 rounded-[8px]'>
                    <div className="flex mb-[15px] gap-[5px]">
                        <Image src="/images/star.svg" alt="rating" height={1} width={20} />
                        <Image src="/images/star.svg" alt="rating" height={1} width={20} />
                        <Image src="/images/star.svg" alt="rating" height={1} width={20} />
                        <Image src="/images/star.svg" alt="rating" height={1} width={20} />
                        <Image src="/images/star.svg" alt="rating" height={1} width={20} />
                    </div>
                    <p className="mb-[1rem] font-clashGrotesk text-[18px]">
                        I was skeptical about their team at first, but they proved me wrong. I was constantly impressed by their ability to transform intricate Web3  concepts into captivating narratives. What sets them apart is their dedication to quality and authenticity.
                    </p>
                    <div className="flex gap-[16px] justify-between items-center">
                        <Image src="/images/robert.svg" className='rounded-[50%]' alt="pfp-img" height={1} width={50} />
                        <p className="font-satoshi w-[80%] text-[16px] font-[900]">
                            Sir. Robert
                        </p>
                    </div>
                </div>
                <div className=' my-[1rem] px-2 py-7 rounded-[8px]'>
                    <div className="flex mb-[15px] gap-[5px]">
                        <Image src="/images/star.svg" alt="rating" height={1} width={20} />
                        <Image src="/images/star.svg" alt="rating" height={1} width={20} />
                        <Image src="/images/star.svg" alt="rating" height={1} width={20} />
                        <Image src="/images/star.svg" alt="rating" height={1} width={20} />
                        <Image src="/images/star.svg" alt="rating" height={1} width={20} />
                    </div>
                    <p className="mb-[1rem] font-clashGrotesk text-[18px]">
                        These guys are really solid & amazing when it comes to their work. They have individually helped me with content, content ideas, graphics, etc, seeing them come together like this is pure excellence. They make my content approachable and exciting. It’s always a pleasure seeing their fresh takes on complex DeFi topics.
                    </p>
                    <div className="flex gap-[16px] justify-between items-center">
                        <Image src="/images/samuel.svg" className='rounded-[50%]' alt="pfp-img" height={1} width={50} />
                        <p className="font-satoshi w-[80%] text-[16px] font-[900]">
                            Samuel Xeus
                        </p>
                    </div>
                </div>
            </section>
        </main>
    </>
  )
}

export default Index
