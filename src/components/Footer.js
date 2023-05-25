import { BsFacebook } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

export default function Footer () {
    return (
        <footer className="bg-transparent mt-7">
            <div className="items-center">
                <p className="font-thin w-screen text-center">Copyright © 2023 - All rights reserved</p>
            </div> 
            <div className="flex text-center w-screen justify-center py-5"> 
                <a className="px-3" href="https://www.facebook.com/robbie.collins.9026"><BsFacebook className='hover:text-primary' /></a>
                <a className="px-3" href="https://www.instagram.com/collins_trumpet/"><BsInstagram className='hover:text-primary'/></a>
                <a className="px-3" href="https://www.youtube.com/@rwctrumpet"><BsYoutube className='hover:text-primary' /></a>
            </div>
        </footer>
    )
}    