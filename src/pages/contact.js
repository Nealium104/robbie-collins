import Link from "next/link";
import Nav from '../components/Nav'
import ContactForm from "../components/ContactForm";
import Footer from "@/components/Footer";

export default function Contact () {
    return (
        <div id='top'>
            <Nav />
            <h1 className="font-thin text-6xl text-center mt-20 md:mt-0">
                Contact
            </h1>
            <ContactForm />
            <Footer />
        </div>
    )
}