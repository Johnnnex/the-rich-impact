import React from 'react'
import Link from 'next/link'
import HeadComp from '@/layout/HeadComp'
import Image from 'next/image'

const Portfolio = () => {
  return (
    <>
        <HeadComp title="The Rich Impact - Portfolio" />
        <section className="">
          <div className="w-[90%] mx-auto mt-[49px]">
            <Link href="/">
              <button className="btn-proto-two rounded-[100px] w-[106px] mb-[49px] flex items-center justify-center h-[52px]">
                <Image src="/images/arrow-left.svg" alt="svg-img" width={30} height={1} />
              </button>
            </Link>
            <h2 className="mb-[8px] font-clashGrotesk text-[24px] text-[#2D2B4A] font-[600]">THE CHALLENGE 😦</h2>
            <p className=" font-clashGrotesk text-[18px] font-[400] mb-[40px]">
              CryptoStart is a rising start in the crypto space, preparing to launch a ground breaking Defi protcol. The technical aspects are solid and advanced, but CryptoStart’s  small team lacks the content expertise to articulate their project and vision to diverse audience.  They need high-quality, relatble, and impactful content that can bridge the gap between complex tech jargon and the averge investor or user in the crypto space.
            </p>
            <h2 className="mb-[42px] font-clashGrotesk text-[24px] text-[#2D2B4A] font-[600]">THE RICH IMPACT’S APPROACH 😇</h2>
            <div className="flex gap-[80px] mb-[40px]">
              <div className="p-[10px] w-[50%] rounded-[8px] border border-[#666481]">
                <h3 className=" font-clashGrotesk text-[24px] font-[500] text-[#14213D]">Research and Understanding:</h3>
                <p className="text-[18px] font-clashGrotesk font-[400] leading-[28px] text-[#666481]">
                  We started with a comprehensive analysis of CryptoStart&apos;s project, spending hours with their whitepaper, technical drafts, and project roadmap. We engaged in multiple brainstorming sessions with CryptoStart&apos;s team to understand their mission, vision, and the problem their product aims to solve in the DeFi space.
                </p>
              </div>
              <div className="p-[10px] w-[50%] rounded-[8px] border border-[#666481]">
                <h3 className=" font-clashGrotesk text-[24px] font-[500] text-[#14213D]">Content Strategy Planning:</h3>
                <p className="text-[18px] font-clashGrotesk font-[400] leading-[28px] text-[#666481]">
                  Based on our findings, we develop a customized content strategy tailored to CryptoStart&apos;s goals and target audience. This involves identifying the key messages, the best content platforms, and a distribution schedule for optimum impact.
                </p>
              </div>
            </div>
            <h2 className="mb-[24px] font-clashGrotesk text-[24px] text-[#2D2B4A] font-[600]">SOLUTION</h2>
            <div className="flex gap-[80px] mb-[24px]">
              <div className="p-[10px] w-[50%] rounded-[8px] border border-[#666481]">
                <h3 className=" font-clashGrotesk text-[24px] font-[500] text-[#14213D]">Content Creation:</h3>
                <p className="text-[18px] font-clashGrotesk font-[400] leading-[28px] text-[#666481]">
                  Articles: We designed a series of blog articles covering various aspects of the project. These articles delve into topics loke the vision behind the projet, technical elements explained in layperson&apos;s terms, and the potential impact on the DeFi industry.
                </p>
              </div>
              <div className="p-[10px] w-[50%] rounded-[8px] border border-[#666481]">
                <h3 className=" font-clashGrotesk text-[24px] font-[500] text-[#14213D]">Social Media Content :</h3>
                <p className="text-[18px] font-clashGrotesk font-[400] leading-[28px] text-[#666481]">
                  We created engaging posts and snippets from the whitepaper and blog articles for CryptoStart&apos;s social media. This multi-platform approach targets different audience segments, from tech-savy blockchain enthusiasts to curious newbies.
                </p>
              </div>
            </div>
            <div className="flex gap-[80px] mb-[40px]">
              <div className="p-[10px] w-[50%] rounded-[8px] border border-[#666481]">
                <h3 className=" font-clashGrotesk text-[24px] font-[500] text-[#14213D]">Technical Documentation:</h3>
                <p className="text-[18px] font-clashGrotesk font-[400] leading-[28px] text-[#666481]">
                  Our team drats user-friendly guides and FAQ sections, enabling users and developers to interact with CryptoStart&apos;s protocol effortlessly.
                </p>
              </div>
              <div className="p-[10px] w-[50%] rounded-[8px] border border-[#666481]">
                <h3 className=" font-clashGrotesk text-[24px] font-[500] text-[#14213D]">Content Distribution :</h3>
                <p className="text-[18px] font-clashGrotesk font-[400] leading-[28px] text-[#666481]">
                  We ensured the content reached the right platforms at the right time, emphasizing popular media platforms within the crypto and blockchain communities.
                </p>
              </div>
            </div>
            <h2 className="font-clashGrotesk text-[24px] text-[#2D2B4A] font-[600]">THE RESULT</h2>
            <p className="text-[#666481] font-[400] font-clashGrotesk text-[18px] mb-[79px]">
              In this scenario, CryptoStart&apos;s compelling, concise content generates tractions for the project. Their complex protocol becomes a topic of interest, not just for tech-savvy enthusiasts but also for mainstream investors and users. <br />
              User-generated content started flowing in, influencers & brands started pushing for partnerships. The quality and clarity of the content position CryptoStart as a thought leader in the DeFi space, and they started building a community around their brand.
            </p>
          </div>
        </section>
    </>
  )
}

export default Portfolio
