import HeadComp from '@/layout/HeadComp'
import React, { useRef, useState } from 'react'
import Image from "next/image"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import emailjs from '@emailjs/browser';
import { Oval } from 'react-loader-spinner'

const Patner = () => {
    const form = useRef()
    const [loadState, setLoadState] = useState(false)
    const [nameState, setNameState] = useState(false)
    const [mailState, setMailState] = useState(false)
    const [messageState, setMessageState] = useState(false)
    const [formState, setFormState] = useState(false)
    const [user, setUser] = useState({ user_name: "", user_email: "", message: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };
    const sendEmail = (e) => {
        e.preventDefault()
        setLoadState(true)
        console.log(user)
        if (user.user_name == null || user.user_name == "") {
            setNameState(true)
            setTimeout(() => setNameState(false), 1000)
            return
        }
        if (user.user_email == null || user.user_email == "") {
            setMailState(true)
            setTimeout(() => setMailState(false), 1000)
            return
        }
        if (user.message == null || user.message == "") {
            setMessageState(true)
            setTimeout(() => setMessageState(false), 1000)
            return
        }
        // const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY
        // emailjs.sendForm("service_ds3myg1", "template_yuylfoj", form.current, publicKey)
        // .then((result) => {
        //     console.log(result.text)
        // }, (error) => {
        //     console.log(error.text)
        // })
    }
  return (
    <>
        <HeadComp title="The Rich Impact - Work With Us" />
        <main className="bg-[#01020F] pt-[100px] md:pt-[72px] pb-[30px]">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col-reverse md:flex-row justify-between items-center w-[80%] md:w-[80%] mx-auto">
                <div className="md:w-[45%] w-full">
                    <h2 className=" font-satoshi text-white text-[24px] md:text-[32px] mb-[32px] font-[700]">Ready To Work With Us?</h2>
                    <div className="mb-[16px]">
                        <input value={user.user_name} onChange={handleChange} type="text" name="user_name" placeholder="Name (or Company's Name)" className="w-full h-[58px] hover:bg-[#ffffff4c] transition-[.6s] focus:bg-[#ffffff4c] py-[15px] px-[10px] outline-none font-satoshi text-white font-[400] text-[18px] bg-[#FFFFFF66]" />
                        {nameState && <p className="text-red-500 font-satoshi">Name cannot be empty!</p>}
                    </div>
                    <div className="mb-[16px]">
                        <input value={user.user_email} onChange={handleChange} type="text" name="user_email" placeholder="Email (or Telegram handle)" className="w-full hover:bg-[#ffffff4c] transition-[.6s] h-[58px] p-[15px] outline-none focus:bg-[#ffffff4c] font-satoshi text-white font-[400] text-[18px] bg-[#FFFFFF66]" />
                        {mailState && <p className="text-red-500 font-satoshi">Mail or Telegram ID cannot be empty!</p>}
                    </div>
                    <div className="mb-[40px]">
                        <textarea name="message" value={user.message} onChange={handleChange} className="w-full hover:bg-[#ffffff4c] transition-[.6s] p-[15px] outline-none focus:bg-[#ffffff4c] font-satoshi text-white font-[400] text-[18px] bg-[#FFFFFF66]" id=""></textarea>
                        {messageState && <p className="text-red-500 font-satoshi">Message cannot be empty!</p>}
                    </div>
                    <div className="">
                        <button type='submit' className="w-full py-[16px] text-center btn-ux-b text-white font-satoshi bg-[#FCA311] font-[700] text-[18px] rounded-[16px]">{loadState ? (
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
