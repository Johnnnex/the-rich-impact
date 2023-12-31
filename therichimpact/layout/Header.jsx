import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
    const {pathname, asPath, events} = useRouter()
    const [navState, toggleNavState] = useState(false)
	const navLinks = [
		{ key: 1, title: "OUR EXPERTISE", path: "/#expertise" },
		{ key: 2, title: "PORTFOLIO", path: "/component/portfolio" },
		{ key: 3, title: "OUR TEAM", path: "/#team" },
		{ key: 4, title: "FAQS", path: "/#faqs" },
	]
    const links = navLinks.map(({path, key, title}) => (
		<Link key={key} href={path}>
            <li className={`${pathname === path || asPath === path ? "activeLink" : ""} navLink px-[16px] py-[5px]`}>{title}</li>
        </Link>
	))
    const toggleNav = () => {
        toggleNavState(!navState)
    }
    useEffect(() => {
        const onHashChangeStart = (url) => {
            toggleNavState(false)
        };

        events.on("hashChangeStart", onHashChangeStart)
        events.on("routeChangeStart", onHashChangeStart)

        return () => {
            events.off("hashChangeStart", onHashChangeStart)
            events.off("routeChangeStart", onHashChangeStart)
        };
    }, [events]);
  return (
    <header className="py-[13px] fixed z-[4] md:relative w-full bg-[#01020F] ">
        <div className="w-[90%] mx-auto flex items-center justify-between">
            <div className="z-[2]">
                <Link href="/">
                    <Image alt="logo-img" height={1} width={100} className="" src="/images/site-logo.svg" />
                </Link>
            </div>
            <nav className={`bg-[#01020F] ${navState ? "translate-y-0" : "translate-y-[-100%] md:translate-y-0"} md:bg-transparent fixed transition-[.4s] w-full left-0 md:w-fit pt-[20vh] md:pt-0 top-0 h-full md:h-fit md:relative `}>
                <div className="flex flex-col md:flex-row items-center text-center text-white gap-[8vh] md:gap-[30px]">
                    <ul className="text-[18px] font-[500] font-clashGrotesk md:gap-[2px] gap-[4vh] flex-col md:flex-row flex">
                        {links}
                    </ul>
                    <Link href="/component/patner">
                        <button className="text-[15px] btn-ux font-[600] font-satoshi w-[200px] rounded-[8px] py-[10px] bg-[#FCA311]">
                            WORK WITH US
                        </button>
                    </Link>
                </div>
            </nav>
            <button type='button' onClick={toggleNav} className="z-[2] md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" className={`transition-[.4s] ${navState ? "hidden" : ""}`} height="32" viewBox="0 0 32 1" fill="none">
                    <path d="M5.33333 10.6667H26.6667M5.33333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" className={`transition-[.4s] ${navState ? "rotate-[45deg] translate-x-[10%] translate-y-[13%]" : "hidden"}`} height="32" viewBox="0 10 32 2" fill="none">
                    <path d="M5.333333 21.3334H18.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" className={`transition-[.4s] ${navState ? "rotate-[-45deg] translate-y-[-50%] translate-x-[20%]" : ""}`} height="32" viewBox="0 20 32 32" fill="none">
                    <path d="M5.333333 21.3334H18.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
        </div>
    </header>
  )
}

export default Header
