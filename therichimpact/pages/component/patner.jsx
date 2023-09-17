import HeadComp from '@/layout/HeadComp'
import React, { useRef, useState } from 'react'
import Image from "next/image"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import emailjs from '@emailjs/browser';
import { Oval } from 'react-loader-spinner'

const Patner = () => {
    const form = useRef()
    const [formState, setFormState] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault()
        const serviceId = process.env.NEXT_PULBIC_SERVICE_ID
        const templateId = process.env.NEXT_PULBIC_TEMPLATE_ID
        const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY
        emailjs.sendForm("service_ds3myg1", "template_yuylfoj", form.current, publicKey)
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        })
    }
  return (
    <>
        <HeadComp title="The Rich Impact - Work With Us" />
        <main className="bg-[#01020F] pt-[100px] md:pt-[72px] pb-[30px]">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col-reverse md:flex-row justify-between items-center w-[80%] md:w-[80%] mx-auto">
                <div className="md:w-[45%] w-full">
                    <h2 className=" font-satoshi text-white text-[24px] md:text-[32px] mb-[32px] font-[700]">Ready To Work With Us?</h2>
                    <div className="mb-[16px]">
                        <input type="text" name="user_name" placeholder="Name (or Company's Name)" className="w-full h-[58px] hover:bg-[#ffffff4c] transition-[.6s] focus:bg-[#ffffff4c] py-[15px] px-[10px] outline-none font-satoshi text-white font-[400] text-[18px] bg-[#FFFFFF66]" />
                    </div>
                    <div className="mb-[16px]">
                        <input type="text" name="user_email" placeholder="Email (or Telegram handle)" className="w-full hover:bg-[#ffffff4c] transition-[.6s] h-[58px] p-[15px] outline-none focus:bg-[#ffffff4c] font-satoshi text-white font-[400] text-[18px] bg-[#FFFFFF66]" />
                    </div>
                    <div className="mb-[40px]">
                        <textarea name="message" className="w-full hover:bg-[#ffffff4c] transition-[.6s] p-[15px] outline-none focus:bg-[#ffffff4c] font-satoshi text-white font-[400] text-[18px] bg-[#FFFFFF66]" id=""></textarea>
                    </div>
                    <div className="">
                        <button type='submit' className="w-full py-[16px] text-center btn-ux-b text-white font-satoshi bg-[#FCA311] font-[700] text-[18px] rounded-[16px]">{formState ? (
                            <div className="w-fit mx-auto">
                                <Oval
                                    height="20"
                                    width="30"
                                    radius="9"
                                    color="white"
                                    ariaLabel="loading"
                                    wrapperStyle
                                />
                            </div>
                        ): ("SEND")}</button>
                    </div>
                </div>
                <div className="md:w-[45%] w-full">
                    <Image src="/images/mail-img.svg" alt="" height={1} width={500}/>
                </div>
            </form>
        </main>
        <ToastContainer />
    </>
  )
}

export default Patner
