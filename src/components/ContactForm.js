import Image from "next/legacy/image";
import { useState, useRef, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import ReCAPTCHA, { ReCaptchaRef } from "react-google-recaptcha";

export default function ContactForm() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailure, setShowFailure] = useState(false)
  const [loading, setLoading] = useState(false);
  const [imageIsLoaded, setImageIsLoaded] = useState(false)
  const recaptchaRef = useRef(null)

  async function handleOnSubmit(e) {
    e.preventDefault();
    setLoading(true);
  
    // Execute the invisible reCAPTCHA
    const recaptchaValue = await recaptchaRef.current.executeAsync();
    recaptchaRef.current.reset();
  
    const data = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      message: e.target.elements.message.value,
      recaptchaValue,
    }
  
    const response = await fetch("/api/mail", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  
    setLoading(false);
    if (response.ok) {
      setShowSuccess(true);
    } else {
      setShowFailure(true);
    }
    console.log(data);
  }

  const spring = useSpring({
    opacity: imageIsLoaded ? 1 : 0,
    config: { duration: 1000},
  })
  
  function onChange(value) {
    console.log("Captcha value:", value);
  }

    return (
    <>
        <div className="flex justify-center py-3">
            <div className="bg-black/25 shadow-2xl items-center">
                <div>
                    <animated.figure className="px-10 pt-10 text-center" style={spring}>
                        <Image 
                        src="https://res.cloudinary.com/dwbwyzsyp/image/upload/v1687393780/Robbie/contact_ryqj3w.jpg" 
                        alt="Shoes"
                        width = {400}
                        height = {600}
                        placeholder="blur"
                        blurDataURL="/blur/contactBlur.jpg"
                        onLoad={() => setImageIsLoaded(true)}
                        />
                    </animated.figure>
                </div>
                <div className="card-body items-center">
                    <h2 className="card-title font-thin text-2xl text-center">Contact me for opportunities and lessons here:</h2>
                        <form action="post" onSubmit={handleOnSubmit} className="w-3/4 md:w-3/5 bg-base-100 rounded-xl py-4 px-4 flex flex-col items-center">
                            <div className="flex flex-col w-3/4">
                                <div className="w-full items-center"> 
                                  <label className="font-thin block" htmlFor="name">Name:</label>
                                  <input type="text" name="name" placeholder="Type your name here" className="font-thin input input-bordered w-full bg-white text-black" required />
                                </div>
                                <div className="w-full py-3">
                                    <label className="font-thin block" htmlFor="email">Email:</label>
                                    <input type="email" name="email" placeholder="Type your email here" className="font-thin input input-bordered w-full bg-white text-black" required/>
                                </div>
                                <div className="w-full py-3">
                                    <label className="font-thin block" htmlFor="message">Message:</label>
                                    <textarea name="message" placeholder="Type your message here" className="font-thin textarea textarea-bordered w-full h-40 bg-white text-black" required></textarea>
                                </div>
                            <div className="flex justify-center py-5">
                              <ReCAPTCHA
                              ref={recaptchaRef}
                              size="invisible" 
                              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                              onChange={onChange}
                              />
                            </div>
                            {showSuccess && (
                                <div className="alert alert-success mt-4 text-center">
                                Success! Your message has been sent!
                                </div>
                            )}
                            {showFailure && (
                                <div className="alert alert-error mt-4 text-center">
                                Error! Your message could not be sent. Please refresh and try again.
                                </div>
                            )}
                            {loading ? (
                                <div className="py-6 flex flex-col">
                                    <div
                                    className="place-self-center inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                    role="status">
                                </div>
                                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                              </div>
                            ) : (
                                <button className="btn border-none bg-primary text-black w-1/2 hover:bg-black/75 hover:text-white place-self-center"
                                disabled={showSuccess}
                                >
                                Submit
                                </button>
                            )}
                            </div>
                        </form>
            
                </div>
            </div>
        </div>
    </>
    )
}