import Image from "next/legacy/image"

export default function ContactForm () {
    async function handleOnSubmit (e) {
        e.preventDefault();
        const formData = {}
        Array.from(e.currentTarget.elements).forEach(field => {
            if (!field.name) return;
            formData[field.name] = field.value;
        })
        fetch('/api/mail', {
            method: 'post',
            body: JSON.stringify(formData)
        })
        console.log(formData)
    }

    return (
    <>
    <div className="flex justify-center py-3">
            <div className="card w-96 bg-primary shadow-2xl items-center">
            <div>
                <figure className="px-10 pt-10">
                    <Image 
                    src="/contact.webp" 
                    alt="Shoes" 
                    className="rounded-xl"
                    width = {2000}
                    height = {3000}
                    priority
                    />
                </figure>
            </div>
        <div className="card-body items-center text-center">
            <h2 className="card-title">Contact me here:</h2>
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
                    <button className="btn btn-neutral my-4">Submit</button>
                </form>
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