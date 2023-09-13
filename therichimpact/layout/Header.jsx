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
                <Link href="/">
                    <Image alt="logo-img" height={1} width={100} className="" src="/images/site-logo.svg" />
                </Link>
            </div>
            <nav className="flex hidden items-center text-white gap-[74px]">
                <ul className="text-[18px] font-[500] font-clashGrotesk gap-[12px] flex">
                    {links}
                </ul>
                <button className="text-[15px] btn-ux font-[600] font-satoshi w-[200px] rounded-[8px] py-[10px] bg-[#FCA311]">
                    WORK WITH US
                </button>
            </nav>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M5.33333 10.6667H26.6667M5.33333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M5.33333 10.6667H26.6667M5.33333 21.3334H18.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg> */}
            {/* <svg viewBox="0 -0.5 25 25" fill="none" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> <path d="M5.5 7.75C5.08579 7.75 4.75 8.08579 4.75 8.5C4.75 8.91421 5.08579 9.25 5.5 9.25V7.75ZM19.5 9.25C19.9142 9.25 20.25 8.91421 20.25 8.5C20.25 8.08579 19.9142 7.75 19.5 7.75V9.25ZM5.5 11.75C5.08579 11.75 4.75 12.0858 4.75 12.5C4.75 12.9142 5.08579 13.25 5.5 13.25V11.75ZM17.5 13.25C17.9142 13.25 18.25 12.9142 18.25 12.5C18.25 12.0858 17.9142 11.75 17.5 11.75V13.25ZM5.5 15.75C5.08579 15.75 4.75 16.0858 4.75 16.5C4.75 16.9142 5.08579 17.25 5.5 17.25V15.75ZM12.5 17.25C12.9142 17.25 13.25 16.9142 13.25 16.5C13.25 16.0858 12.9142 15.75 12.5 15.75V17.25ZM5.5 9.25H19.5V7.75H5.5V9.25ZM5.5 13.25H17.5V11.75H5.5V13.25ZM5.5 17.25H12.5V15.75H5.5V17.25Z" fill="#fff"></path> </g>
            </svg> */}
        </div>
    </header>
  )
}

export default Header
