import HeadComp from '@/layout/HeadComp'
import React from 'react'
import Image from "next/image"

const Patner = () => {
  return (
    <>
        <HeadComp title="The Rich Impact - Work With Us" />
        <main className="bg-[#01020F] pt-[100px] md:pt-[72px]">
            <section className="flex justify-between items-center w-[80%] mx-auto">
                <div className="w-[45%]">
                    <h2 className=" font-satoshi text-white text-[32px] mb-[32px] font-[700]">Ready To Work With Us?</h2>
                    <div className="mb-[16px]">
                        <input type="text"  placeholder="Name (or Company's Name)" className="w-full h-[58px] hover:bg-[#ffffff4c] transition-[.6s] focus:bg-[#ffffff4c] py-[15px] px-[10px] outline-none font-satoshi text-white font-[400] text-[18px] bg-[#FFFFFF66]" />
                    </div>
                    <div className="mb-[16px]">
                        <input type="text" placeholder="Email (or Telegram handle)" className="w-full hover:bg-[#ffffff4c] transition-[.6s] h-[58px] p-[15px] outline-none focus:bg-[#ffffff4c] font-satoshi text-white font-[400] text-[18px] bg-[#FFFFFF66]" />
                    </div>
                    <div className="mb-[40px]">
                        <textarea name="" className="w-full hover:bg-[#ffffff4c] transition-[.6s] p-[15px] outline-none focus:bg-[#ffffff4c] font-satoshi text-white font-[400] text-[18px] bg-[#FFFFFF66]" id=""></textarea>
                    </div>
                    <div className="">
                        <button className="w-full py-[24px] btn-ux-b text-white font-satoshi bg-[#FCA311] font-[700] text-[18px] rounded-[16px]">SEND</button>
                    </div>
                </div>
                <div className="w-[45%]">
                    <Image src="/images/mail-img.svg" alt="" height={1} width={500}/>
                </div>
            </section>
        </main>
    </>
  )
}

export default Patner
