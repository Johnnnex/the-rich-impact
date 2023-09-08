import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="py-[13px] bg-[#01020F] ">
        <div className="w-[90%] mx-auto flex items-center justify-between">
            <div className="">
                <Image alt="logo-img" height={1} width={100} className="" src="/images/site-logo.svg" />
            </div>
            <nav className="flex items-center text-white gap-[74px]">
                <ul className="text-[18px] font-[500] font-clashGrotesk gap-[32px] flex">
                    <Link href="/#experts">
                        <li className="">OUR EXPERTISE</li>
                    </Link>
                    <Link href="/component/portfolio">
                        <li className="">PORTFOLIO</li>
                    </Link>
                    <Link href="/#team">
                        <li className="">OUR TEAM</li>
                    </Link>
                    <Link href="/#faqs">
                        <li className="">FAQS</li>
                    </Link>
                </ul>
                <button className="text-[15px] font-[600] font-satoshi w-[200px] rounded-[8px] py-[10px] bg-[#FCA311]">
                    WORK WITH US
                </button>
            </nav>
        </div>
    </header>
  )
}

export default Header
