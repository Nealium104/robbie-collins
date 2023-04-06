import Image from "next/image"

export default function ContactForm () {
    return (
    <>
    <div className="flex justify-center py-3">
            <div className="card w-96 bg-primary shadow-2xl items-center">
        <figure className="px-10 pt-10">
            <img src="/contact.webp/" alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">Contact me here:</h2>
                    <div>
                   <span>Name:</span>
                    <input type="text" placeholder="Type your name here" className="input input-bordered w-full max-w-xs" />
                 </div>
                 <div>
                     <span>Email:</span>
                    <input type="email" placeholder="Type your email here" className="input input-bordered w-full max-w-xs" />
                 </div>
               <div>
                    <span>Message:</span>
                    <textarea className="textarea textarea-bordered block w-full" placeholder="Type your message here"></textarea>
                </div>
        </div>
        </div>
    </div>
    </>
    )
}

// export default function ContactForm () {
//     return (
//         <div className="flex justify-center items-center">
//             <div className="flex flex-col justify-center items-center border-2 border-primary rounded-md w-1/4 bg-base-300 p-10">
//                 <h1 className="font-bold">Contact me here:</h1>
//                 <div>
//                     <span>Name:</span>
//                     <input type="text" placeholder="Type your name here" className="input input-bordered w-full max-w-xs" />
//                 </div>
//                 <div>
//                     <span>Email:</span>
//                     <input type="email" placeholder="Type your email here" className="input input-bordered w-full max-w-xs" />
//                 </div>
//                 <div>
//                     <span>Message:</span>
//                     <textarea className="textarea textarea-bordered block" placeholder="Type your message here"></textarea>
//                 </div>
//             </div>
//         </div>
//     )
// }