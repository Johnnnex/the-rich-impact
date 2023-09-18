import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HeadComp from '@/layout/HeadComp'

const Error = () => {
  return (
    <>
        <HeadComp title="The Rich Impact - 404" />
        <section className="bg-[#01020F] pt-[50px] pb-[20px]">
            <Image src="/images/err.svg" alt="404" className="w-fit mx-auto wow fadeInDown mb-[32px]" height={1} width={450} />
            <h3 className="text-white text-center text-[32px] wow fadeIn font-[400] font-satoshi">Oops!  Page Not Found!</h3>
            <p className="text-white font-satoshi mt-[16px] min-w-[20rem] text-[18px] wow fadeIn w-[50%] mx-auto text-center">
                It seems you’ve ventured into the digital wilderness, and our servers are playing hide and seek. Fear not though! While the page you’re looking for has gone on a brief vacation, explore our website. <Link href="/" className="text-[#FCA311] font-[500]">HOME</Link>
            </p>
        </section>
    </>
  )
}

export default Error
