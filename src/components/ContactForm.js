import Image from "next/legacy/image"
import { useState } from "react";

export default function ContactForm () {
    const [showSuccess, setShowSuccess] = useState(false)

    async function handleOnSubmit(e) {
        e.preventDefault();
        const formData = {};
        Array.from(e.currentTarget.elements).forEach(field => {
          if (!field.name) return;
          formData[field.name] = field.value;
        });
        const response = await fetch('/api/mail', {
          method: 'post',
          body: JSON.stringify(formData),
        });
    
        if (response.ok) {
          setShowSuccess(true);
        } else {
          // Handle the error message
        }
        console.log(formData);
      }

    return (
    <>
        <div className="flex justify-center py-3">
            <div className="bg-primary/50 shadow-2xl items-center">
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
                    <h2 className="card-title">Contact me for opportunities and lessons here:</h2>
                        <form action="post" onSubmit={handleOnSubmit}>
                            <div>
                                <label htmlFor="name">Name:</label>
                                <input type="text" name="name" placeholder="Type your name here" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <input type="email" name="email" placeholder="Type your email here" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div>
                                <label htmlFor="message">Message:</label>
                                <textarea name="message" className="textarea textarea-bordered block w-full" placeholder="Type your message here"></textarea>
                            </div>        
                            {showSuccess && (
                                <div className="alert alert-success mt-4">Success! Your message has been sent!</div>
                            )}
                            <button className="btn btn-neutral my-4">Submit</button>
                        </form>
            
                </div>
            </div>
        </div>
    </>
    )
}