import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
    const {pathname, asPath} = useRouter();
	const navLinks = [
		{ key: 1, title: "OUR EXPERTISE", path: "/#expertise" },
		{ key: 2, title: "PORTFOLIO", path: "/component/portfolio" },
		{ key: 2, title: "OUR TEAM", path: "/#team" },
		{ key: 3, title: "FAQS", path: "/#faqs" },
	]
    const links = navLinks.map(({path, key, title}) => (
		<Link key={key} href={path}>
            <li className={`${pathname === path || asPath === path ? "activeLink" : ""} navLink px-[16px] py-[5px]`}>{title}</li>
        </Link>
	))
  return (
    <header className="py-[13px] bg-[#01020F] ">
        <div className="w-[90%] mx-auto flex items-center justify-between">
            <div className="">
                <Image alt="logo-img" height={1} width={100} className="" src="/images/site-logo.svg" />
            </div>
            <nav className="flex items-center text-white gap-[74px]">
                <ul className="text-[18px] font-[500] font-clashGrotesk gap-[12px] flex">
                    {links}
                </ul>
                <button className="text-[15px] btn-ux font-[600] font-satoshi w-[200px] rounded-[8px] py-[10px] bg-[#FCA311]">
                    WORK WITH US
                </button>
            </nav>
        </div>
    </header>
  )
}

export default Header
