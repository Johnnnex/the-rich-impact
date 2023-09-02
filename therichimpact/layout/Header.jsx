import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="px-[124px]">
        <div className="">
            <Image alt="logo-img" height={1} width={100} className="fixed" src="/images/site-logo.svg" />
        </div>
        <nav className="">
            <ul className="">
                <li className="">OUR EXPERTISE</li>
                <li className="">PORTFOLIO</li>
                <li className="">OUR TEAM</li>
                <li className="">FAQS</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
