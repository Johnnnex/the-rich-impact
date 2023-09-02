import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="mx-[124px] flex justify-between">
        <div className="">
            <Image alt="logo-img" height={1} width={100} className="fixed" src="/images/site-logo.svg" />
        </div>
        <nav className="flex items-center">
            <ul className="text-[14px] font-[500] font-clashGrotesk gap-[32px] flex">
                <li className="">OUR EXPERTISE</li>
                <li className="">PORTFOLIO</li>
                <li className="">OUR TEAM</li>
                <li className="">FAQS</li>
            </ul>
            <button className="text-[14px] font-[700] font-clashGrotesk w-[200px] rounded-[16px] py-[20px] bg-[#FCA311]">
                WORK WITH US
            </button>
        </nav>
    </header>
  )
}

export default Header
