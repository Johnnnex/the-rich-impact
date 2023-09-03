import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="py-[13px] bg-[#01020F] ">
        <div className="w-[90%] mx-auto flex justify-between">
            <div className="">
                <Image alt="logo-img" height={1} width={100} className="" src="/images/site-logo.svg" />
            </div>
            <nav className="flex items-center text-white gap-[74px]">
                <ul className="text-[15px] font-[500] font-clashGrotesk gap-[32px] flex">
                    <li className="">OUR EXPERTISE</li>
                    <li className="">PORTFOLIO</li>
                    <li className="">OUR TEAM</li>
                    <li className="">FAQS</li>
                </ul>
                <button className="text-[15px] font-[700] font-clashGrotesk w-[200px] rounded-[8px] py-[10px] bg-[#FCA311]">
                    WORK WITH US
                </button>
            </nav>
        </div>
    </header>
  )
}

export default Header
