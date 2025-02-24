// import React from 'react'
import { RiGithubFill, RiLinkedinBoxFill } from "@remixicon/react"
import { useEffect,useRef } from "react"

import {gsap} from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
    const contactRef=useRef(null)

    useEffect(()=>{
            const ctx=gsap.context(()=>{
                gsap.from(".contact-text",{
                    opacity:0,
                    y:30,
                    duration:1,
                    ease:"power3.out",
                  
                    scrollTrigger:{
                        trigger:contactRef.current,
                        start:"top 80%",
                        end:"bottom 90%",
                        toggleActions:"play none none reverse",
    
    
                    }
                })
                gsap.from(".contact-icon",{
                    opacity:0,
                    y:20,
                    duration:1,
                    ease:"power3.out",
                  
                    scrollTrigger:{
                        trigger:contactRef.current,
                        start:"top 80%",
                        end:"bottom 90%",
                        toggleActions:"play none none reverse",
    
    
                    }
                })
            },contactRef)
             return ()=>ctx.revert()
        },[])
  return (
    <section className="py-16" id="contact" ref={contactRef}>
        <div className="px-4 text-center">
            <h2 className="contact-text mb-8 text-3xl font-medium lg:text-4xl">Contact</h2>
            <p className="contact-icon mb-4 text-lg lg:text-xl">Feel Free to Reach Out Me Via Email:{" "}
                <a href="moulya2310@gmail.com" className="border-b">moulya2310@gmail.com</a>
            </p>
            <div className="mt-8 flex justify-center pace-x-6">
                <a href="https://www.linkedin.com/in/moulyasree2310/" target="_blank" rel="noopener noreferrer" className="contact-icon" aria-label="Visit My LinkedIn Profile">
                <RiLinkedinBoxFill className="text-3xl"></RiLinkedinBoxFill>
                </a>
                <a href="https://github.com/Moulyasree1234" target="_blank" rel="noopener noreferrer" className="contact-icon" aria-label="Visit My Github Profile">
                <RiGithubFill className="text-3xl"/>
                </a>
                
            </div>
        </div>
      
    </section>
  )
}

export default Contact
