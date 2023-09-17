import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const Footer = () => {
  const [visibility, setVisibility] = useState(null)
  const scroll = () => {
    if (window.scrollY > 0) {
      setVisibility(true)
    }
    else {
      setVisibility(false)
    }
  }
  const scrollTop = () => {
    window.scrollTo(0,0)
  }
  useEffect(() => {
    const scrollInt = () => setInterval(scroll, 100)
    scrollInt()
    return () => {
      clearInterval(scrollInt)
    }
  }, [])
  return (
    <>
      <button onClick={scrollTop} className={`fixed transition-[.4s] ${visibility ? "opacity-100" : "opacity-0"} bottom-[10vh] border anim-action border-[#01020F] right-[5px] rounded-[20px] flex items-center justify-center`}>
        <svg width="2rem" height="4rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 15L12 9L18 15M12 15H12.01" stroke="#01020F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <footer className="md:py-[70px] py-[40px] bg-[#01020F]">
        <section className="md:w-[85%] gap-[14px] md:gap-0 w-[90%] flex flex-col md:flex-row justify-between md:items-center mx-auto">
          <div className="">
            <Image alt="logo-img" height={1} width={100} className="" src="/images/site-logo.svg" />
          </div>
          <p className="text-white font-clashGrotesk text-[14px] w-[80%] md:w-fit md:text-[18px] font-[500]">
            &copy; 2023 The Rich Impact. All rights reserved
          </p>
          <div className="flex gap-[12px]">
            <a href="https://twitter.com/Therichimpact?t=osZKyvM28Uiua84bpyF1RA&s=09" target="_blank">
                <Image alt="social-img" height={1} width={30} className="" src="/images/Twitter.svg" />
            </a>
            <a href="https://www.linkedin.com/company/therichimpact/" target="_blank">
                <Image alt="social-img" height={1} width={30} src="/images/lnkdn.svg" />
            </a>
          </div>
        </section>
      </footer>
    </>
  )
}

export default Footer
