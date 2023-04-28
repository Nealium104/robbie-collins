import Image from "next/legacy/image";
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailure, setShowFailure] = useState(false)
  const [loading, setLoading] = useState(false);
  const recaptchaRef = useRef(null);

  async function handleOnSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);

    const recaptchaValue = recaptchaRef.current.getValue();
    if (!recaptchaValue) {
      setLoading(false);
      return;
    }

    formData.append('recaptcha', recaptchaValue);

    const response = await fetch("/api/mail", {
      method: "post",
      body: formData,
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
                width={400}
              />
            </figure>
            <form onSubmit={handleOnSubmit}>
              <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" required />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" required />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea name="message" required />
              </div>
              <div>
                <ReCAPTCHA
                  sitekey="<your_site_key>"
                  ref={recaptchaRef}
                />
              </div>
              <button type="submit" disabled={loading}>
                {loading ? "Loading..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
      {showSuccess && <p>Message sent successfully!</p>}
      {showFailure && <p>Failed to send message.</p>}
    </>
  );
}