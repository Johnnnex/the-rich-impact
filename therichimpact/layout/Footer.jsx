import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="py-[70px] bg-[#01020F]">
      <section className="w-[85%] flex justify-between items-center mx-auto">
        <div className="">
          <Image alt="logo-img" height={1} width={100} className="" src="/images/site-logo.svg" />
        </div>
        <p className="text-white font-clashGrotesk text-[18px] font-[500]">
          2023 The Rich Impact. All rights reserved
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
  )
}

export default Footer
