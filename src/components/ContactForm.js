import Image from "next/legacy/image";
import { useState, useRef } from "react";

export default function ContactForm() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailure, setShowFailure] = useState(false)
  const [loading, setLoading] = useState(false);

  async function handleOnSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const response = await fetch("/api/mail", {
      method: "post",
      body: JSON.stringify(formData),
    });

    setLoading(false);
    if (response.ok) {
      setShowSuccess(true);
    } else {
      setShowFailure(true);
    }
    console.log(formData);
  }

    return (
    <>
        <div className="flex justify-center py-3">
            <div className="bg-black/25 shadow-2xl items-center">
                <div>
                    <figure className="px-10 pt-10 text-center">
                        <Image 
                        src="/contact.webp" 
                        alt="Shoes" 
                        className=""
                        width = {400}
                        height = {600}
                        priority
                        />
                    </figure>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-thin text-2xl">Contact me for opportunities and lessons here:</h2>
                        <form action="post" onSubmit={handleOnSubmit}>
                            <div>
                                <label className="font-thin" htmlFor="name">Name:</label>
                                <input type="text" name="name" placeholder="Type your name here" className="font-thin input input-bordered w-full max-w-xs" />
                            </div>
                            <div>
                                <label className="font-thin" htmlFor="email">Email:</label>
                                <input type="email" name="email" placeholder="Type your email here" className="font-thin input input-bordered w-full max-w-xs" />
                            </div>
                            <div>
                                <label className="font-thin" htmlFor="message">Message:</label>
                                <textarea name="message" className="font-thin textarea textarea-bordered block w-full" placeholder="Type your message here"></textarea>
                            </div>
                            {showSuccess && (
                                <div className="alert alert-success mt-4">
                                Success! Your message has been sent!
                                </div>
                            )}
                            {showFailure && (
                                <div className="alert alert-error mt-4">
                                Error! Your message could not be sent. Please try again.
                                </div>
                            )}
                            {loading ? (
                                <div
                                class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                role="status">
                                <span
                                  class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                                  >Loading...</span
                                >
                              </div>
                            ) : (
                                <button className="btn border-none bg-primary text-black my-4 hover:bg-black/75 hover:text-white"
                                disabled={showSuccess}>
                                Submit
                                </button>
                            )}
                        </form>
            
                </div>
            </div>
        </div>
    </>
    )
}